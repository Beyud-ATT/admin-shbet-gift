import { useSearchParams } from "react-router";
import useQueryFactory, { QUERY_TYPES } from "./factory/queryFactory";
import { getProducts } from "../services/productAPI";

export default function useProduct() {
  const [searchParams] = useSearchParams();

  const pageIndex = Number(searchParams.get("pageIndex")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 20;

  const params = {
    pageIndex,
    pageSize,
  };

  return useQueryFactory({
    queryKey: ["products", pageIndex, pageSize],
    queryFn: () => getProducts({ params }),
    type: QUERY_TYPES.SIMPLE,
  });
}
