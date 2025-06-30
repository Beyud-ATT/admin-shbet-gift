import { acceptOrder } from "../services/orderAPI";
import useMutationFactory from "./factory/mutationFactory";

export default function useAcceptOrder() {
  return useMutationFactory({
    mutationFn: acceptOrder,
    successMessage: "Chấp nhận đơn hàng thành công",
    queryKey: ["orders"],
  });
}
