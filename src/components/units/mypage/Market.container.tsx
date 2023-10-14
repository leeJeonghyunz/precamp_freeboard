import { useRouter } from "next/router";
import MarketUI from "./Market.presenter";
import type { MouseEvent } from "react";

export default function Market(): JSX.Element {
  const router = useRouter();
  const onClickMove = (event: MouseEvent<HTMLDivElement>) => {
    void router.push("/markets/product/register");
  };

  return <MarketUI onClickMove={onClickMove} />;
}
