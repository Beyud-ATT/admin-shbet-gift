import { useSearchParams } from "react-router";
import { getCustomer } from "../services/customnerAPI";
import useQueryFactory, { QUERY_TYPES } from "./factory/queryFactory";

export default function useCustomer() {
  const [searchParams] = useSearchParams();

  const account = searchParams.get("account") || "";
  const pageIndex = Number(searchParams.get("pageIndex")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 20;

  const params = {
    "account[regex]": account,
    pageIndex,
    pageSize,
  };

  return useQueryFactory({
    queryKey: ["customers", pageIndex, pageSize, account],
    queryFn: () => getCustomer({ params }),
    type: QUERY_TYPES.SIMPLE,
  });
}
