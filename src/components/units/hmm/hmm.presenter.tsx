import * as S from "./hmm.styles";
import { useMediaQuery } from "react-responsive";

export default function HmmUI(props): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width:800px)",
  });

  return (
    <S.Wrapper isMobile={isMobile}>
      <div>
        <S.Dog isMobile={isMobile} src={props.dog} />
      </div>
      <S.ButtonDiv isMobile={isMobile}>
        <S.ResetBtn isMobile={isMobile} onClick={props.onClickReload}>
          다시뽑기!
        </S.ResetBtn>
      </S.ButtonDiv>
    </S.Wrapper>
  );
}
