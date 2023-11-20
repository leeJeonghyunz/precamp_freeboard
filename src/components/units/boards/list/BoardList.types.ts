import type { IQuery } from "../../../../commons/types/generated/types";
import type { MouseEvent } from "react";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  // 처음에는 undefined였지만 들어올 것을 예정
  refetch?: any;
  onCLickMoveDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveRegister: () => void;
  onClickPage?: (event: MouseEvent<HTMLDivElement>) => void;
  onClickSearch?: () => void;
  onChangeKeyword: (value: string) => void;
  oncLickMoveToPage: (path: string) => () => void;
  keyword: string;
}
