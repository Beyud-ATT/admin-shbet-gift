import { createSearchComponent } from "../../../components/factory/createSearchComponent";
import { FaAddressCard } from "react-icons/fa";

export const AddressTextSearch = createSearchComponent({
  type: "text",
  fieldName: "address",
  placeholder: "Tìm kiếm theo địa chỉ",
  prefix: (
    <FaAddressCard className="text-xl text-[var(--color-brand-primary)]" />
  ),
});
