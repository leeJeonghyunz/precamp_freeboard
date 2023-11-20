import * as S from "./styles";
import Dompurify from "dompurify";
import Image01 from "../../DetailImg";
import { useRouter } from "next/router";
import type { IBoard } from "../../../../commons/types/generated/types";
import type { Maybe } from "yup";

interface IItemCardProps {
  name: string;
  contents: string;
  price: Maybe<number>;
  id: string;
  el: any;
  isMobile: boolean;
}

export default function ItemCard02Basket(props: IItemCardProps): JSX.Element {
  const router = useRouter();

  const onClickItem = (item: IBoard) => () => {
    const items: IBoard[] = JSON.parse(localStorage.getItem("items") ?? "[]");
    const temp = items.filter((el) => el._id === item._id);
    if (temp.length >= 1) {
      void router.push(`/markets/product/${props.id}`);
      return;
    }
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
    void router.push(`/markets/product/${props.id}`);
  };

  const onClickBasket = (basket: IBoard) => () => {
    // 1. 기존 자압구니 가져오기
    const baskets: IBoard[] = JSON.parse(localStorage.getItem("baskets") ?? "[]");

    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length >= 1) {
      alert("이미 있는 물품입니다!");
      return;
    }
    console.log(basket);
    baskets.push(basket);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    alert("장바구니에 추가되었습니다.");
  };

  return (
    <>
      {props.isMobile ? (
        <S.Wrapper>
          <S.Detail onClick={onClickItem(props.el)}>
            <Image01 id={props.id} />
          </S.Detail>
          <S.isMobileBox>
            <h4>{props.name}</h4>
            <div>{props.price}원</div>
          </S.isMobileBox>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <S.Detail onClick={onClickItem(props.el)}>
            <Image01 id={props.id} />
            <h4>{props.name}</h4>
          </S.Detail>
          {!props.isMobile && (
            <S.Wrapper2>
              <div
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(props.contents),
                }}
              />
            </S.Wrapper2>
          )}
          <S.Wrapper3>
            <div>{props.price}원</div>
            {!props.isMobile && (
              <S.basket onClick={onClickBasket(props.el)}>
                <S.HeartOutlinedIcon></S.HeartOutlinedIcon>
              </S.basket>
            )}
          </S.Wrapper3>
        </S.Wrapper>
      )}
    </>
  );
}
