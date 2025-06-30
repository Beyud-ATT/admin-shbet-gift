import { FaStickyNote } from "react-icons/fa";
import { createSearchComponent } from "../../../components/factory/createSearchComponent";

export const NoteTextSearch = createSearchComponent({
  type: "text",
  fieldName: "note",
  placeholder: "Tìm kiếm theo ghi chú",
  prefix: (
    <FaStickyNote className="text-xl text-[var(--color-brand-primary)]" />
  ),
});
