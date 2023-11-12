import * as S from "./Main.styles";
import Input01 from "../../commons/Input01";
import { wrapFormAsync } from "../../../commons/libraries/asyncFunc";
import type { IMainPageUIProps } from "./Main.types";
import LoginBtn from "../../commons/button/LoginBtn";
import NonMemberBtn from "../../commons/button/nonMember";
import JoinBtn from "../../commons/button/JoinBtn";

export default function MainPageUI(props: IMainPageUIProps): JSX.Element {
  return (
    <div>
      <S.Body>
        <S.Wrapper>
          <form onSubmit={wrapFormAsync(props.handleSubmit(props.onClickSubmit))}>
            <S.Form>
              <S.FormInner>
                이메일:
                <Input01 register={props.register("email")} type="text" />
              </S.FormInner>
              <S.ErrMsg>{props.formState.errors.email?.message}</S.ErrMsg>
              <S.FormInner>
                페스워드:
                <Input01 register={props.register("password")} type="password" />
              </S.FormInner>
              <S.ErrMsg>{props.formState.errors.password?.message}</S.ErrMsg>
            </S.Form>
            <S.BtnWrapper isMobile={props.isMobile}>
              <LoginBtn isActive={props.formState.isValid} isMobile={props.isMobile} />
              <NonMemberBtn onClick={props.onClickNonMember} isMobile={props.isMobile} />
              <JoinBtn onClick={props.onClickJoin} isMobile={props.isMobile}>
                회원가입
              </JoinBtn>
            </S.BtnWrapper>
          </form>
        </S.Wrapper>
      </S.Body>
    </div>
  );
}
