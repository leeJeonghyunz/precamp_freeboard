import Image01 from "../../DetailImg";
import { useMoveToPage } from "../../hooks/custom/useMoveToPage";
import * as S from "./styles";
import Dompurify from "dompurify";

interface IItemCardProps {
  name: string;
  contents: string;
  price: string;
  id: string;
}

export default function ItemCard01(props: IItemCardProps): JSX.Element {
  const { oncLickMoveToPage } = useMoveToPage();

  return (
    <>
      <S.ItemCard>
        <div onClick={oncLickMoveToPage(`/markets/product/${props.id}`)}>
          <Image01 id={props.id} />
          <div>{props.name}</div>
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
