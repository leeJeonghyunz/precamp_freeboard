import * as S from "./styles";
import Image01 from "../../DetailImg";
import Dompurify from "dompurify";

interface IItemCardProps {
  name: string;
  contents: string;
  price: string;
  id: string;
  el: any;
}

export default function ItemCard02(props: IItemCardProps): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Detail>
          <Image01 id={props.id} />
          <h4>{props.name}</h4>
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
