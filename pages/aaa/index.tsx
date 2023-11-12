import * as S from "./styles";
import { useMediaQuery } from "react-responsive";

export default function StaticRoutingMovedPage(): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width:800px)",
  });

  return (
    <>
      <S.Body>
        <S.Wrapper isMobile={isMobile}>
          <S.InputWrap>
            <input type="text" />
            <input type="text" />
          </S.InputWrap>
          <div>
            <S.Button isMobile={isMobile}>ㅇㅇㅇㅇㅇㅇ</S.Button>
          </div>
        </S.Wrapper>
      </S.Body>
    </>
  );
}
