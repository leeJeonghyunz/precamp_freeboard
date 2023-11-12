import * as S from "./styles";
import ItemCard02 from "../itemCard/02";
import type { IBoard } from "../../../commons/types/generated/types";
import { useEffect } from "react";

export default function WatchedItemPage(): JSX.Element {
  const parsedItems: IBoard =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("items") ?? "[]")
      : [];
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
