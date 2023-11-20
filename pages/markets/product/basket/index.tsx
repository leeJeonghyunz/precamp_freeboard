import ItemCard02 from "../../../../src/components/commons/itemCard/02";
import * as S from "../../../../src/components/units/basket/styles";

export default function BasketPage(): JSX.Element {
  const baskets = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("baskets") ?? "[]") : [];

  return (
    <>
      <S.Wrapper>
        <S.Title>장바구니</S.Title>
        <S.List>
          {baskets.map((el: any) => (
            <ItemCard02 el={el} key={el} id={el._id} name={el.name} contents={el.contents} price={el?.price} />
          ))}
        </S.List>
      </S.Wrapper>
    </>
  );
}
