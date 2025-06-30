import { updateProduct } from "../services/productAPI";
import useMutationFactory from "./factory/mutationFactory";

export default function useProductUpdate() {
  return useMutationFactory({
    queryKey: ["products"],
    mutationFn: updateProduct,
    successMessage: "Cập nhật sản phẩm thành công",
  });
}
