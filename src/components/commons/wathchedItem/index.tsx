import * as S from "./styles";
import ItemCard02 from "../itemCard/02";

export default function WatchedItemPage(): JSX.Element {
  const parsedItems = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("items") ?? "[]") : [];
  return (
    <>
      <S.Title>오늘본상품</S.Title>
      <S.Wrapper>
        {parsedItems.map((el: any) => (
          <ItemCard02 el={el} key={el?._id} id={el._id} name={el.name} contents={el.contents} price={el?.price} />
        ))}
      </S.Wrapper>
    </>
  );
}
