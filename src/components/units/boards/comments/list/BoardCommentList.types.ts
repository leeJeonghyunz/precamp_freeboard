import type {
  IBoardComment,
  IQuery,
} from "../../../../../commons/types/generated/types";
import type { MouseEvent, ChangeEvent } from "react";

export interface ICommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
}

export interface IBoardCommentListUIItemProps {
  el: IBoardComment;
  data?: Pick<IQuery, "fetchBoardComments">;
  isDeleteModal: boolean;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}
