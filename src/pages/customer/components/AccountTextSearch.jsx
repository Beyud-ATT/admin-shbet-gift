import { createSearchComponent } from "../../../components/factory/createSearchComponent";

export const AccountTextSearch = createSearchComponent({
  type: "text",
  fieldName: "account",
  placeholder: "Tìm kiếm theo tài khoản",
});
