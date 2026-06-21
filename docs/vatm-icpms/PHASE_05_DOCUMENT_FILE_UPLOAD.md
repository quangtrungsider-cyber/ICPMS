# Báo cáo Phase 5 - Document File Upload (Quản lý file gốc của tài liệu)

## 1. Yêu cầu đã thực hiện
Toàn bộ 14 yêu cầu của Phase 5 đã được triển khai đầy đủ và chính xác:
- **Tập trung vào Document Version:** Các file gốc được gắn trực tiếp vào `document_version_id`.
- **Hỗ trợ định dạng & dung lượng:** Đã cấu hình backend chỉ cho phép upload `PDF, DOC, DOCX, TXT` và giới hạn kích thước tối đa là `100MB`.
- **Đảm bảo tính duy nhất:** Cấu trúc backend hỗ trợ 1 phiên bản tài liệu (`document_version_id`) chỉ có duy nhất 1 file `is_active = true`. Khi tải lên mới, bạn có quyền "thay thế", lúc này file cũ sẽ tự động bị đánh dấu `is_active = false`.
- **Luồng quản lý:** Cho phép xem danh sách file, tải file qua presigned URL (có verify quyền truy cập), thay thế và xóa mềm (đưa `upload_status` thành `DELETED`).
- **Cập nhật trạng thái:** Khi file được upload thành công hoặc bị xóa sạch, trường `raw_file_status` của version sẽ được tự động đổi tương ứng giữa `UPLOADED`, `NOT_UPLOADED` hoặc `FAILED`.
- **Bảo mật File Download:** Không có link public nào. API tải xuống sẽ kiểm tra quyền `ActionDocumentGet` và sinh ra URL tạm thời.
- **Không vượt quá scope:** Chưa nhúng logic AI, parser hay ingestion.

## 2. File đã thêm mới
- `pkg/coredata/icpms_document_file.go`: Core data model và các SQL queries.
- `pkg/coredata/icpms_document_file_filter.go`: Bộ filter cho danh sách file.
- `pkg/coredata/icpms_document_file_order_field.go`: Hỗ trợ sắp xếp.
- `pkg/coredata/icpms_document_file_status.go`: Enum trạng thái upload (`UPLOADED`, `FAILED`, `DELETED`).
- `pkg/probo/icpms_document_file_service.go`: Business logic upload, soft delete, đổi state của document version, kiểm tra dung lượng/đuôi file.
- `pkg/server/api/console/v1/graphql/icpms_document_file.graphql`: Lược đồ GraphQL gồm `IcpmsDocumentFile`, `UploadIcpmsDocumentFileInput`, ...
- `pkg/server/api/console/v1/icpms_document_file_resolvers.go`: Các controller/resolver để gọi tới service backend.
- `pkg/server/api/console/v1/types/icpms_document_file.go`: Định nghĩa kiểu GraphQL trả về.
- `apps/console/src/pages/organizations/icpms-documents/versions/IcpmsDocumentFileUploadDialog.tsx`: Dialog UI để chọn và tải file.

## 3. File đã sửa
- `pkg/coredata/icpms_document_version.go`: Sửa lỗi kiểu dữ liệu TenantID (từ `gid.GID` thành `gid.TenantID`).
- `pkg/coredata/icpms_document.go`: Định dạng lại và tích hợp các rule về GID.
- `apps/console/src/pages/organizations/icpms-documents/IcpmsDocumentDetailView.tsx`: Thêm view để hiện danh sách file đính kèm cho một version.
- `apps/console/src/pages/organizations/icpms-documents/IcpmsDocumentForm.tsx`: Sửa đổi UI liên kết tới danh sách file.
- `probod.exe` / Các thư mục build khác đã được build lại.

## 4. API/Database đã thay đổi
- **Database:** Tạo bảng mới `icpms_document_files` thông qua 2 file migrations `20260610T105000Z.sql` và `20260610T223500Z.sql`. Bảng mới có mapping foreign key tới `document_id`, `document_version_id`, `organization_id`.
- **GraphQL API:** Thêm các Query/Mutation sau:
  - `uploadIcpmsDocumentFile(input)`
  - `replaceIcpmsDocumentFile(input)`
  - `deleteIcpmsDocumentFile(input)`
  - `generateIcpmsDocumentFileDownloadUrl(input)`
  - Query Connection `files(...)` lồng trong Type `IcpmsDocumentVersion`.

## 5. Cách Test
1. **Frontend:**
   - Vào mục **Tài liệu** -> Mở một tài liệu bất kỳ.
   - Nhấn vào danh sách phiên bản -> Chọn "Upload file gốc".
   - Tải lên 1 file PDF, chờ nó upload và hiển thị thành công.
   - Nhấn "Tải về" để kiểm tra xem file có đúng nội dung đã tải lên không.
   - Dùng tính năng thay thế (Replace) để upload đè file khác. File cũ phải biến mất khỏi danh sách file active (chỉ lưu trong DB).
2. **Backend:**
   - Sử dụng file không đúng định dạng (ví dụ `.mp4` hoặc `.exe`) -> Backend phải báo lỗi định dạng không hỗ trợ.
   - Thử tải file > 100MB -> Backend phải từ chối.

## 6. Lỗi / Vấn đề còn tồn tại
- Hiện tại UI đang xử lý hiển thị file theo một list ở trong version detail nhưng người dùng có thể muốn thấy 1 preview nhỏ (nhất là đối với PDF) ngay trên trình duyệt thay vì phải bấm download. Tính năng in-app PDF preview này nên đưa vào Phase sau.

## 7. Commit Message đề xuất
```text
feat(icpms): Phase 5 - Implement original document file upload for versions

- Implement core data and DB schema for icpms_document_files.
- Build Probo service to handle upload, replacement, and soft delete with size (<100MB) and extension (PDF/DOC/DOCX/TXT) validations.
- Automatically update IcpmsDocumentVersion's raw_file_status (UPLOADED/NOT_UPLOADED/FAILED).
- Add GraphQL resolvers for upload, replace, delete, and generating pre-signed download URLs with proper access checks.
- Build frontend dialog and detail view components to manage these files seamlessly.
- Fix gid.GID parse error for TenantID in core models.
```
