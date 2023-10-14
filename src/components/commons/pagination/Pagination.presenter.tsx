import * as S from "./Pagination.styles";
import type { IPageinationUIProps } from "./Pagination.types";

export default function PagenationUI(props: IPageinationUIProps): JSX.Element {
  return (
    <div>
      <S.Page onClick={props.onClickPagePrev}>☜ 이전</S.Page>
      {new Array(10).fill(1).map(
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
    </div>
  );
}
