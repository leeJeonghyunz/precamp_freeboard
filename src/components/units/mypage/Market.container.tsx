import { useRouter } from "next/router";
import MarketUI from "./Market.presenter";
// import { useAuth } from "../../commons/hooks/custom/useAuth";
import { useQuery } from "@apollo/client";
import { FETCH_USEDITEM_ISOLD } from "./Market.queries";
import type { IQuery, IQueryFetchUseditemsISoldArgs } from "../../../commons/types/generated/types";

export default function Market(): JSX.Element {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchUseditemsISold">, IQueryFetchUseditemsISoldArgs>(FETCH_USEDITEM_ISOLD);
  console.log(data);

  const onClickMove = (): void => {
    void router.push("/markets/product/register");
  };

  return <MarketUI data={data} onClickMove={onClickMove} />;
}
