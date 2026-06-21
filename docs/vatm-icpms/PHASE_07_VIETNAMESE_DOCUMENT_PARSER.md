# Phase 7 — Vietnamese Document Parser

## Mục tiêu

Nhận dạng cấu trúc phân cấp của văn bản pháp lý tiếng Việt từ nội dung đã bóc tách (Phase 6) bằng regex thuần túy — không AI, không OCR.

Kết quả: cây mục lục gồm PHẦN → CHƯƠNG → MỤC → TIỂU MỤC → ĐIỀU → KHOẢN → ĐIỂM và PHỤ LỤC.

---

## Kiến trúc tổng quan

```
IcpmsIngestionJob (COMPLETED, vi)
    └─ [Button: Chạy parser văn bản Việt Nam]
        └─ createAndRunVietnameseParseJob (mutation)
            └─ IcpmsDocumentParseJob (RUNNING → COMPLETED/FAILED)
                └─ IcpmsParsedDocumentSection[] (flat list, tree rebuilt on client)
```

---

## Cơ sở dữ liệu

### Bảng `icpms_document_parse_jobs`

| Cột | Kiểu | Mô tả |
|---|---|---|
| id | varchar(32) | GID (entity type 107) |
| tenant_id | varchar(11) | Multi-tenant |
| organization_id | varchar(32) | |
| document_id | varchar(32) | |
| document_version_id | varchar(32) | |
| document_file_id | varchar(32) | |
| ingestion_job_id | varchar(32) | FK → icpms_ingestion_jobs |
| parser_type | varchar(50) | VIETNAMESE |
| status | varchar(50) | PENDING / RUNNING / COMPLETED / FAILED |
| total_sections | int | Tổng số mục nhận dạng được |
| max_depth | int | Độ sâu cây lớn nhất |
| language | varchar(50) | vi |
| error_message | text | Nullable |
| started_at / finished_at | timestamptz | |
| created_by | varchar(32) | |
| created_at / updated_at / deleted_at | timestamptz | |

Migration: `pkg/coredata/migrations/20260611T020000Z.sql`

### Bảng `icpms_parsed_document_sections`

| Cột | Kiểu | Mô tả |
|---|---|---|
| id | varchar(32) | GID (entity type 108) |
| tenant_id / organization_id / document_id / document_version_id | varchar(32) | |
| parse_job_id | varchar(32) | FK → icpms_document_parse_jobs |
| parent_id | varchar(32) | Nullable — ID mục cha (self-referential) |
| section_type | varchar(50) | PART / CHAPTER / SECTION / SUBSECTION / ARTICLE / CLAUSE / POINT / APPENDIX / UNKNOWN |
| section_number | varchar(255) | Nullable — số thứ tự (I, 1, a, …) |
| title | text | Tiêu đề sau số |
| full_heading | text | Toàn bộ dòng heading |
| content_start_line / content_end_line | int | Vị trí dòng trong văn bản gốc |
| depth_level | int | 0=PART/APPENDIX, 1=CHAPTER, …, 6=POINT |
| sort_order | int | Thứ tự DFS traversal |
| confidence_score | int | 95=rõ ràng, 90=khá rõ, 75=KHOẢN, 65=ĐIỂM |
| raw_text | text | Nullable |

Migration: `pkg/coredata/migrations/20260611T020500Z.sql`

---

## Regex parser

File: `pkg/probo/vietnamese_parser.go`

### Phân cấp và pattern

| Loại | Pattern (Go regex) | depth_level | confidence |
|---|---|---|---|
| PHẦN | `^(?:PHẦN\|Phần)\s+([IVXLCDM]+\|[0-9]+)[.:]\s*(.*)$` | 0 | 95 |
| CHƯƠNG | `^(?:CHƯƠNG\|Chương)\s+([IVXLCDM]+\|[0-9]+)[.:]\s*(.*)$` | 1 | 95 |
| TIỂU MỤC | `^(?:TIỂU MỤC\|Tiểu mục)\s+([0-9]+)[.:]\s*(.*)$` | 3 | 90 |
| MỤC | `^(?:MỤC\|Mục)\s+([0-9]+)[.:]\s*(.*)$` | 2 | 90 |
| ĐIỀU | `^(?:Điều\|ĐIỀU)\s+([0-9]+)[.:]\s*(.*)$` | 4 | 95 |
| KHOẢN | `^([0-9]+)\.\s+(.+)$` | 5 | 75 |
| ĐIỂM | `^([a-zđ])\)\s+(.+)$` | 6 | 65 |
| PHỤ LỤC | `^(?:PHỤ LỤC\|Phụ lục)\s*([IVXLCDM0-9A-Z]*)[.:]\s*(.*)$` | 0 | 95 |

**Lưu ý:** TIỂU MỤC được kiểm tra TRƯỚC MỤC để tránh match sai.

### Thuật toán xây cây

Dùng stack 10 phần tử, index = depth_level:
- Khi gặp node mới tại depth D: stack[D] = node, xóa stack[D+1..9]
- Parent = stack[d-1] với d là depth nhỏ nhất có giá trị
- PHỤ LỤC luôn là root (không có parent)

---

## GraphQL API

File: `pkg/server/api/console/v1/graphql/icpms_parse_job.graphql`

### Mutation

```graphql
mutation CreateAndRunVietnameseParseJob($input: CreateIcpmsDocumentParseJobInput!) {
  createAndRunVietnameseParseJob(input: $input) {
    parseJob {
      id
      status
      totalSections
      maxDepth
      errorMessage
    }
  }
}
```

**Input:** `{ ingestionJobId: ID! }`

Parser chạy **đồng bộ** trong cùng HTTP request (không cần worker riêng). Với văn bản cỡ vài trăm trang, thời gian thường < 1 giây.

### Query

```graphql
query LatestParseJobForIngestionJob($ingestionJobId: ID!) {
  latestParseJobForIngestionJob(ingestionJobId: $ingestionJobId) {
    id
    status
    totalSections
    maxDepth
    language
    errorMessage
    startedAt
    finishedAt
  }
}

query ParsedSectionsForJob($parseJobId: ID!) {
  parsedSectionsForJob(parseJobId: $parseJobId) {
    id
    parentId
    sectionType
    sectionNumber
    title
    fullHeading
    depthLevel
    sortOrder
    confidenceScore
  }
}
```

Client nhận flat list, tự build cây qua `parentId`.

---

## UI

### Tab "Cấu trúc văn bản" trong Job Detail Panel

Điều kiện hiển thị nút "Chạy parser văn bản Việt Nam":
- Ingestion job status = COMPLETED
- languageDetected chứa "viet" hoặc "vi"

Trạng thái:
1. **Chưa có parse job** → hiển thị nút
2. **Parse job RUNNING/PENDING** → hiển thị badge trạng thái
3. **Parse job COMPLETED** → hiển thị cây mục lục (collapsible)
4. **Parse job FAILED** → hiển thị lỗi + nút Chạy lại

Cây mục lục được render đệ quy, mặc định mở 2 cấp đầu, click để expand/collapse.

---

## Entity Types

| Hằng số | Giá trị |
|---|---|
| `IcpmsDocumentParseJobEntityType` | 107 |
| `IcpmsParsedDocumentSectionEntityType` | 108 |

---

## Files thay đổi

### Backend (Go)
- `pkg/coredata/migrations/20260611T020000Z.sql` — bảng parse_jobs
- `pkg/coredata/migrations/20260611T020500Z.sql` — bảng parsed_sections
- `pkg/coredata/icpms_parse_enums.go` — enums mới
- `pkg/coredata/icpms_document_parse_job.go` — entity
- `pkg/coredata/icpms_parsed_document_section.go` — entity
- `pkg/coredata/entity_type_reg.go` — thêm 107, 108
- `pkg/probo/vietnamese_parser.go` — regex parser
- `pkg/probo/icpms_parse_job_service.go` — service
- `pkg/probo/service.go` — thêm IcpmsParseJobs field
- `pkg/server/api/console/v1/graphql/icpms_parse_job.graphql` — schema
- `pkg/server/api/console/v1/icpms_parse_job_resolvers.go` — resolvers
- `pkg/server/api/console/v1/gqlgen.yaml` — model bindings

### Frontend (TypeScript/React)
- `apps/console/src/__generated__/core/IcpmsIngestionJobsPageCreateVietnameseParseJobMutation.graphql.ts`
- `apps/console/src/__generated__/core/IcpmsIngestionJobsPageLatestParseJobQuery.graphql.ts`
- `apps/console/src/__generated__/core/IcpmsIngestionJobsPageParsedSectionsQuery.graphql.ts`
- `apps/console/src/pages/organizations/icpms-ingestion/IcpmsIngestionJobsPage.tsx` — tab + tree UI

---

## Giới hạn Phase 7

- Không hỗ trợ ICAO parser, OCR
- Không thêm menu sidebar mới
- Không có Requirements, Checklist, AI Review
- KHOẢN và ĐIỂM có confidence thấp (75/65) vì pattern `1.` và `a)` có thể nhầm với danh sách thông thường
- Parser chạy đồng bộ — không phù hợp với văn bản > 1000 trang (cần worker async ở phase sau)
