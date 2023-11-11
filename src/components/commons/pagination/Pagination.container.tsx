import { useState, type MouseEvent } from "react";
import PagenationUI from "./Pagination.presenter";
import type { IPageinationProps } from "./Pagination.types";
import { useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";
import { FETCH_BOARDS_COUNT } from "../../units/boards/list/BoardList.queries";

export default function Pagination(props: IPageinationProps): JSX.Element {
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const [startPage, setStartPage] = useState(1);
  const [activePage, setactivePage] = useState(1);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount ?? 10) / 10;

  const onClickPage = (event: MouseEvent<HTMLDivElement>): void => {
    const activePage = Number(event.currentTarget.id);
    setactivePage(activePage);
    void props.refetch({ page: activePage });
  };

  const onClickPagePrev = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickPageNext = (): void => {
    if (startPage >= lastPage - 10) return;
    setStartPage(startPage + 10);
    void props.refetch({ page: startPage + 10 });
  };

  return (
    <PagenationUI
      onClickPage={onClickPage}
      onClickPagePrev={onClickPagePrev}
      onClickPageNext={onClickPageNext}
      startPage={startPage}
      lastPage={lastPage}
      activePage={activePage}
    />
  );
}
