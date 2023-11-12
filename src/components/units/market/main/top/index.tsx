import Title01 from "../../../../commons/title/title01";
import * as S from "./LiveMarketPageTop.styles";
import ItemCard01 from "../../../../commons/itemCard/01";
import { useQueryFetchUsedItemsOfTheBest } from "../../../../commons/hooks/queries/useQueryFetchUsedItemsOfTheBest";

export default function LiveMarketPageTop(): JSX.Element {
  const { data } = useQueryFetchUsedItemsOfTheBest();

  return (
    <>
      <Title01 title="베스트 상품" />
      <S.Wrapper>
        {data?.fetchUseditemsOfTheBest.map((el, index) => (
          <ItemCard01 el={el} key={el?._id} id={el._id} name={el.name} contents={el.contents} price={el?.price} />
        ))}
      </S.Wrapper>
    </>
  );
}
