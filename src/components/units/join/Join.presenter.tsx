import Input01 from "../../commons/Input01";
import Button01 from "../../commons/button/01";
import * as S from "./Join.styles";
import type { IJoinUIProps } from "./Join.types";

export default function JoinUI(props: IJoinUIProps): JSX.Element {
  return (
    <div>
      <S.Wrapper>
        <S.Title>가입하기</S.Title>
        <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
          이메일 <Input01 register={props.register("email")} />
          <div>{props.formState.errors.email?.message}</div>
          패스워드 <Input01 register={props.register("password")} />
          <div>{props.formState.errors.password?.message}</div>
          이름 <Input01 register={props.register("name")} />
          <div>{props.formState.errors.name?.message}</div>
          <Button01
            title="회원가입"
            isActive={props.formState.isValid}
          ></Button01>
        </form>
      </S.Wrapper>
    </div>
  );
}
