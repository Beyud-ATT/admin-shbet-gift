import { createSearchComponent } from "../../../components/factory/createSearchComponent";
import { FaUserAstronaut } from "react-icons/fa";

export const NameTextSearch = createSearchComponent({
  type: "text",
  fieldName: "name",
  placeholder: "Tìm kiếm theo tên người nhận",
  prefix: (
    <FaUserAstronaut className="text-xl text-[var(--color-brand-primary)]" />
  ),
});
