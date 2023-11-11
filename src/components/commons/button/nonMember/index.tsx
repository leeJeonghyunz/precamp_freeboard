import * as S from "./style";

interface IButtonProps {
  onClick: () => void;
}

export default function NonMemberBtn(props: IButtonProps): JSX.Element {
  return (
    <S.BtnB onClick={props.onClick}>
      비회원<br></br>로그인
    </S.BtnB>
  );
}
