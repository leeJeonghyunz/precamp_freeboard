import * as S from "./hmm.styles";

export default function HmmUI(props): JSX.Element {
  return (
    <S.Wrapper>
      <div>
        <S.Dog src={props.dog} />
      </div>
      <S.ButtonDiv>
        <S.ResetBtn onClick={props.onClickReload}>다시뽑기!</S.ResetBtn>
      </S.ButtonDiv>
    </S.Wrapper>
  );
}
