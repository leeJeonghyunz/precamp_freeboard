import * as S from "./Pagination.styles";
import type { IPageinationUIProps } from "./Pagination.types";
import { useMediaQuery } from "react-responsive";

export default function PagenationUI(props: IPageinationUIProps): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width:800px)",
  });

  const pageNumber = isMobile ? 5 : 10;
  return (
    <S.Wrapper>
      <S.Page onClick={props.onClickPagePrev}>☜ 이전</S.Page>
      {new Array(pageNumber).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <S.Page
              key={index + props.startPage}
              id={String(index + props.startPage)}
              onClick={props.onClickPage}
              isActive={props.activePage === index + props.startPage}
            >
              {index + props.startPage}
            </S.Page>
          ),
      )}
      <S.Page onClick={props.onClickPageNext}>다음 ☞</S.Page>
    </S.Wrapper>
  );
}
