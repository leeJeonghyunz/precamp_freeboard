import { useRecoilState } from "recoil";
import { watchedItemsState } from "../../../commons/stores";
import * as S from "./styles";
import { useQueryFetchUsedItem } from "../hooks/queries/useQueryFetchUsedItem";
import ItemCard01 from "../itemCard/01";
import ItemCard02 from "../itemCard/02";
import { IBoard } from "../../../commons/types/generated/types";
import { useEffect } from "react";

export default function WatchedItemPage(): JSX.Element {
  const parsedItems: IBoard = JSON.parse(localStorage.getItem("items") ?? "[]");

  return (
    <>
      <S.Title>오늘본상품</S.Title>
      <S.Wrapper>
        {parsedItems.map((el) => (
          <ItemCard02
            el={el}
            key={el?._id}
            id={el._id}
            name={el.name}
            contents={el.contents}
            price={el?.price}
          />
        ))}
      </S.Wrapper>
    </>
  );
}
