import { MouseEvent } from "react";
import MypageSideBar from "../../commons/layout/mypagesidebar/MypageSidebar.container";
import SearchBar from "../../commons/searchbar/SearchBar.container";
import * as S from "./Market.Styles";
import { IQuery } from "../../../commons/types/generated/types";
import { getDate } from "../../commons/libraries/utils";

interface IMarketUI {
  onClickMove: (event: MouseEvent<HTMLDivElement>) => void;
  data: Pick<IQuery, "fetchUseditemsISold"> | undefined;
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
              <S.Name> 이름</S.Name>
              <S.Remarks> 요약 </S.Remarks>
              <S.Price> 가격</S.Price>
              <S.CreateAt> 날짜 </S.CreateAt>
            </S.Row>
            {props.data?.fetchUseditemsISold.map((el) => (
              <S.Row key={el._id}>
                <S.Name>{el.name}</S.Name>
                <S.Remarks>{el.remarks}</S.Remarks>
                <S.Price>{el.price}</S.Price>
                <S.CreateAt>{getDate(el.createdAt)}</S.CreateAt>
              </S.Row>
            ))}
          </S.Table>
          <button onClick={props.onClickMove}>상품등록하기</button>
        </S.Wrapper>
      </S.Body>
    </>
  );
}
