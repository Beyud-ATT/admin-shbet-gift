import { rejectOrder } from "../services/orderAPI";
import useMutationFactory from "./factory/mutationFactory";

export default function useOrderReject() {
  return useMutationFactory({
    mutationFn: rejectOrder,
    successMessage: "Từ chối đơn hàng thành công",
    queryKey: ["orders"],
  });
}
