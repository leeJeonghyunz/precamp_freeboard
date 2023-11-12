import { accessTokenUserName, isLoginState } from "../../../../commons/stores";
import JoinBtn from "../../button/JoinBtn";
import LoginBtn from "../../button/LoginBtn";
import * as S from "./LayoutHeader.styles";
import type { ILayoutHeaderProps } from "./LayoutHeader.types";
import { useRecoilState } from "recoil";

export default function LayoutHeaderUI(props: ILayoutHeaderProps): JSX.Element {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [userName, setUserName] = useRecoilState(accessTokenUserName);

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.Logo onClick={props.onClickLogo}>Logo</S.Logo>
        <S.LoginWrapper isMobile={props.isMobile}>
          {isLogin ? (
            <>
              <S.BtnWrapper>
                {userName}님 환영합니다!
                <S.Btn onClick={props.onClcikLogout}>로그아웃</S.Btn>
              </S.BtnWrapper>
            </>
          ) : (
            <>
              <LoginBtn onClick={props.onClickLogin} />
              <JoinBtn onClick={props.onClickJoin} />
            </>
          )}
        </S.LoginWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
