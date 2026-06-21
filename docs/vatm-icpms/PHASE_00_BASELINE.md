# PHASE 0 — Probo Baseline Report for VATM ICPMS

## 1. Mục tiêu Phase 0
- Ghi nhận trạng thái hệ thống mã nguồn Probo hiện tại.
- Phân tích kiến trúc, công nghệ và các module cốt lõi của ứng dụng.
- Đối chiếu (mapping) các module hiện có của Probo với yêu cầu nghiệp vụ của VATM ICPMS.
- Xác định các chức năng cần loại bỏ, giữ lại hoặc phải xây dựng mới.
- Thiết lập một nền tảng cơ sở (baseline) rõ ràng trước khi tiến hành chỉnh sửa mã nguồn cho dự án ICPMS.

## 2. Trạng thái Probo hiện tại
- Mã nguồn đã được clone, cài đặt phụ thuộc đầy đủ và biên dịch thành công trên môi trường cục bộ.
- Các container cơ sở dữ liệu và công cụ phụ trợ (Keycloak, Postgres, SeaweedFS) đang chạy ổn định.
- Server API (backend) và server giao diện (frontend) khởi chạy bình thường và có thể truy cập nội bộ (localhost).

## 3. Cách chạy ứng dụng hiện tại
- **Chạy các service phụ trợ:** Dùng Docker Compose.
  ```bash
  docker compose up -d
  ```
- **Chạy backend (API):** Sử dụng Make hoặc khởi chạy trực tiếp file nhị phân kèm biến môi trường:
  ```bash
  # Trên Linux/Mac
  make run 
  
  # Trên Windows
  .\probod.exe start
  ```
- **Chạy frontend:** Dùng npm Vite dev server.
  ```bash
  npm run dev
  ```
- **Frontend URL:** `http://[::1]:5173/` (Console) và `http://[::1]:5174/` (Trust)
- **Backend/API URL:** `http://localhost:8080/`
- **Database:** PostgreSQL (chạy trong Docker qua cổng 5432).
- **Service đi kèm:** Keycloak (Auth), Mailpit (Email), SeaweedFS (S3 storage), Grafana/Loki/Prometheus (Observability).

## 4. Công nghệ sử dụng
- **Frontend:** React, Vite, Relay (GraphQL client), Tailwind CSS.
- **Backend:** Golang, Gqlgen (GraphQL server framework).
- **Database:** PostgreSQL (Driver `pgx`).
- **Auth/SSO:** Keycloak.
- **File Storage:** SeaweedFS (tương thích API S3).
- **Docker:** Quản lý cơ sở hạ tầng nền.

## 5. Cấu trúc source code
- **Frontend:** `apps/console` (Ứng dụng chính) và `apps/trust` (Trang công khai).
- **Backend API:** Thư mục `cmd/probod` (Entrypoint) và `pkg/server` (GraphQL Resolvers).
- **Database Models & DB Layer:** Nằm tại `pkg/coredata/`.
- **Database Migration:** Các file SQL thuần nằm ở `pkg/coredata/migrations/`.
- **Cấu hình:** `compose.yaml` cho Docker và các biến môi trường (`.env.example`).
- **Tests:** Go tests rải rác bên cạnh code logic (ví dụ `access_entry_test.go`).
- **Docs:** Nằm trong thư mục `docs/` và `contrib/claude/` (hướng dẫn nội bộ).

## 6. Các service đang chạy (Docker)
- `postgres`: Database chính.
- `keycloak`: Dịch vụ định danh và xác thực.
- `seaweedfs`: Kho lưu trữ object / file evidence.
- `grafana`, `loki`, `prometheus`, `tempo`: Công cụ giám sát.
- `mailpit`: Bắt email nội bộ.
- `chrome`: Headless chrome để xuất PDF/Report.

## 7. Database và migration
- Database sử dụng PostgreSQL.
- Schema Migration dùng các file `.sql` thuần tại `pkg/coredata/migrations/`. Không dùng ORM như Prisma hay Ent mà dùng truy vấn SQL chuẩn và build layer struct trong Go.
- Các thực thể chính hiện có: `user`, `membership`, `organization`, `control`, `risk`, `audit`, `evidence`, `task`, `document`, `framework`.

## 8. Frontend overview
- Layout chính, Sidebar và các Routes nằm trong: `apps/console/src/pages/iam/organizations/` và `apps/console/src/routes.tsx`.
- Giao diện được module hóa theo tính năng (ví dụ `pages/organizations/documents`, `pages/organizations/risks`).
- Sử dụng Relay để truy vấn GraphQL (`__generated__`).
- Hỗ trợ đa ngôn ngữ qua i18n nhưng có thể cần tạo/dịch lại file cho Tiếng Việt.

## 9. Backend/API overview
- Dùng GraphQL, API Schema định nghĩa tại `pkg/server/api/console/v1/schema.graphql`.
- Resolvers xử lý logic nghiệp vụ nằm tại `pkg/server/api/console/v1/*_resolvers.go`.
- Nếu muốn thêm module "Ingestion Jobs", cần tạo mới `ingestion_job_resolvers.go` tại thư mục này và thêm bảng trong `pkg/coredata`.

## 10. Module hiện có của Probo
| Module | Chức năng hiện tại | Có giữ cho ICPMS không | Đổi tên thành gì |
|---|---|---|---|
| Dashboard/Context | Tổng quan trạng thái tuân thủ | Có | Tổng quan |
| Controls/Measures | Quản lý yêu cầu/kiểm soát | Có | Yêu cầu |
| Obligations | Quy tắc tuân thủ cụ thể | Có | Checklist |
| Tasks | Phân công nhiệm vụ | Có | Giao việc |
| Evidence | Tải lên chứng từ/hồ sơ | Có | Bằng chứng |
| Risks | Quản lý rủi ro | Có | Rủi ro an toàn |
| Audits | Đánh giá nội bộ | Có | Kiểm tra / Đánh giá |
| Documents | Quản lý tài liệu | Có | Tài liệu |
| Frameworks | Khung tiêu chuẩn | Có | Bộ quy định |
| People (Members) | Quản lý người dùng/vai trò | Có | Người dùng |
| Third Parties, Assets, Data | Quản lý đối tác, tài sản, dữ liệu | Không | (Ẩn đi) |

## 11. Mapping Probo sang VATM ICPMS
| Probo | VATM ICPMS | Cách xử lý |
|---|---|---|
| Controls | Yêu cầu được bóc tách | Giữ core logic, đổi tên tiếng Việt, thêm mapping vào ICAO/VN Docs |
| Evidence | Bằng chứng | Giữ nguyên logic S3 upload, thêm luồng "Duyệt/Từ chối" rõ ràng |
| Tasks | Giao việc | Mở rộng tính năng để cho phép assign công việc theo "Ban/Đơn vị VATM" thay vì chỉ theo user cá nhân |
| Risks | Rủi ro an toàn | Chỉnh sửa giao diện phù hợp với việc phân tích rủi ro an toàn bay (Safety Risk) |
| Frameworks | Bộ quy định / Tiêu chuẩn | Thay vì SOC2, sẽ là ICAO Annexes, Nghị định, Thông tư |
| Organizations | Đơn vị VATM | Tổ chức dữ liệu dựa trên danh mục 14+ Ban/Đơn vị VATM |

## 12. Module ICPMS chưa có và cần xây mới
| Module ICPMS cần có | Probo đã có chưa? | Cần làm gì ở phase sau |
|---|---|---|
| Quản lý tài liệu theo phiên bản | Một phần (có Document) | Bổ sung model DocumentVersion cho phép lưu lịch sử bản sửa đổi |
| Upload PDF/Word theo version | Có (Upload Evidence) | Đưa component Upload File vào phần tạo Document Version |
| Ingestion Jobs | Chưa | Xây dựng table/job runner mới để xử lý file bất đồng bộ |
| Parser ICAO / VN | Chưa | Cần viết script Go hoặc Python service để nhận dạng văn bản |
| Sinh AI Checklist | Chưa | Dùng API LLM (Anthropic/OpenAI) đọc text và tạo cấu trúc checklist |

## 13. Phân quyền hiện có
Probo có sẵn hệ thống Role trong Organization (`pkg/coredata/member_role.go`): `OWNER`, `ADMIN`, `EMPLOYEE`, `VIEWER`, `AUDITOR`.
Map sang VATM:
- Admin Hệ thống -> `OWNER`
- Ban ATCL -> `ADMIN`
- Cán bộ chuyên môn / Đơn vị trực thuộc -> `EMPLOYEE`
- Lãnh đạo phê duyệt -> `AUDITOR` / `ADMIN`
- Chuyên viên xem báo cáo -> `VIEWER`

## 14. File upload / Evidence hiện có
- Probo **CÓ** cơ chế upload thông qua cấu hình S3-compatible (Sử dụng SeaweedFS trên local).
- File được lưu vào Storage và ánh xạ trong DB qua entity `Evidence` hoặc `File`.
- Đã có thể gán Evidence vào Control hoặc Task.
- Cần bổ sung thêm cơ chế "Duyệt bằng chứng" rõ ràng hơn cho ICPMS, và tận dụng tính năng upload này cho phần Document gốc (PDF/Word).

## 15. Lệnh build / test / lint / migration
- Cài dependencies: `npm install` (Frontend) và `go mod tidy` (Backend).
- Chạy dev: `npm run dev` (Frontend) và `make run` (Backend).
- Chạy Docker: `docker compose up -d`
- Build Frontend: `npm run build`
- Chạy Test: Go test `go test ./...`
- Code Gen GraphQL: `make generate` và `make relay`
- Chạy Migration: Tự động chạy khi backend khởi động (`probod migrate` hoặc chạy ngầm lúc start).

## 16. Lỗi hoặc hạn chế còn tồn tại
- Việc chạy ứng dụng trên Windows trước đó gặp một số rào cản về Line Ending (CRLF vs LF) cho shell scripts và Makefile. Đã được fix ở môi trường này nhưng cần lưu ý khi reset source.
- Trình quản lý Vite có thể từ chối kết nối nếu dùng `127.0.0.1` do Nodejs chuyển loopback thành `::1` (IPv6). Phải dùng `http://[::1]:5173/`.

## 17. Rủi ro kỹ thuật ban đầu
- Việc Parse văn bản PDF tiếng Việt (Nghị định) cực kỳ phức tạp vì format không đồng nhất. Nên ưu tiên dùng DOCX hoặc dùng model LLM có context window lớn.
- Khối lượng GraphQL Schema của Probo khá đồ sộ, cần mất thời gian để tái cấu trúc và merge schema khi tạo entity mới.

## 18. Khuyến nghị cho Phase 1
- Bước ngay vào việc Việt hóa ngôn ngữ giao diện ở Frontend (Sidebar, Title).
- Chỉ comment ẩn các module không cần thiết chứ không xóa hẳn code để tránh đụng chạm GraphQL resolvers/Relay.
- Chuẩn bị DB Schema cho IngestionJob và DocumentVersion.

## 19. Kết luận Phase 0
Hệ thống Probo gốc hoạt động đủ ổn định để làm bệ phóng cho VATM ICPMS. Với bộ RBAC mạnh mẽ, GraphQL API chuẩn hóa và tích hợp Storage có sẵn, dự án chỉ cần tập trung vào việc tuỳ biến giao diện và xây dựng thuật toán Bóc tách văn bản (Parsers) thay vì loay hoay với hạ tầng quản trị user hay file storage cơ bản.
