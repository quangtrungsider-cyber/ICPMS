# PHASE 2 — VATM Units and ICPMS Roles

## 1. Mục tiêu Phase 2
- Thiết lập dữ liệu nền cho danh mục đơn vị VATM và các vai trò (roles) của hệ thống ICPMS.
- Mô hình hóa cơ chế phân quyền độc lập: Đơn vị (Unit) và Vai trò (Role).
- Tạo màn hình danh sách đơn vị VATM.
- Cấu hình các tài khoản mẫu định hướng theo thiết kế ICPMS.

## 2. Mô hình quản trị hệ thống
- **Chủ sở hữu hệ thống:** Tổng công ty Quản lý bay Việt Nam - VATM đóng vai trò là "Tenant" quản lý toàn bộ hệ thống.
- **Nguyên tắc tách đơn vị và vai trò:** 
  - **Đơn vị (Unit):** Xác định ngữ cảnh tổ chức mà người dùng thuộc về (Ban, Trung tâm, Công ty). Người dùng chỉ được xử lý dữ liệu (ví dụ: giao việc, nộp bằng chứng) gắn với đơn vị của mình.
  - **Vai trò (Role):** Xác định quyền hạn hành động trên hệ thống (ví dụ: `REVIEWER` được quyền rà soát, `UNIT_USER` được quyền nộp tài liệu). 
  - *Ví dụ:* Một người dùng ở "Ban Kỹ thuật" có thể được gán vai trò `ICPMS_REVIEWER`, trong khi người khác ở cùng ban đó chỉ có vai trò `ICPMS_UNIT_USER`. Quyền không bị gắn cứng vào tên Ban.

## 3. Danh mục đơn vị VATM đã tạo
*Danh mục này hiện được lưu tại `apps/console/src/pages/iam/organizations/units/UnitsPage.tsx` dạng config tĩnh (Phương án 3).*

| Mã đơn vị | Tên đơn vị | Loại đơn vị | Trạng thái |
|---|---|---|---|
| VATM | Tổng công ty Quản lý bay Việt Nam | Cấp Tổng công ty | Hoạt động |
| VATM_ATCL | Ban An toàn - Chất lượng | Ban chức năng | Hoạt động |
| VATM_KL | Ban Không lưu | Ban chức năng | Hoạt động |
| VATM_KT | Ban Kỹ thuật | Ban chức năng | Hoạt động |
| VATM_TCCB | Ban Tổ chức cán bộ - Lao động | Ban chức năng | Hoạt động |
| VATM_KH | Ban Kế hoạch | Ban chức năng | Hoạt động |
| VATM_VP | Văn phòng | Ban chức năng | Hoạt động |
| VATM_TRAINING | Trung tâm Đào tạo | Đơn vị chuyên môn | Hoạt động |
| VATM_NORTHERN_ATM | Công ty Quản lý bay miền Bắc | Đơn vị trực thuộc | Hoạt động |
| VATM_CENTRAL_ATM | Công ty Quản lý bay miền Trung | Đơn vị trực thuộc | Hoạt động |
| VATM_SOUTHERN_ATM | Công ty Quản lý bay miền Nam | Đơn vị trực thuộc | Hoạt động |
| VATM_AIS | Trung tâm AIS | Đơn vị chuyên môn | Hoạt động |
| VATM_MET | Trung tâm MET | Đơn vị chuyên môn | Hoạt động |
| VATM_SAR | Trung tâm SAR | Đơn vị chuyên môn | Hoạt động |
| VATM_ATFM | Trung tâm ATFM | Đơn vị chuyên môn | Hoạt động |

## 4. Nhóm quyền ICPMS đã tạo
*Danh sách các quyền sẽ được map vào Probo IAM Policy ở các phase sau.*

| Mã quyền | Tên quyền | Mô tả |
|---|---|---|
| ICPMS_SYSTEM_OWNER | Chủ sở hữu hệ thống | Vai trò đại diện cấp VATM, theo dõi tổng thể hệ thống |
| ICPMS_SYSTEM_ADMIN | Quản trị hệ thống | Quản lý cấu hình, người dùng, vai trò, phân quyền |
| ICPMS_COMPLIANCE_MANAGER | Quản lý tuân thủ | Quản lý quy trình tuân thủ, checklist, giao việc |
| ICPMS_DOCUMENT_MANAGER | Quản lý tài liệu | Tạo, cập nhật, quản lý tài liệu và phiên bản |
| ICPMS_REVIEWER | Người rà soát | Rà soát yêu cầu, checklist, bằng chứng |
| ICPMS_APPROVER | Người phê duyệt | Phê duyệt checklist, bằng chứng, báo cáo theo phân quyền |
| ICPMS_UNIT_MANAGER | Đầu mối đơn vị | Quản lý việc được giao của đơn vị |
| ICPMS_UNIT_USER | Người dùng đơn vị | Cập nhật tình trạng, nộp bằng chứng |
| ICPMS_VIEWER | Người xem | Chỉ xem dữ liệu được phân quyền |

## 5. Tài khoản demo định hướng
Do kiến trúc core của Probo bảo mật việc gen `iam_identities`, `password hash (PBKDF2)` và `GIDs` rất chặt chẽ, việc dùng file seed SQL trực tiếp sẽ gây hỏng toàn vẹn dữ liệu. Trong Phase 2, các tài khoản này được quy hoạch trên document. Bạn có thể tự dùng tính năng **Register** trên giao diện với email tương ứng để test:

| Username (Email) | Vai trò | Đơn vị |
|---|---|---|
| admin@vatm.vn | ICPMS_SYSTEM_ADMIN | VATM |
| owner@vatm.vn | ICPMS_SYSTEM_OWNER | VATM |
| compliance_manager@vatm.vn | ICPMS_COMPLIANCE_MANAGER | VATM |
| document_manager@vatm.vn | ICPMS_DOCUMENT_MANAGER | VATM |
| reviewer_atcl@vatm.vn | ICPMS_REVIEWER | Ban An toàn - Chất lượng |
| unit_manager_north@vatm.vn | ICPMS_UNIT_MANAGER | Công ty Quản lý bay miền Bắc |
| unit_user_north@vatm.vn | ICPMS_UNIT_USER | Công ty Quản lý bay miền Bắc |

## 6. Cách mapping vào Probo hiện tại
- **Đơn vị:** Sử dụng Phương án 3 (Cấu hình Frontend) để hiển thị danh mục nhằm không làm xáo trộn cấu trúc Database của GRC Probo ở giai đoạn đầu. Màn hình hiển thị "Danh mục đơn vị" đã được tạo.
- **Roles:** Sẽ tạo bảng mở rộng hoặc map với `MembershipRole` (ADMIN, EMPLOYEE, VIEWER) của Probo thông qua logic ở các Phase sau.

## 7. Database/seed/migration đã thay đổi
- Không thay đổi trực tiếp DB Schema / Migration để bảo toàn sự ổn định của hệ thống. Dữ liệu được cấu hình tĩnh ở lớp UI phục vụ việc duyệt thiết kế.

## 8. Giao diện đã thêm/sửa
- Đã thêm menu **Đơn vị** trên Sidebar (Nằm dưới phần Người dùng).
- Đã tạo màn hình `UnitsPage` hiển thị dạng Bảng danh sách các đơn vị theo yêu cầu với tính năng tìm kiếm tích hợp.

## 9. File đã sửa
- `apps/console/src/pages/iam/organizations/_components/Sidebar.tsx`: Thêm menu "Đơn vị".
- `apps/console/src/routes/placeholderRoutes.tsx`: Thêm đường dẫn trỏ đến `/units`.

## 10. File đã thêm
- `apps/console/src/pages/iam/organizations/units/UnitsPage.tsx`: Chứa cấu hình danh sách đơn vị và giao diện Table.

## 11. Cách kiểm thử
- Bật Dev Server: `npm run dev`
- Truy cập vào hệ thống, nhìn xuống Sidebar góc dưới cùng sẽ thấy menu **Đơn vị**.
- Bấm vào menu **Đơn vị** để xem bảng danh sách 15 Đơn vị của VATM.
- Chạy thử tính năng tìm kiếm (ví dụ gõ "Không lưu", bảng sẽ tự động filter).

## 12. Lỗi hoặc hạn chế còn tồn tại
- Dữ liệu đơn vị hiện tại là tĩnh (Static Array). Nếu người dùng muốn thêm/sửa/xóa đơn vị thì chưa có API Backend để lưu trữ. Tính năng này sẽ được phát triển đầy đủ bằng DB tables ở phase quản trị hệ thống.

## 13. Khuyến nghị cho Phase 3
- Ở Phase 3 khi phát triển Document Management, chúng ta nên bắt đầu thiết kế DB Schema mở rộng cho `icpms_units` và `icpms_documents` để liên kết chính thức.

## 14. Kết luận Phase 2
Đã hoàn tất việc định hình danh mục tổ chức và nhóm quyền phân tách rõ ràng. Hệ thống sẵn sàng cho các Phase nghiệp vụ với mô hình phân quyền chặt chẽ.
