import { wrapAsync } from "../../../../../commons/libraries/asyncFunc";
import Upoload01 from "../../../upload01/Upload01.container";
import * as S from "./MypageSidebar.styles";

export default function EditUserUI(props: MypageSidebarEdit): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <div>
          이름: <input onChange={props.onChangeName} type="text" />
        </div>
        <S.PicWrapper>
          <span> 사진: </span>
          <div>
            {props.image.map((el, index) => (
              <Upoload01 key={el} index={index} image={el} onChangeImage={props.onChangeName} />
            ))}
          </div>
        </S.PicWrapper>
        <button onClick={wrapAsync(props.onClickEdit)}>제출하기</button>
      </S.Wrapper>
    </>
  );
}
