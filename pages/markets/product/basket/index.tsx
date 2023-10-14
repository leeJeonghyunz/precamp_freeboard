import { IBoard } from "../../../../src/commons/types/generated/types";
import ItemCard02 from "../../../../src/components/commons/itemCard/02";
import * as S from "./styles";

export default function BasketPage(): JSX.Element {
  const baskets: IBoard[] = JSON.parse(localStorage.getItem("baskets") ?? "[]");

  return (
    <>
      <S.Wrapper>
        <S.Title>오늘 본 상품</S.Title>
        <S.List>
          {baskets.map((el) => (
            <ItemCard02
              el={el}
              key={el}
              id={el._id}
              name={el.name}
              contents={el.contents}
              price={el?.price}
            />
          ))}
        </S.List>
      </S.Wrapper>
    </>
  );
}
