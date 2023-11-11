import * as S from "./styles";

interface IButtonProps {
  onClick: () => void;
}

export default function JoinBtn(props: IButtonProps): JSX.Element {
  return <S.BtnC onClick={props.onClick}>회원가입</S.BtnC>;
}
