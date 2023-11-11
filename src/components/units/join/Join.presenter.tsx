import Input01 from "../../commons/Input01";
import Button01 from "../../commons/button/01";
import * as S from "./Join.styles";
import type { IJoinUIProps } from "./Join.types";

export default function JoinUI(props: IJoinUIProps): JSX.Element {
  return (
    <div>
      <S.Wrapper>
        <S.Title>가입하기</S.Title>
        <div>
          <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
            <S.FormWrapper>
              이메일 <Input01 register={props.register("email")} />
              <S.ErrMsg>{props.formState.errors.email?.message}</S.ErrMsg>
              패스워드 <Input01 register={props.register("password")} />
              <S.ErrMsg>{props.formState.errors.password?.message}</S.ErrMsg>
              이름 <Input01 register={props.register("name")} />
              <S.ErrMsg>{props.formState.errors.name?.message}</S.ErrMsg>
              <Button01
                title="회원가입"
                isActive={props.formState.isValid}
              ></Button01>
            </S.FormWrapper>
          </form>
        </div>
      </S.Wrapper>
    </div>
  );
}
