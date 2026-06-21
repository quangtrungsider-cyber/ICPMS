# PHASE 1 — Rebrand Probo UI to VATM ICPMS

## 1. Mục tiêu Phase 1
- Đổi tên hệ thống và thay đổi các nhận diện cốt lõi (Title, Logo text, Form đăng nhập) từ Probo sang VATM ICPMS.
- Việt hóa toàn bộ cấu trúc Menu chính và các nhãn hiển thị quan trọng trên trang Đăng nhập.
- Sắp xếp lại thứ tự Menu theo luồng nghiệp vụ của ICPMS.
- Ẩn bớt các tính năng không cần thiết của Probo (Assets, Third parties, Cookie Banners, v.v.) bằng cách loại bỏ khỏi cấu trúc Sidebar, nhưng vẫn giữ nguyên source code bên dưới để không làm hỏng tính toàn vẹn của ứng dụng.
- Cài đặt sẵn các trang Placeholder cho các module sẽ được phát triển ở các Phase tiếp theo.

## 2. Các thay đổi đã thực hiện
- Thay đổi nội dung thẻ `<title>` ở `apps/console/index.html` và `apps/trust/index.html` thành `VATM ICPMS`.
- Sửa lại `AuthLayout.tsx` để hiển thị chữ "VATM ICPMS" to, rõ ràng thay vì dùng component Logo ảnh mặc định của Probo.
- Sửa nội dung văn bản trên `SignInPage.tsx` thành "Đăng nhập VATM ICPMS" cùng với mô tả hệ thống bằng tiếng Việt.
- Tạo mới một component chung `ComingSoonPage.tsx` để tái sử dụng cho tất cả các menu placeholder.
- Cấu hình thêm mảng `placeholderRoutes` vào `routes.tsx` để không gặp lỗi route chết khi bấm vào các module tương lai.
- Chỉnh sửa `Sidebar.tsx` để đổi nhãn, gán các icon phù hợp và điều hướng đúng về các module hiện có hoặc các trang placeholder.

## 3. Menu mới của VATM ICPMS
Thứ tự menu đã được chốt và hoạt động trên hệ thống:
1. Tổng quan
2. Tài liệu
3. Phiên bản tài liệu (Sắp triển khai)
4. Upload file (Sắp triển khai)
5. Bóc tách tài liệu (Sắp triển khai)
6. Yêu cầu (Sắp triển khai - module chuyên biệt của ICPMS)
7. AI Review (Sắp triển khai)
8. Checklist (Sắp triển khai)
9. Giao việc (Sắp triển khai - module chuyên biệt phân việc cho Ban/Đơn vị)
10. Bằng chứng (Sắp triển khai - gom chung minh chứng)
11. Rủi ro an toàn
12. Kiểm tra / Đánh giá
13. Báo cáo (Sắp triển khai)
14. Tra cứu (Sắp triển khai)
15. Cấu hình
16. Người dùng

## 4. Mapping thuật ngữ Probo sang ICPMS
- Context -> Tổng quan
- Documents -> Tài liệu
- Risks -> Rủi ro an toàn
- Audits -> Kiểm tra / Đánh giá
- Settings -> Cấu hình
- People (Memberships) -> Người dùng

*(Lưu ý: Các khái niệm Tasks, Measures, Obligations của Probo không tương đồng 100% với luồng nghiệp vụ "Giao việc Ban", "Yêu cầu bóc tách" và "Checklist" của VATM, do đó đã được đổi thành placeholder để xây dựng tính năng mới chuẩn luồng hơn ở các Phase sau).*

## 5. Các module đã ẩn
Các module sau đã được comment khỏi `Sidebar.tsx` (nhưng vẫn tồn tại trong core routing nếu truy cập trực tiếp bằng URL cũ):
- Tasks (Probo cũ)
- Measures (Probo cũ)
- Obligations (Probo cũ)
- Frameworks
- Third parties
- Assets
- Data
- Findings
- Processing Activities
- Statements of Applicability
- Rights Requests
- Access Reviews
- Compliance Page
- Cookie Banners

## 6. Các placeholder page đã tạo
Một danh sách các route ảo được quản lý tại `placeholderRoutes.tsx` hướng về component `ComingSoonPage`:
- `/organizations/:id/document-versions`
- `/organizations/:id/upload-file`
- `/organizations/:id/ingestion-jobs`
- `/organizations/:id/requirements`
- `/organizations/:id/ai-review`
- `/organizations/:id/checklist-placeholder`
- `/organizations/:id/tasks-placeholder`
- `/organizations/:id/evidence-placeholder`
- `/organizations/:id/reports`
- `/organizations/:id/search`

## 7. Các file đã sửa
- `apps/console/index.html`
- `apps/trust/index.html`
- `apps/console/src/pages/iam/organizations/_components/Sidebar.tsx`
- `apps/console/src/pages/iam/auth/sign-in/SignInPage.tsx`
- `apps/console/src/pages/iam/auth/AuthLayout.tsx`
- `apps/console/src/routes.tsx`

## 8. Các file đã thêm
- `apps/console/src/components/ComingSoonPage.tsx`
- `apps/console/src/routes/placeholderRoutes.tsx`

## 9. Cách chạy kiểm thử
- Kiểm thử trạng thái git: `git status`
- Chạy hệ thống local: `npm run dev` (truy cập `http://[::1]:5173/auth/login`)
- Xác nhận trang login hiển thị "VATM ICPMS" tiếng Việt. Đăng nhập vào và thấy Sidebar mới 16 menu.
- Click thử vào "Bóc tách tài liệu" hay "Giao việc" để xem màn hình "Sắp triển khai" (Placeholder).
- Click thử "Rủi ro an toàn" hay "Tài liệu" để thấy ứng dụng gốc vẫn chạy.

## 10. Lỗi hoặc hạn chế còn tồn tại
- Hiện tại chưa đi sâu vào việt hóa nội dung bên trong từng module như "Rủi ro an toàn" hay "Tài liệu" do Phase 1 chỉ giới hạn ở mức "nhận diện và menu".
- `AuthLayout` mới chỉ thay ảnh logo thành text h1, trong tương lai cần xin Logo SVG chuẩn của VATM để giao diện chuyên nghiệp hơn.

## 11. Khuyến nghị cho Phase 2
- Bắt đầu xây dựng dữ liệu nền (Seed data) cho các Ban/Đơn vị VATM để cấu trúc tổ chức (Organization) và Phân quyền bắt đầu có dữ liệu thật.

## 12. Kết luận Phase 1
Việc "thay áo" cho Probo diễn ra rất an toàn do được áp dụng thông qua component điều hướng (`Sidebar`) và router. Điều này bảo vệ toàn bộ code frontend, state management và GraphQL của Probo nguyên vẹn, tạo mặt bằng sạch, sẵn sàng cho các phase thêm tính năng kế tiếp.
