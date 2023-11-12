import { useRouter } from "next/router";
import MarketUI from "./Market.presenter";
import type { MouseEvent } from "react";
import { useAuth } from "../../commons/hooks/custom/useAuth";
import { useQuery } from "@apollo/client";
import { FETCH_USEDITEM_ISOLD } from "./Market.queries";
import { IQuery, IQueryFetchUseditemsISoldArgs } from "../../../commons/types/generated/types";

export default function Market(): JSX.Element {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchUseditemsISold">, IQueryFetchUseditemsISoldArgs>(FETCH_USEDITEM_ISOLD);
  console.log(data);

  const onClickMove = (event: MouseEvent<HTMLDivElement>) => {
    void router.push("/markets/product/register");
  };

  return <MarketUI data={data} onClickMove={onClickMove} />;
}
