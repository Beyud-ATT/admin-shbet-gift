import { sendConfirmMail } from "../services/orderAPI";
import useMutationFactory from "./factory/mutationFactory";

export default function useOrderSendConfirmMail() {
  return useMutationFactory({
    mutationFn: sendConfirmMail,
    successMessage: "Gửi xác nhận đơn hàng thành công",
    queryKey: ["orders"],
  });
}
