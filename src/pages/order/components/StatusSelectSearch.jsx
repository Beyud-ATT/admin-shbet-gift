import { FaGamepad } from "react-icons/fa";
import { createSearchComponent } from "../../../components/factory/createSearchComponent";

const ORDER_STATUS = [
  { value: "", label: "Tất cả" },
  { value: "pending", label: "Đang chờ" },
  { value: "accepted", label: "Đã nhận" },
  { value: "rejected", label: "Đã từ chối" },
  { value: "mailed", label: "Đã gửi mail" },
];

export const StatusSelectSearch = createSearchComponent({
  type: "select",
  fieldName: "status",
  placeholder: "Tìm kiếm theo trạng thái",
  options: ORDER_STATUS,
  prefix: <FaGamepad className="text-xl text-[var(--color-brand-primary)]" />,
});
