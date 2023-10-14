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
  isDeleteModal: boolean;
  isDelete: boolean;
  onClickDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  onClickEdit: (event: MouseEvent<HTMLDivElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLDivElement>) => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}
