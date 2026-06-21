PROMPT CHO ANTIGRAVITY
PHASE 3 — Xây module Quản lý tài liệu cho VATM ICPMS
Hiện tại:
•	Phase 1 đã đổi nhận diện Probo thành VATM ICPMS.
•	Phase 2 đã tạo danh mục tổ chức VATM và nhóm quyền hệ thống ICPMS.
Bây giờ thực hiện Phase 3.
Mục tiêu Phase 3 là xây module Quản lý tài liệu để VATM quản lý danh mục tài liệu tuân thủ, tiêu chuẩn, quy định, hướng dẫn, ICAO Doc, ICAO Annex, ICAO Circular, ICAO APAC, CANSO, ISO, EASA/EU, Nghị định, Thông tư, Quyết định và tài liệu nội bộ.
Trong Phase 3 chỉ quản lý hồ sơ tài liệu ở mức thông tin chung và danh mục tài liệu.
Phase 3 chưa làm:
•	Phiên bản tài liệu.
•	Upload file PDF/Word gốc.
•	Bóc tách tài liệu.
•	Requirements.
•	AI Review.
•	Checklist.
•	Giao việc.
•	Bằng chứng.
•	Báo cáo nghiệp vụ.
1. Kiểm tra branch trước khi làm
Trước khi sửa code, chạy:
git status
git branch
Đảm bảo đang ở branch:
vatm-icpms-redesign
Nếu chưa ở branch này, chuyển sang:
git checkout vatm-icpms-redesign
Nếu Phase 2 chưa commit, hãy báo lại trước khi làm tiếp.
2. Mục tiêu Phase 3
Phase 3 cần hoàn thành:
1.	Tạo module Tài liệu.
2.	Cho phép tạo, xem, sửa, xóa mềm tài liệu.
3.	Cho phép tìm kiếm tài liệu.
4.	Cho phép lọc tài liệu theo loại, nhóm, nguồn, lĩnh vực, trạng thái.
5.	Hiển thị danh sách tài liệu bằng tiếng Việt.
6.	Hiển thị ngày theo định dạng DD-MM-YYYY.
7.	Có chức năng Tải file mẫu import.
8.	Có chức năng Import danh mục tài liệu từ Excel/CSV.
9.	Có chức năng Export danh mục tài liệu hiện có.
10.	Chuẩn bị dữ liệu nền để Phase 4 tạo phiên bản tài liệu.
11.	Chưa upload file PDF/Word gốc trong Phase 3.
12.	Chưa bóc tách nội dung tài liệu trong Phase 3.
3. Nguyên tắc nghiệp vụ
Hệ thống ICPMS thuộc:
Tổng công ty Quản lý bay Việt Nam - VATM
VATM là chủ sở hữu hệ thống ở cấp Tổng công ty.
Module Tài liệu dùng để quản lý danh mục tài liệu nguồn phục vụ quản lý tuân thủ.
Các tài liệu trong hệ thống có thể gồm:
•	ICAO Annex.
•	ICAO Doc.
•	ICAO Circular.
•	ICAO APAC.
•	CANSO Guidance.
•	ISO Standard.
•	EASA/EU.
•	EUROCONTROL.
•	EUROCAE/RTCA.
•	Nghị định.
•	Thông tư.
•	Quyết định.
•	Quy định nội bộ.
•	Quy trình.
•	Hướng dẫn.
•	Biểu mẫu.
•	Tài liệu kỹ thuật.
•	Tài liệu quản lý an toàn.
•	Tài liệu quản lý tuân thủ.
File danh mục tài liệu người dùng cung cấp trong Phase 3 là catalog/danh mục tài liệu, không phải raw document để bóc tách yêu cầu.
Không dùng file danh mục này để chạy Ingestion Jobs trong Phase 3.
File PDF/Word gốc của từng tài liệu sẽ upload ở Phase 5.
Phiên bản tài liệu sẽ làm ở Phase 4.
Bóc tách tài liệu sẽ làm từ Phase 6 trở đi.
4. Tên menu và màn hình
Menu chính:
Tài liệu
Tên màn hình:
Quản lý tài liệu
Mô tả ngắn trên màn hình:
Quản lý danh mục tài liệu quy định, tiêu chuẩn, hướng dẫn và tài liệu tuân thủ của VATM.
5. Yêu cầu định dạng ngày
Tất cả ngày hiển thị trên giao diện người dùng phải dùng định dạng:
DD-MM-YYYY
Ví dụ đúng:
06-05-2016
26-06-2016
01-01-2018
Không hiển thị dạng:
YYYY-MM-DD
Ví dụ không dùng trên giao diện:
2016-05-06
2016-06-26
2018-01-01
Các trường ngày cần áp dụng:
Trường	Tên hiển thị	Định dạng hiển thị
issued_date	Ngày ban hành	DD-MM-YYYY
effective_date	Ngày hiệu lực	DD-MM-YYYY
created_at	Ngày tạo	DD-MM-YYYY HH:mm
updated_at	Ngày cập nhật	DD-MM-YYYY HH:mm
deleted_at	Ngày xóa mềm	DD-MM-YYYY HH:mm
Nguyên tắc:
Database có thể lưu theo chuẩn kỹ thuật YYYY-MM-DD hoặc kiểu Date.
Giao diện người dùng phải hiển thị theo DD-MM-YYYY.
Ví dụ:
Giá trị lưu trong database	Giá trị hiển thị
2016-05-06	06-05-2016
2016-06-26	26-06-2016
2018-01-01	01-01-2018
6. Quy tắc nhập ngày trên form
Trong form tạo/sửa tài liệu, người dùng nhập hoặc chọn ngày theo định dạng:
ngày-tháng-năm
Ví dụ:
06-05-2016
26-06-2016
01-01-2018
Các trường áp dụng:
•	Ngày ban hành.
•	Ngày hiệu lực.
Yêu cầu kiểm tra dữ liệu:
•	Ngày phải đúng định dạng DD-MM-YYYY.
•	Ngày không hợp lệ phải báo lỗi.
•	Ví dụ 32-13-2016 là không hợp lệ.
•	Ví dụ 2016-05-06 không phải định dạng mong muốn trên giao diện.
•	Nếu dùng date picker của trình duyệt hoặc thư viện UI, vẫn phải hiển thị cho người dùng theo DD-MM-YYYY.
Thông báo lỗi gợi ý:
Ngày không hợp lệ. Vui lòng nhập theo định dạng ngày-tháng-năm, ví dụ 06-05-2016.
7. Trường dữ liệu cần có
Mỗi tài liệu cần có các trường sau:
Trường	Bắt buộc	Ví dụ hiển thị
Mã tài liệu	Có	Doc 9859
Tên tài liệu	Có	Safety Management Manual
Loại tài liệu	Có	ICAO Doc
Nhóm tài liệu	Không	ICAO
Nguồn tài liệu	Không	ICAO
Cơ quan ban hành	Không	ICAO
Lĩnh vực chính	Không	SMS
Số trang	Không	192
Ngày ban hành	Không	01-01-2018
Ngày hiệu lực	Không	01-01-2018
Ngôn ngữ	Không	English
Mức phân loại	Không	Public / Internal / Restricted
Áp dụng cho VATM	Không	Có / Không / Cần rà soát
Mức ưu tiên	Không	Cao / Trung bình / Thấp
Trạng thái	Có	ACTIVE
Mô tả / Ghi chú	Không	Tài liệu nền cho SMS
Đơn vị quản lý hồ sơ	Không	VATM
Người tạo	Tự động	current user
Ngày tạo	Tự động	10-06-2026 09:30
Người cập nhật	Tự động	current user
Ngày cập nhật	Tự động	10-06-2026 10:15
Đã xóa mềm	Tự động	true/false
8. Danh mục loại tài liệu
Tạo danh mục loại tài liệu sau:
Mã loại	Tên loại
ICAO_ANNEX	ICAO Annex
ICAO_DOC	ICAO Doc
ICAO_CIRCULAR	ICAO Circular
ICAO_APAC	ICAO APAC
CANSO_GUIDANCE	CANSO Guidance
ISO_STANDARD	ISO Standard
EASA_EU	EASA / EU
EUROCONTROL	EUROCONTROL
EUROCAE_RTCA	EUROCAE / RTCA
VATM_INTERNAL	Tài liệu nội bộ VATM
DECREE	Nghị định
CIRCULAR_VN	Thông tư
DECISION	Quyết định
INTERNAL_REGULATION	Quy định nội bộ
PROCEDURE	Quy trình
GUIDANCE	Hướng dẫn
FORM	Biểu mẫu
TECHNICAL_DOCUMENT	Tài liệu kỹ thuật
SAFETY_DOCUMENT	Tài liệu an toàn
COMPLIANCE_DOCUMENT	Tài liệu tuân thủ
OTHER	Khác
9. Danh mục nhóm tài liệu
Tạo danh mục nhóm tài liệu sau:
Mã nhóm	Tên nhóm
ICAO	ICAO
ICAO_APAC	ICAO APAC
CANSO	CANSO
ISO	ISO
EASA_EU	EASA / EU
EUROCONTROL	EUROCONTROL
EUROCAE_RTCA	EUROCAE / RTCA
VIETNAM_LEGAL	Văn bản pháp luật Việt Nam
VATM	VATM
OTHER	Khác
10. Danh mục trạng thái tài liệu
Tạo các trạng thái:
Mã trạng thái	Tên hiển thị	Ý nghĩa
DRAFT	Nháp	Mới tạo, chưa sử dụng chính thức
ACTIVE	Đang hiệu lực	Đang được sử dụng
UNDER_REVIEW	Đang rà soát	Đang được kiểm tra/cập nhật
SUPERSEDED	Đã thay thế	Có tài liệu hoặc phiên bản mới thay thế
ARCHIVED	Lưu trữ	Không còn dùng thường xuyên
DELETED	Đã xóa mềm	Không hiển thị mặc định
11. Danh mục áp dụng cho VATM
Tạo các giá trị:
Mã	Tên hiển thị	Ý nghĩa
YES	Có	Có áp dụng cho VATM
NO	Không	Không áp dụng cho VATM
REVIEW	Cần rà soát	Chưa kết luận, cần người nghiệp vụ kiểm tra
12. Danh mục mức ưu tiên
Tạo các giá trị:
Mã	Tên hiển thị
HIGH	Cao
MEDIUM	Trung bình
LOW	Thấp
13. Chức năng cần có
13.1. Danh sách tài liệu
Màn hình danh sách cần có bảng:
Cột	Nội dung
Mã tài liệu	document_code
Tên tài liệu	document_title
Loại tài liệu	document_type
Nhóm tài liệu	document_group
Nguồn tài liệu	source_organization
Lĩnh vực chính	main_domain
Số trang	page_count
Ngày ban hành	DD-MM-YYYY
Ngày hiệu lực	DD-MM-YYYY
Trạng thái	status
Áp dụng cho VATM	applicable_to_vatm
Mức ưu tiên	priority
Cập nhật gần nhất	DD-MM-YYYY HH:mm
Thao tác	Xem / Sửa / Xóa mềm
13.2. Tìm kiếm
Cho phép tìm theo:
•	Mã tài liệu.
•	Tên tài liệu.
•	Cơ quan ban hành.
•	Nguồn tài liệu.
•	Lĩnh vực chính.
•	Từ khóa trong mô tả/ghi chú.
13.3. Bộ lọc
Cho phép lọc theo:
•	Loại tài liệu.
•	Nhóm tài liệu.
•	Nguồn tài liệu.
•	Trạng thái.
•	Lĩnh vực chính.
•	Ngôn ngữ.
•	Mức phân loại.
•	Áp dụng cho VATM.
•	Mức ưu tiên.
13.4. Tạo tài liệu
Form tạo tài liệu cần có:
•	Mã tài liệu.
•	Tên tài liệu.
•	Loại tài liệu.
•	Nhóm tài liệu.
•	Nguồn tài liệu.
•	Cơ quan ban hành.
•	Lĩnh vực chính.
•	Số trang.
•	Ngày ban hành.
•	Ngày hiệu lực.
•	Ngôn ngữ.
•	Mức phân loại.
•	Áp dụng cho VATM.
•	Mức ưu tiên.
•	Trạng thái.
•	Mô tả/Ghi chú.
•	Đơn vị quản lý hồ sơ.
Yêu cầu:
•	Mã tài liệu không được trống.
•	Mã tài liệu không được trùng.
•	Tên tài liệu không được trống.
•	Loại tài liệu không được trống.
•	Trạng thái mặc định là DRAFT.
•	Ngày ban hành và ngày hiệu lực hiển thị/nhập theo DD-MM-YYYY.
•	Số trang nếu nhập thì phải là số nguyên dương.
13.5. Xem chi tiết tài liệu
Trang chi tiết tài liệu hiển thị:
•	Thông tin chung.
•	Loại tài liệu.
•	Nhóm tài liệu.
•	Nguồn tài liệu.
•	Lĩnh vực chính.
•	Số trang.
•	Trạng thái.
•	Áp dụng cho VATM.
•	Mức ưu tiên.
•	Ngày ban hành theo DD-MM-YYYY.
•	Ngày hiệu lực theo DD-MM-YYYY.
•	Ngày tạo, ngày cập nhật theo DD-MM-YYYY HH:mm.
•	Mô tả/Ghi chú.
•	Khu vực placeholder cho phiên bản tài liệu.
Placeholder hiển thị:
Phiên bản tài liệu sẽ được triển khai ở Phase 4.
13.6. Sửa tài liệu
Cho phép sửa các trường thông tin tài liệu.
Không cho sửa tùy tiện:
•	ID hệ thống.
•	Người tạo.
•	Ngày tạo.
Nếu sửa mã tài liệu, phải kiểm tra trùng.
13.7. Xóa mềm tài liệu
Không xóa cứng khỏi database.
Khi xóa, cập nhật trạng thái hoặc cờ xóa mềm.
Ví dụ:
deleted_at = current timestamp
status = DELETED
Tài liệu đã xóa mềm không hiển thị mặc định trong danh sách.
Có thể thêm bộ lọc:
Hiển thị tài liệu đã xóa
nếu dễ làm.
14. Chức năng Import/Export danh mục tài liệu
Phase 3 cần có thêm 3 chức năng:
1.	Tải file mẫu import.
2.	Import danh mục tài liệu.
3.	Export danh mục tài liệu hiện có.
14.1. Tải file mẫu import
Trên màn hình Tài liệu, thêm nút:
Tải file mẫu import
Khi bấm, hệ thống tải về file Excel mẫu.
Tên file gợi ý:
icpms_document_catalog_import_template.xlsx
File mẫu phải có các cột:
Cột	Bắt buộc	Ghi chú
stt	Không	Số thứ tự
document_code	Có	Mã tài liệu
document_title	Có	Tên tài liệu
document_type	Có	Loại tài liệu
document_group	Không	Nhóm tài liệu
source_organization	Không	Nguồn/cơ quan ban hành
main_domain	Không	Lĩnh vực chính
page_count	Không	Số trang
issued_date	Không	DD-MM-YYYY
effective_date	Không	DD-MM-YYYY
language	Không	Ngôn ngữ
classification	Không	Mức phân loại
applicable_to_vatm	Không	YES / NO / REVIEW
priority	Không	HIGH / MEDIUM / LOW
status	Có	DRAFT / ACTIVE / UNDER_REVIEW / SUPERSEDED / ARCHIVED
notes	Không	Ghi chú
14.2. Dữ liệu mẫu trong file import template
File mẫu cần có ít nhất 5 dòng ví dụ:
stt	document_code	document_title	document_type	document_group	source_organization	main_domain	page_count	issued_date	effective_date	status
1	Annex 11	Air Traffic Services	ICAO_ANNEX	ICAO	ICAO	ATS	136			ACTIVE
2	Annex 19	Safety Management	ICAO_ANNEX	ICAO	ICAO	SMS	46			ACTIVE
3	Doc 4444	PANS-ATM – Procedures for Air Navigation Services – ATM	ICAO_DOC	ICAO	ICAO	ATS	466			ACTIVE
4	Doc 9859	Safety Management Manual (SMM)	ICAO_DOC	ICAO	ICAO	SMS	192	01-01-2018	01-01-2018	ACTIVE
5	Doc 10066	PANS-AIM – Aeronautical Information Management	ICAO_DOC	ICAO	ICAO	AIM số	134			ACTIVE
14.3. Import danh mục tài liệu
Trên màn hình Tài liệu, thêm nút:
Import danh mục tài liệu
Hỗ trợ import:
•	Excel .xlsx.
•	CSV nếu dễ làm.
Yêu cầu:
•	Phase 3 chỉ import metadata danh mục tài liệu.
•	Không import file PDF/Word gốc.
•	Không chạy bóc tách nội dung.
•	Không tạo version tài liệu.
•	Không tạo requirement.
Khi import, hệ thống phải kiểm tra dữ liệu trước khi ghi vào database.
Quy tắc kiểm tra:
•	document_code không được trống.
•	document_title không được trống.
•	document_type phải thuộc danh mục cho phép.
•	status phải thuộc danh mục cho phép.
•	page_count nếu có thì phải là số nguyên dương.
•	issued_date nếu có thì phải đúng DD-MM-YYYY.
•	effective_date nếu có thì phải đúng DD-MM-YYYY.
•	applicable_to_vatm nếu có thì phải là YES, NO, hoặc REVIEW.
•	priority nếu có thì phải là HIGH, MEDIUM, hoặc LOW.
Khi gặp document_code đã tồn tại, thiết kế một trong các cách sau:
•	Bỏ qua dòng trùng.
•	Cập nhật bản ghi cũ.
•	Báo lỗi dòng trùng.
Nếu làm được, cho người dùng chọn trước khi import:
Nếu mã tài liệu đã tồn tại:
[ ] Bỏ qua
[ ] Cập nhật
[ ] Báo lỗi
Nếu chưa làm được lựa chọn này trong Phase 3, mặc định là:
Báo lỗi dòng trùng mã tài liệu.
Sau khi import xong, hiển thị kết quả:
Nội dung	Ví dụ
Tổng số dòng	100
Thành công	95
Lỗi	5
Bị bỏ qua	0
Nếu có lỗi, hiển thị danh sách lỗi theo từng dòng:
Dòng	Mã tài liệu	Lỗi
8	Doc 9859	Mã tài liệu đã tồn tại
12		Mã tài liệu không được trống
20	Doc ABC	Ngày ban hành không đúng DD-MM-YYYY
Nếu có thể, cho phép tải file lỗi:
Tải file lỗi import
14.4. Export danh mục tài liệu
Trên màn hình Tài liệu, thêm nút:
Export danh mục tài liệu
Yêu cầu:
•	Export ra Excel .xlsx.
•	Có thể hỗ trợ CSV nếu dễ làm.
•	File export phải dùng cùng cấu trúc cột với file import.
•	Người dùng có thể export → chỉnh sửa → import lại.
•	Ngày trong file export phải theo DD-MM-YYYY.
Tên file export gợi ý:
icpms_document_catalog_export_YYYYMMDD.xlsx
File export phải có các cột:
•	stt
•	document_code
•	document_title
•	document_type
•	document_group
•	source_organization
•	main_domain
•	page_count
•	issued_date
•	effective_date
•	language
•	classification
•	applicable_to_vatm
•	priority
•	status
•	notes
Export phải tôn trọng bộ lọc hiện tại nếu người dùng đang lọc danh sách.
Ví dụ:
•	Nếu đang lọc nhóm ICAO, chỉ export tài liệu nhóm ICAO.
•	Nếu đang lọc trạng thái ACTIVE, chỉ export tài liệu đang hiệu lực.
Nếu khó làm trong Phase 3, có thể export toàn bộ, nhưng phải ghi rõ hạn chế trong báo cáo.
15. API cần có
Tùy kiến trúc Probo hiện tại, tạo API phù hợp.
Tối thiểu cần có:
Method	Endpoint gợi ý	Chức năng
GET	/documents	Lấy danh sách tài liệu
GET	/documents/:id	Xem chi tiết tài liệu
POST	/documents	Tạo tài liệu
PATCH/PUT	/documents/:id	Cập nhật tài liệu
DELETE	/documents/:id	Xóa mềm tài liệu
GET	/document-types	Lấy danh mục loại tài liệu
GET	/document-groups	Lấy danh mục nhóm tài liệu
GET	/document-statuses	Lấy danh mục trạng thái
GET	/documents/import-template	Tải file mẫu import
POST	/documents/import	Import danh mục tài liệu
GET	/documents/export	Export danh mục tài liệu
Nếu Probo đã có API document sẵn, ưu tiên mở rộng API hiện có thay vì tạo trùng.
Nếu Probo dùng GraphQL, tạo query/mutation tương ứng.
16. Database / schema
Nếu Probo đã có bảng/entity documents, kiểm tra có thể tái sử dụng không.
Nếu chưa phù hợp, tạo bảng/entity mới hoặc mở rộng bảng hiện có theo cách an toàn.
Tên bảng/entity gợi ý:
icpms_documents
hoặc nếu muốn dùng chung:
documents
Trường gợi ý:
id
code
title
document_type
document_group
source_organization
issuer
main_domain
page_count
issued_date
effective_date
language
classification
applicable_to_vatm
priority
status
description
notes
owning_unit_id
created_by
updated_by
created_at
updated_at
deleted_at
Yêu cầu:
•	code phải unique.
•	Có created_at, updated_at.
•	Có deleted_at để xóa mềm.
•	Không sửa migration cũ đã có.
•	Nếu cần migration mới, tạo migration mới.
•	Không commit database local.
•	Database có thể lưu ngày theo chuẩn kỹ thuật, nhưng giao diện phải hiển thị DD-MM-YYYY.
17. Phân quyền Phase 3
Áp dụng theo role đã tạo ở Phase 2.
Được tạo/sửa/xóa mềm tài liệu
Các vai trò sau được phép:
•	ICPMS_SYSTEM_ADMIN
•	ICPMS_DOCUMENT_MANAGER
•	ICPMS_COMPLIANCE_MANAGER
Được import/export tài liệu
Các vai trò sau được phép:
•	ICPMS_SYSTEM_ADMIN
•	ICPMS_DOCUMENT_MANAGER
•	ICPMS_COMPLIANCE_MANAGER
Được xem và export nếu chỉ xem
Các vai trò sau được phép xem:
•	ICPMS_SYSTEM_OWNER
•	ICPMS_SYSTEM_ADMIN
•	ICPMS_COMPLIANCE_MANAGER
•	ICPMS_DOCUMENT_MANAGER
•	ICPMS_REVIEWER
•	ICPMS_APPROVER
•	ICPMS_UNIT_MANAGER
•	ICPMS_UNIT_USER
•	ICPMS_VIEWER
Với vai trò ICPMS_VIEWER, có thể cho export hoặc không tùy thiết kế phân quyền. Nếu chưa rõ, mặc định:
ICPMS_VIEWER chỉ xem, không export.
Nguyên tắc
•	Người chỉ xem không được tạo/sửa/xóa/import.
•	Người không có quyền không được gọi API tạo/sửa/xóa/import.
•	Nếu chưa thể hoàn thiện phân quyền backend trong Phase 3, phải ghi rõ trong báo cáo và tối thiểu chặn trên giao diện.
18. Dữ liệu mẫu cần tạo
Tạo dữ liệu mẫu để demo.
Lưu ý:
•	Chỉ tạo metadata.
•	Không upload file.
•	Không tạo version.
Mã tài liệu	Tên tài liệu	Loại	Nhóm	Nguồn	Lĩnh vực	Số trang	Ngày ban hành	Ngày hiệu lực	Trạng thái
Annex 11	Air Traffic Services	ICAO_ANNEX	ICAO	ICAO	ATS	136			ACTIVE
Annex 19	Safety Management	ICAO_ANNEX	ICAO	ICAO	SMS	46			ACTIVE
Doc 4444	PANS-ATM – Procedures for Air Navigation Services – ATM	ICAO_DOC	ICAO	ICAO	ATS	466			ACTIVE
Doc 8126	Aeronautical Information Services Manual	ICAO_DOC	ICAO	ICAO	AIS/AIM	714			ACTIVE
Doc 9859	Safety Management Manual (SMM)	ICAO_DOC	ICAO	ICAO	SMS	192	01-01-2018	01-01-2018	ACTIVE
Doc 10066	PANS-AIM – Aeronautical Information Management	ICAO_DOC	ICAO	ICAO	AIM số	134			ACTIVE
Doc 9971	Manual on Collaborative Air Traffic Flow Management	ICAO_DOC	ICAO	ICAO	ATFM	228			ACTIVE
ISO 9001	Quality Management Systems	ISO_STANDARD	ISO	ISO	QMS				ACTIVE
ISO 27001	Information Security Management Systems	ISO_STANDARD	ISO	ISO	ISMS				ACTIVE
ISO 37301	Compliance Management Systems	ISO_STANDARD	ISO	ISO	Compliance				ACTIVE
CANSO-SOE-SMS	CANSO Standard of Excellence in Safety Management Systems	CANSO_GUIDANCE	CANSO	CANSO	SMS				ACTIVE
EASA-2017-373	ATM/ANS Common Requirements	EASA_EU	EASA_EU	EASA/EU	ATM/ANS				ACTIVE
Trên giao diện không hiển thị ngày mẫu theo dạng YYYY-MM-DD.

19. Giao diện yêu cầu
Giao diện phải:
•	Tiếng Việt.
•	Dễ dùng.
•	Có bảng danh sách.
•	Có nút “Thêm tài liệu”.
•	Có nút “Tải file mẫu import”.
•	Có nút “Import danh mục tài liệu”.
•	Có nút “Export danh mục tài liệu”.
•	Có form tạo/sửa.
•	Có trạng thái rõ ràng.
•	Có tìm kiếm.
•	Có bộ lọc.
•	Có thông báo khi lưu thành công.
•	Có thông báo khi lỗi.
•	Hiển thị ngày theo DD-MM-YYYY.
•	Không dùng thuật ngữ kỹ thuật khó hiểu.
Thông báo mẫu:
Tạo tài liệu thành công.
Cập nhật tài liệu thành công.
Đã xóa tài liệu khỏi danh sách hiển thị.
Mã tài liệu đã tồn tại.
Vui lòng nhập tên tài liệu.
Ngày không hợp lệ. Vui lòng nhập theo định dạng ngày-tháng-năm, ví dụ 06-05-2016.
Import thành công.
Import hoàn tất: 95 dòng thành công, 5 dòng lỗi.
File import không đúng cấu trúc mẫu.
Số trang phải là số nguyên dương.
20. Không làm trong Phase 3
Không làm các phần sau:
•	Không làm phiên bản tài liệu.
•	Không upload PDF/Word gốc.
•	Không đọc nội dung file PDF/Word.
•	Không bóc tách tài liệu.
•	Không tạo Requirements.
•	Không tạo AI Review.
•	Không tạo checklist.
•	Không giao việc.
•	Không upload bằng chứng.
•	Không xuất báo cáo nghiệp vụ.
•	Không dùng file danh mục tài liệu làm raw document để ingestion.
Các phần này sẽ làm ở phase sau.
21. Kiểm thử Phase 3
Sau khi làm xong, kiểm tra:
1.	App vẫn chạy được.
2.	Đăng nhập vẫn hoạt động.
3.	Menu “Tài liệu” mở được.
4.	Danh sách tài liệu hiển thị.
5.	Tạo được tài liệu mới.
6.	Không tạo được tài liệu nếu thiếu mã hoặc tên.
7.	Không tạo được tài liệu nếu mã bị trùng.
8.	Sửa được tài liệu.
9.	Xóa mềm được tài liệu.
10.	Tìm kiếm hoạt động.
11.	Bộ lọc hoạt động.
12.	Người chỉ xem không thấy nút tạo/sửa/xóa/import hoặc bị chặn khi gọi API.
13.	Ngày ban hành hiển thị theo DD-MM-YYYY.
14.	Ngày hiệu lực hiển thị theo DD-MM-YYYY.
15.	Tạo tài liệu với ngày ban hành 06-05-2016.
16.	Tạo tài liệu với ngày hiệu lực 26-06-2016.
17.	Danh sách tài liệu hiển thị đúng 06-05-2016, không hiển thị 2016-05-06.
18.	Trang chi tiết tài liệu hiển thị ngày theo DD-MM-YYYY.
19.	Form sửa tài liệu vẫn hiển thị ngày theo DD-MM-YYYY.
20.	Nhập ngày sai như 32-13-2016 thì hệ thống báo lỗi.
21.	Nhập ngày sai định dạng như 2016-05-06 thì hệ thống cảnh báo hoặc tự chuyển đổi về 06-05-2016, tùy cách thiết kế.
22.	Dữ liệu lưu trong database không bị sai ngày.
23.	Tải được file mẫu import.
24.	File mẫu import có đủ cột yêu cầu.
25.	Import được file mẫu hợp lệ.
26.	Import báo lỗi nếu thiếu document_code.
27.	Import báo lỗi nếu thiếu document_title.
28.	Import báo lỗi nếu document_type không hợp lệ.
29.	Import báo lỗi nếu status không hợp lệ.
30.	Import báo lỗi nếu page_count không phải số.
31.	Import báo lỗi nếu ngày không đúng DD-MM-YYYY.
32.	Export được danh mục tài liệu.
33.	File export có cùng cấu trúc với file import.
34.	File export hiển thị ngày theo DD-MM-YYYY.
35.	Không lỗi menu Phase 1.
36.	Không phá dữ liệu Phase 2.
Chạy các lệnh phù hợp với repo:
git status
Nếu có lệnh build:
npm run build
Nếu có lệnh test:
npm test
Nếu có lệnh lint:
npm run lint
Nếu chạy Docker:
docker compose ps
Nếu repo không dùng npm thì dùng lệnh tương ứng đã phát hiện ở Phase 0.
22. Tạo báo cáo Phase 3
Tạo file:
docs/vatm-icpms/PHASE_03_DOCUMENTS.md
Nội dung gồm:
# PHASE 3 — Document Management Module
## 1. Mục tiêu Phase 3
## 2. Phạm vi đã thực hiện
## 3. Trường dữ liệu tài liệu
## 4. Quy tắc định dạng ngày DD-MM-YYYY
## 5. Loại tài liệu, nhóm tài liệu và trạng thái
## 6. Import/Export danh mục tài liệu
## 7. File mẫu import
## 8. API đã tạo hoặc đã sửa
## 9. Database/schema/migration đã thay đổi
## 10. Giao diện đã thêm hoặc đã sửa
## 11. Dữ liệu mẫu đã tạo
## 12. Phân quyền áp dụng
## 13. File đã sửa
## 14. File đã thêm
## 15. Cách kiểm thử
## 16. Lỗi hoặc hạn chế còn tồn tại
## 17. Khuyến nghị cho Phase 4
## 18. Kết luận Phase 3
Báo cáo viết bằng tiếng Việt, rõ ràng, dễ hiểu.
23. Tiêu chí hoàn thành Phase 3
Phase 3 hoàn thành khi:
1.	Có module “Tài liệu”.
2.	Có danh sách tài liệu.
3.	Tạo được tài liệu.
4.	Sửa được tài liệu.
5.	Xóa mềm được tài liệu.
6.	Tìm kiếm được tài liệu.
7.	Lọc được tài liệu.
8.	Có dữ liệu mẫu.
9.	Có kiểm tra trùng mã tài liệu.
10.	Có phân quyền cơ bản.
11.	Ngày hiển thị theo DD-MM-YYYY.
12.	Form tạo/sửa kiểm tra ngày hợp lệ.
13.	Có nút tải file mẫu import.
14.	Có file mẫu import đúng cấu trúc.
15.	Import được danh mục tài liệu metadata.
16.	Import kiểm tra lỗi dữ liệu.
17.	Export được danh mục tài liệu.
18.	File export có cùng cấu trúc với file import.
19.	Không làm chức năng ngoài phạm vi Phase 3.
20.	App vẫn chạy ổn.
21.	Có báo cáo docs/vatm-icpms/PHASE_03_DOCUMENTS.md.
22.	Không commit file rác, log, cache, node_modules, .env chứa secret.
24. Báo cáo lại sau khi hoàn thành
Sau khi làm xong Phase 3, hãy trả lời theo mẫu:
# Phase 3 Completed — Document Management
## 1. Kết quả chính
- Đã tạo module Tài liệu:
- Đã tạo API:
- Đã tạo/sửa database:
- Đã tạo giao diện:
- Đã tạo dữ liệu mẫu:
- Đã áp dụng định dạng ngày DD-MM-YYYY:
- Đã tạo chức năng tải file mẫu import:
- Đã tạo chức năng import:
- Đã tạo chức năng export:

## 2. Trường dữ liệu tài liệu
| Trường | Ý nghĩa |
|---|---|

## 3. Loại tài liệu
| Mã loại | Tên loại |
|---|---|

## 4. Nhóm tài liệu
| Mã nhóm | Tên nhóm |
|---|---|

## 5. Trạng thái tài liệu
| Mã trạng thái | Tên trạng thái |
|---|---|

## 6. Quy tắc ngày tháng
- Định dạng hiển thị:
- Định dạng nhập:
- Định dạng lưu database:
- Cách kiểm tra ngày hợp lệ:

## 7. Import/Export
- File mẫu import:
- Cột bắt buộc:
- Định dạng hỗ trợ:
- Quy tắc kiểm tra:
- Cách xử lý mã tài liệu trùng:
- File export:

## 8. API
| Method | Endpoint/Query | Chức năng |
|---|---|---|

## 9. File đã sửa
| File | Nội dung sửa |
|---|---|

## 10. File đã thêm
| File | Nội dung |
|---|---|

## 11. Kết quả kiểm thử
- App chạy được:
- Đăng nhập được:
- Tạo tài liệu:
- Sửa tài liệu:
- Xóa mềm:
- Tìm kiếm:
- Lọc:
- Ngày hiển thị DD-MM-YYYY:
- Nhập ngày sai có báo lỗi:
- Tải file mẫu import:
- Import file hợp lệ:
- Import file lỗi:
- Export danh mục:
- Build/lint/test:
- Lỗi còn tồn tại:

## 12. Khuyến nghị cho Phase 4
- ...

## 13. Commit message đề xuất

```bash
git add .
git commit -m "Phase 03 - Add ICPMS document catalog management"

---

# 25. Giới hạn bắt buộc
Phase 3 chỉ làm module Quản lý tài liệu và danh mục tài liệu.
Không được mở rộng sang Phase 4, Phase 5 hoặc Phase 6.
Cụ thể:
- Không làm version tài liệu.
- Không upload file PDF/Word gốc.
- Không ingestion.
- Không parser.
- Không AI.
- Không checklist.
- Không giao việc.
- Không bằng chứng.
- Không báo cáo nghiệp vụ.
Sau Phase 3, hệ thống mới chỉ quản lý được **danh mục/hồ sơ tài liệu**, chưa xử lý file tài liệu gốc.

