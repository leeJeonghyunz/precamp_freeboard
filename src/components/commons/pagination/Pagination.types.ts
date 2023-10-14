import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface IPageinationProps {
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export interface IPageinationUIProps {
  onClickPage: (event: MouseEvent<HTMLDivElement>) => void;
  onClickPagePrev: () => void;
  onClickPageNext: () => void;
  startPage: number;
  lastPage: number;
  activePage: number;
}
