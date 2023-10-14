import * as S from "./hmm.styles";

export default function HmmUI(props): JSX.Element {
  return (
    <S.Wrapper>
      <div>
        <S.Dog src={props.dog} />
      </div>
      {/* <button onClick={onClickSync}>Rest 요청하기 (동기)</button> */}
      <button onClick={props.onClickReload}>다시뽑기!</button>
    </S.Wrapper>
  );
}
