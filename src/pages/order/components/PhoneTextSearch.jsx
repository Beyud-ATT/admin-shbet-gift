import { FaPhoneSquareAlt } from "react-icons/fa";
import { createSearchComponent } from "../../../components/factory/createSearchComponent";

export const PhoneTextSearch = createSearchComponent({
  type: "text",
  fieldName: "phone",
  placeholder: "Tìm kiếm theo số điện thoại",
  prefix: (
    <FaPhoneSquareAlt className="text-xl text-[var(--color-brand-primary)]" />
  ),
});
