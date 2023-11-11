import type { ApolloQueryResult } from "@apollo/client";
import type { ChangeEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";

export interface ISearchBarUIProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ISearchBarProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  onChangeKeyword: (value: string) => void;
}
