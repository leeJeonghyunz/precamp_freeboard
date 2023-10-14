import * as S from "./styles";
import { useRouter } from "next/router";
import Image01 from "../../DetailImg";
import Dompurify from "dompurify";
import type { IBoard } from "../../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { watchedItemsState } from "../../../../commons/stores";

interface IItemCardProps {
  name: string;
  contents: string;
  price: string;
  id: string;
  el: any;
}

export default function ItemCard02(props: IItemCardProps): JSX.Element {
  const router = useRouter();
  const [watchedItems, setWatchedItems] = useRecoilState(watchedItemsState);

  const onClickItem = (item: IBoard) => () => {
    const items: IBoard[] = JSON.parse(localStorage.getItem("items") ?? "[]");
    const temp = items.filter((el) => el._id === item._id);
    if (temp.length >= 1) {
      void router.push(`/markets/product/${props.id}`);
      return;
    }

    items.push(item);

    localStorage.setItem("items", JSON.stringify(items));
    setWatchedItems(JSON.stringify(items));

    console.log(watchedItems);

    void router.push(`/markets/product/${props.id}`);
  };

  return (
    <>
      <S.Wrapper>
        <S.Detail onClick={onClickItem(props.el)}>
          <Image01 id={props.id} />
          <div>{props.name}</div>
        </S.Detail>
        <S.Wrapper2>
          <div
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.contents),
            }}
          />
        </S.Wrapper2>
        <S.Wrapper3>
          <div>{props.price}원</div>
        </S.Wrapper3>
        {/* <S.BasketBtn onClick={onClickBasket(props.el)}>
          장바구니 담기
        </S.BasketBtn> */}
      </S.Wrapper>
    </>
  );
}
