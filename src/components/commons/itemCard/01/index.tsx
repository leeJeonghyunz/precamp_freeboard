import * as S from "./styles";
import Image01 from "../../DetailImg";
import Dompurify from "dompurify";
import { useRouter } from "next/router";
import type { IBoard } from "../../../../commons/types/generated/types";
import type { Maybe } from "yup";

interface IItemCardProps {
  name: string;
  contents: string;
  price: Maybe<number>;
  el: any;
  id: string;
  isMobile: boolean;
}

export default function ItemCard01(props: IItemCardProps): JSX.Element {
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

  return (
    <>
      <S.ItemCard isMobile={props.isMobile}>
        <S.Wrapper onClick={onClickItem(props.el)}>
          <Image01 id={props.id} />
          <S.Name>{props.name}</S.Name>
          {!props.isMobile && (
            <>
              <S.Contents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(props.contents),
                }}
              />
              <div>{props.price}원</div>
            </>
          )}
        </S.Wrapper>
      </S.ItemCard>
    </>
  );
}
