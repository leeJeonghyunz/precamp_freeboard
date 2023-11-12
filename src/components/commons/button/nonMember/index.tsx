import * as S from "./style";

interface IButtonProps {
  onClick: () => void;
  isMobile: boolean;
}

export default function NonMemberBtn(props: IButtonProps): JSX.Element {
  return (
    <S.BtnB onClick={props.onClick} isMobile={props.isMobile}>
      {props.isMobile ? (
        "비회원 로그인"
      ) : (
        <>
          비회원
          <br />
          로그인
        </>
      )}
    </S.BtnB>
  );
}
