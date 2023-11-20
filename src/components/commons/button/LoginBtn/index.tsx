import * as S from "./styles";

interface IButtonProps {
  isActive: boolean;
  isMobile: boolean;
  onClick?: () => void;
}

export default function LoginBtn(props: IButtonProps): JSX.Element {
  return (
    <S.BtnA onClick={props.onClick} isActive={props.isActive} isMobile={props.isMobile}>
      로그인하기
    </S.BtnA>
  );
}
