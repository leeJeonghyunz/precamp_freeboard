import * as S from "./Main.styles";
import Input01 from "../../commons/Input01";
import { wrapFormAsync } from "../../../commons/libraries/asyncFunc";
import type { IMainPageUIProps } from "./Main.types";
import Button01 from "../../commons/button/01";

export default function MainPageUI(props: IMainPageUIProps): JSX.Element {
  return (
    <div>
      <S.Body>
        <S.Wrapper>
          <form
            onSubmit={wrapFormAsync(props.handleSubmit(props.onClickSubmit))}
          >
            이메일: <Input01 register={props.register("email")} type="text" />
            <div>{props.formState.errors.email?.message}</div>
            페스워드:{" "}
            <Input01 register={props.register("password")} type="text" />
            <div>{props.formState.errors.password?.message}</div>
            <Button01 title="로그인하기" isActive={props.formState.isValid} />
          </form>
        </S.Wrapper>
      </S.Body>
    </div>
  );
}
