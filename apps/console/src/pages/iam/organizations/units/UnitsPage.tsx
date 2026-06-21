// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { Card, Input, PageHeader } from "@probo/ui";
import { useState } from "react";

const VATM_UNITS = [
  { id: "VATM", name: "Tổng công ty Quản lý bay Việt Nam", type: "Cấp Tổng công ty", status: "Hoạt động" },
  { id: "VATM_ATCL", name: "Ban An toàn - Chất lượng", type: "Ban chức năng", status: "Hoạt động" },
  { id: "VATM_AN_NINH", name: "Ban An ninh", type: "Ban chức năng", status: "Hoạt động" },
  { id: "VATM_KL", name: "Ban Không lưu", type: "Ban chức năng", status: "Hoạt động" },
  { id: "VATM_KT", name: "Ban Kỹ thuật", type: "Ban chức năng", status: "Hoạt động" },
  { id: "VATM_TCCB", name: "Ban Tổ chức cán bộ - Lao động", type: "Ban chức năng", status: "Hoạt động" },
  { id: "VATM_KH", name: "Ban Kế hoạch", type: "Ban chức năng", status: "Hoạt động" },
  { id: "VATM_VP", name: "Văn phòng", type: "Ban chức năng", status: "Hoạt động" },
  { id: "VATM_TRAINING", name: "Trung tâm Đào tạo", type: "Đơn vị chuyên môn", status: "Hoạt động" },
  { id: "VATM_NORTHERN_ATM", name: "Công ty Quản lý bay miền Bắc", type: "Đơn vị trực thuộc", status: "Hoạt động" },
  { id: "VATM_CENTRAL_ATM", name: "Công ty Quản lý bay miền Trung", type: "Đơn vị trực thuộc", status: "Hoạt động" },
  { id: "VATM_SOUTHERN_ATM", name: "Công ty Quản lý bay miền Nam", type: "Đơn vị trực thuộc", status: "Hoạt động" },
  { id: "VATM_AIS", name: "Trung tâm AIS", type: "Đơn vị chuyên môn", status: "Hoạt động" },
  { id: "VATM_MET", name: "Trung tâm MET", type: "Đơn vị chuyên môn", status: "Hoạt động" },
  { id: "VATM_SAR", name: "Trung tâm SAR", type: "Đơn vị chuyên môn", status: "Hoạt động" },
  { id: "VATM_ATFM", name: "Trung tâm ATFM", type: "Đơn vị chuyên môn", status: "Hoạt động" },
];

export function UnitsPage() {
  const [search, setSearch] = useState("");

  const filteredUnits = VATM_UNITS.filter(
    (unit) =>
      unit.name.toLowerCase().includes(search.toLowerCase()) ||
      unit.id.toLowerCase().includes(search.toLowerCase()) ||
      unit.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <PageHeader title="Danh mục đơn vị VATM" />

      <div className="flex gap-4 mb-4">
        <Input
          placeholder="Tìm kiếm mã, tên, loại đơn vị..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm text-left">
            <thead>
              <tr>
                <th className="text-left py-2 px-4">Mã đơn vị</th>
                <th className="text-left py-2 px-4">Tên đơn vị</th>
                <th className="text-left py-2 px-4">Loại đơn vị</th>
                <th className="text-left py-2 px-4">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {filteredUnits.length > 0 ? (
                filteredUnits.map((unit) => (
                  <tr key={unit.id} className="border-t border-border-mid">
                    <td className="font-mono text-sm py-2 px-4">{unit.id}</td>
                    <td className="font-medium py-2 px-4">{unit.name}</td>
                    <td className="py-2 px-4">{unit.type}</td>
                    <td className="py-2 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {unit.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-txt-tertiary">
                    Không tìm thấy đơn vị nào phù hợp
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
