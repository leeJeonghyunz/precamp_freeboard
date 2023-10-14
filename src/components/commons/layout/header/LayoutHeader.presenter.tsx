import { isLoginState } from "../../../../commons/stores";
import * as S from "./LayoutHeader.styles";
import type { ILayoutHeaderProps } from "./LayoutHeader.types";
import { useRecoilState } from "recoil";

export default function LayoutHeaderUI(props: ILayoutHeaderProps): JSX.Element {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.Logo onClick={props.onClickLogo}>Logo</S.Logo>
        <S.LoginWrapper>
          {props.dataName}님 환영합니다!
          <S.Btn onClick={props.onClickLogin}>로그인</S.Btn>
          <S.Btn onClick={props.onClickJoin}>회원가입</S.Btn>
        </S.LoginWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
