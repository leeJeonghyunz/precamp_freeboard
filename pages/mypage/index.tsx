import { 로그인체크 } from "../../src/components/commons/hoc/로그인체크";
import Market from "../../src/components/units/mypage/Market.container";

function MarketPage(): JSX.Element {
  return <Market />;
}

export default 로그인체크(MarketPage);
