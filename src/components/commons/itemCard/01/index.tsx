import * as S from "./styles";
import Image01 from "../../DetailImg";
import Dompurify from "dompurify";
import { useRouter } from "next/router";
import { useMoveToPage } from "../../hooks/custom/useMoveToPage";
import type { IBoard } from "../../../../commons/types/generated/types";

interface IItemCardProps {
  name: string;
  contents: string;
  price: string;
  el: any;
  id: string;
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
      <S.ItemCard>
        <div onClick={onClickItem(props.el)}>
          <Image01 id={props.id} />
          <S.Name>{props.name}</S.Name>
          <S.Contents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.contents),
            }}
          />
          <div>{props.price}원</div>
        </div>
      </S.ItemCard>
    </>
  );
}
