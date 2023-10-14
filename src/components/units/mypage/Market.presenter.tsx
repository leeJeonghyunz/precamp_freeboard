import { MouseEvent } from "react";
import MypageSideBar from "../../commons/layout/mypagesidebar/MypageSidebar.container";
import SearchBar from "../../commons/searchbar/SearchBar.container";
import * as S from "./Market.Styles";

interface IMarketUI {
  onClickMove: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function MarketUI(props: IMarketUI): JSX.Element {
  return (
    <>
      <S.Body>
        <MypageSideBar />
        <S.Wrapper>
          <S.WrapperTop>
            <S.MiniWrapper>
              <span>나의상품 </span>
              <span> | </span>
              <span> 마이찜</span>
            </S.MiniWrapper>
            <SearchBar />
          </S.WrapperTop>
          <S.Table>
            <S.Row>
              <div> 번호</div>
              <div> 상품명 </div>
              <div> 가격</div>
              <div> 날짜 </div>
            </S.Row>
          </S.Table>
          <button onClick={props.onClickMove}>상품등록하기</button>
        </S.Wrapper>
      </S.Body>
    </>
  );
}
