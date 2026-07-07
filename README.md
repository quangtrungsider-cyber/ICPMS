# VATM ICPMS

**VATM Integrated Compliance & Performance Management System**

Hệ thống quản lý tuân thủ tích hợp phục vụ Tổng công ty Quản lý bay Việt Nam - VATM.

VATM ICPMS là nền tảng nội bộ dùng để quản lý tài liệu quy định, tiêu chuẩn, checklist tuân thủ, giao việc, bằng chứng, rà soát, theo dõi tiến độ và báo cáo phục vụ công tác quản lý tuân thủ trong Tổng công ty Quản lý bay Việt Nam.

---

## Mục tiêu hệ thống

VATM ICPMS được xây dựng để hỗ trợ:

* Quản lý danh mục tài liệu pháp lý, tiêu chuẩn, quy định, hướng dẫn.
* Quản lý tài liệu ICAO Annex, ICAO Doc, ICAO Circular, CANSO, ISO, EASA/EU và tài liệu nội bộ VATM.
* Quản lý phiên bản tài liệu theo edition, amendment, ngày hiệu lực và trạng thái sử dụng.
* Upload file gốc PDF, DOC, DOCX, TXT cho từng phiên bản tài liệu.
* Bóc tách tài liệu thành các yêu cầu tuân thủ.
* Tạo checklist từ yêu cầu đã bóc tách.
* Giao việc cho các Ban, Trung tâm, Công ty và đơn vị liên quan trong VATM.
* Thu thập và quản lý bằng chứng thực hiện.
* Theo dõi tiến độ xử lý, quá hạn, thiếu bằng chứng.
* Xuất báo cáo phục vụ lãnh đạo, kiểm tra, đánh giá và quản lý tuân thủ.

---

## Phạm vi hệ thống

VATM ICPMS là hệ thống quản lý tuân thủ của:

**Tổng công ty Quản lý bay Việt Nam - VATM**

Trong hệ thống:

* **VATM** là tổ chức chủ sở hữu hệ thống.
* Các Ban, Trung tâm, Công ty là **đơn vị sử dụng hệ thống**.
* Người dùng được phân quyền theo vai trò.
* Đơn vị và vai trò được quản lý tách riêng.

Ví dụ:

* Đơn vị: Ban Không lưu, Ban Kỹ thuật, Trung tâm AIS, Trung tâm MET, Công ty Quản lý bay miền Bắc.
* Vai trò: Quản trị hệ thống, Quản lý tuân thủ, Quản lý tài liệu, Người rà soát, Người phê duyệt, Đầu mối đơn vị, Người dùng đơn vị, Người xem.

---

## Các module chính

| Nhóm chức năng   | Module                                                                               |
| ---------------- | ------------------------------------------------------------------------------------ |
| Tổng quan        | Dashboard theo dõi số liệu tuân thủ, tài liệu, checklist, giao việc, bằng chứng      |
| Quản lý tài liệu | Tài liệu, Phiên bản tài liệu, Upload file                                            |
| Bóc tách dữ liệu | Ingestion Jobs, Parser văn bản Việt Nam, Parser tài liệu ICAO                        |
| Tuân thủ         | Yêu cầu, AI Review, Checklist                                                        |
| Giao việc        | Giao việc, Theo dõi xử lý, Quá hạn                                                   |
| Bằng chứng       | Upload bằng chứng, Rà soát, Phê duyệt, Trả lại bổ sung                               |
| Đánh giá         | Rủi ro an toàn, Kiểm tra / Đánh giá                                                  |
| Báo cáo          | Báo cáo danh mục tài liệu, checklist, giao việc, quá hạn, thiếu bằng chứng, tổng hợp |
| Hệ thống         | Danh mục đơn vị, Người dùng, Vai trò, Phân quyền, Cấu hình                           |

---

## Luồng nghiệp vụ chính

```text
Tài liệu
→ Phiên bản tài liệu
→ File gốc
→ Bóc tách tài liệu
→ Yêu cầu
→ AI Review
→ Checklist
→ Giao việc
→ Bằng chứng
→ Báo cáo
```

---

## Quản lý tài liệu

Module Tài liệu dùng để quản lý danh mục tài liệu nguồn của VATM ICPMS.

Các loại tài liệu hỗ trợ:

* ICAO Annex
* ICAO Doc
* ICAO Circular
* ICAO APAC
* CANSO Guidance
* ISO Standard
* EASA / EU
* EUROCONTROL
* EUROCAE / RTCA
* Nghị định
* Thông tư
* Quyết định
* Quy định nội bộ
* Quy trình
* Hướng dẫn
* Biểu mẫu
* Tài liệu kỹ thuật
* Tài liệu an toàn
* Tài liệu tuân thủ

Các trường dữ liệu chính:

* Mã tài liệu
* Tên tài liệu
* Loại tài liệu
* Nhóm tài liệu
* Nguồn tài liệu
* Lĩnh vực chính
* Số trang
* Ngày ban hành
* Ngày hiệu lực
* Áp dụng cho VATM
* Mức ưu tiên
* Trạng thái
* Ghi chú

Ngày hiển thị trên giao diện theo định dạng:

```text
DD-MM-YYYY
```

Ví dụ:

```text
06-05-2016
26-06-2016
01-01-2018
```

---

## Quản lý phiên bản tài liệu

Mỗi tài liệu có thể có nhiều phiên bản.

Ví dụ:

```text
Tài liệu: Doc 9859 - Safety Management Manual
Phiên bản: Fourth Edition 2018
```

```text
Tài liệu: Nghị định 32/2016/NĐ-CP
Phiên bản: Bản ban hành năm 2016
```

```text
Tài liệu: Sổ tay quản lý an toàn VATM
Phiên bản: Version 1.0
```

Các trạng thái phiên bản:

| Mã trạng thái | Ý nghĩa       |
| ------------- | ------------- |
| DRAFT         | Nháp          |
| CURRENT       | Hiện hành     |
| EFFECTIVE     | Đang hiệu lực |
| SUPERSEDED    | Đã thay thế   |
| EXPIRED       | Hết hiệu lực  |
| ARCHIVED      | Lưu trữ       |
| DELETED       | Đã xóa mềm    |

Mỗi tài liệu chỉ nên có một phiên bản `CURRENT` tại một thời điểm.

---

## Upload file gốc

Mỗi phiên bản tài liệu có thể được gắn với file gốc.

Các định dạng hỗ trợ:

| Loại file | Đuôi file |
| --------- | --------- |
| PDF       | .pdf      |
| Word      | .doc      |
| Word      | .docx     |
| Text      | .txt      |

File gốc là đầu vào cho bước bóc tách tài liệu.

Phase upload file chỉ quản lý file, chưa bóc tách nội dung.

---

## Bóc tách tài liệu

Module Bóc tách tài liệu dùng để đọc file gốc và tạo danh sách yêu cầu tuân thủ.

Đối với văn bản Việt Nam, hệ thống bóc tách theo cấu trúc:

```text
Chương → Mục → Điều → Khoản → Điểm → Phụ lục
```

Đối với tài liệu ICAO, hệ thống bóc tách theo cấu trúc:

```text
Chapter → Section → Paragraph → Appendix → Table/Figure
```

Các yêu cầu sau khi bóc tách sẽ được rà soát trước khi chuyển thành checklist.

---

## AI Review

AI Review hỗ trợ gợi ý checklist từ danh sách yêu cầu đã bóc tách.

Nguyên tắc:

* AI chỉ gợi ý.
* Người dùng phải rà soát.
* Checklist chỉ được sử dụng khi được duyệt.
* AI không tự động phát hành checklist chính thức.

---

## Checklist và giao việc

Checklist dùng để kiểm tra mức độ tuân thủ theo từng tài liệu, yêu cầu hoặc nhóm yêu cầu.

Mỗi dòng checklist có thể gồm:

* Căn cứ
* Nội dung kiểm tra
* Đơn vị chủ trì
* Đơn vị phối hợp
* Bằng chứng cần cung cấp
* Tình trạng
* Kế hoạch khắc phục
* Thời hạn
* Ghi chú

Sau khi checklist được duyệt, hệ thống có thể giao việc cho đơn vị liên quan.

---

## Bằng chứng

Đơn vị được giao việc có thể upload bằng chứng thực hiện.

Ví dụ bằng chứng:

* Quyết định
* Quy định
* Quy trình
* Kế hoạch
* Báo cáo
* Biên bản họp
* Biên bản kiểm tra
* Danh sách đào tạo
* Văn bản chấp thuận
* File Excel
* File PDF
* Ảnh chụp
* Email/thông báo

Bằng chứng có thể được phê duyệt hoặc trả lại để bổ sung.

---

## Phân quyền

VATM ICPMS sử dụng mô hình phân quyền theo vai trò.

Các vai trò chính:

| Mã quyền                 | Tên quyền           |
| ------------------------ | ------------------- |
| ICPMS_SYSTEM_OWNER       | Chủ sở hữu hệ thống |
| ICPMS_SYSTEM_ADMIN       | Quản trị hệ thống   |
| ICPMS_COMPLIANCE_MANAGER | Quản lý tuân thủ    |
| ICPMS_DOCUMENT_MANAGER   | Quản lý tài liệu    |
| ICPMS_REVIEWER           | Người rà soát       |
| ICPMS_APPROVER           | Người phê duyệt     |
| ICPMS_UNIT_MANAGER       | Đầu mối đơn vị      |
| ICPMS_UNIT_USER          | Người dùng đơn vị   |
| ICPMS_VIEWER             | Người xem           |

---

## Giao diện

VATM ICPMS sử dụng giao diện web bằng tiếng Việt.

Các nguyên tắc giao diện:

* Dễ dùng.
* Rõ ràng.
* Phù hợp môi trường quản lý nội bộ.
* Ưu tiên bảng dữ liệu, bộ lọc, tìm kiếm.
* Có màu trạng thái thống nhất.
* Ngày hiển thị theo định dạng `DD-MM-YYYY`.

Các màu trạng thái:

| Trạng thái                            | Màu        |
| ------------------------------------- | ---------- |
| Hoàn thành / Đã duyệt / Đang hiệu lực | Xanh lá    |
| Đang xử lý / Đang rà soát             | Vàng / cam |
| Quá hạn / Lỗi / Chưa đạt              | Đỏ         |
| Chờ duyệt                             | Xanh dương |
| Nháp / Chưa xử lý                     | Xám        |
| Lưu trữ                               | Tím / xám  |

---

## Công nghệ sử dụng

VATM ICPMS được phát triển trên nền tảng Probo và tiếp tục tùy biến theo nghiệp vụ VATM.

| Lớp            | Công nghệ                                       |
| -------------- | ----------------------------------------------- |
| Backend        | Go                                              |
| Database       | PostgreSQL                                      |
| API            | GraphQL                                         |
| Frontend       | React, TypeScript, Relay, TailwindCSS           |
| Infrastructure | Docker                                          |
| Observability  | OpenTelemetry, Grafana, Prometheus, Loki, Tempo |

---

## Quick Start

Yêu cầu môi trường phát triển:

| Công cụ | Phiên bản |
| ------- | --------- |
| Go      | 1.26+     |
| Node.js | 22+       |
| Docker  | latest    |
| mkcert  | latest    |

Các bước chạy môi trường phát triển:

```sh
# 1. Clone source code
git clone <repository-url>
cd probo

# 2. Install dependencies
go mod download
npm ci

# 3. Start infrastructure services
make stack-up

# 4. Build
make build

# 5. Generate local dev config
make dev-config

# 6. Run server
bin/probod -cfg-file cfg/dev.yaml
```

Web console chạy tại:

```text
http://localhost:8080
```

---

## Lộ trình phát triển

| Phase    | Nội dung                                      |
| -------- | --------------------------------------------- |
| Phase 1  | Đổi nhận diện Probo thành VATM ICPMS          |
| Phase 2  | Tạo danh mục tổ chức VATM và nhóm quyền ICPMS |
| Phase 3  | Quản lý tài liệu                              |
| Phase 4  | Quản lý phiên bản tài liệu                    |
| Phase 5  | Upload file gốc                               |
| Phase 6  | Ingestion Jobs / Bóc tách tài liệu            |
| Phase 7  | Parser văn bản Việt Nam                       |
| Phase 8  | Parser tài liệu ICAO                          |
| Phase 9  | Requirements                                  |
| Phase 10 | AI Review                                     |
| Phase 11 | Checklist chính thức                          |
| Phase 12 | Giao việc                                     |
| Phase 13 | Bằng chứng                                    |
| Phase 14 | Dashboard                                     |
| Phase 15 | Báo cáo                                       |
| Phase 16 | Kiểm thử dữ liệu mẫu                          |
| Phase 17 | Phân quyền và lịch sử thao tác                |
| Phase 18 | Đóng gói demo                                 |

---

## Acknowledgement

VATM ICPMS được phát triển dựa trên nền tảng mã nguồn mở Probo.

ICPMS là nền tảng GRC mã nguồn mở, cung cấp các thành phần nền như quản lý tuân thủ, rủi ro, kiểm soát, audit, evidence, task, tài liệu, phân quyền, audit log, web console, CLI, MCP API và GraphQL API.

Các phần tùy biến, mở rộng và thiết kế nghiệp vụ ICPMS được phát triển để phù hợp với nhu cầu quản lý tuân thủ của Tổng công ty Quản lý bay Việt Nam - VATM.

---

## License

Dự án kế thừa giấy phép của mã nguồn gốc ICPMS theo file `LICENSE`.

Các phần tùy biến và phát triển bổ sung cho VATM ICPMS thuộc:

```text
Copyright (c) 2026 Tổng công ty Quản lý bay Việt Nam
Vietnam Air Traffic Management Corporation (VATM)
```

Vui lòng không xóa thông tin bản quyền và giấy phép gốc của Probo nếu mã nguồn vẫn sử dụng hoặc kế thừa từ ICPMS VATM.
