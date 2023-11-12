import * as S from "./styles";

interface IButtonProps {
  onClick: () => void;
  isMobile: boolean;
}

export default function JoinBtn(props: IButtonProps): JSX.Element {
  return (
    <S.BtnC onClick={props.onClick} isMobile={props.isMobile}>
      회원가입
    </S.BtnC>
  );
}
