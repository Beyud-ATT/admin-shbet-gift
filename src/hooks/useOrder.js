import { useSearchParams } from "react-router";
import { useAuth } from "../context/AuthProvider";
import { getOrders } from "../services/orderAPI";
import useQueryFactory, { QUERY_TYPES } from "./factory/queryFactory";

export default function useOrder() {
  const { isAuthenticated } = useAuth();
  const [searchParams] = useSearchParams();

  const address = searchParams.get("address") || "";
  const note = searchParams.get("note") || "";
  const phone = searchParams.get("phone") || "";
  const status = searchParams.get("status") || "";
  const pageIndex = Number(searchParams.get("pageIndex")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 20;

  const params = {
    pageIndex,
    pageSize,
  };

  if (address) {
    params["address[regex]"] = address;
  }

  if (note) {
    params["note[regex]"] = note;
  }

  if (phone) {
    params["phone[regex]"] = phone;
  }

  if (status) {
    params.status = status;
  }

  return useQueryFactory({
    queryKey: ["orders", pageIndex, pageSize, address, note, phone, status],
    queryFn: () => getOrders({ params }),
    type: QUERY_TYPES.SIMPLE,
    enabled: isAuthenticated,
  });
}
