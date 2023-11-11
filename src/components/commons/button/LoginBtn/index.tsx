import * as S from "./styles";

interface IButtonProps {
  isActive: boolean;
  onClick: () => void;
}

export default function LoginBtn(props: IButtonProps): JSX.Element {
  return (
    <S.BtnA onClick={props.onClick} isActive={props.isActive}>
      로그인하기
    </S.BtnA>
  );
}
