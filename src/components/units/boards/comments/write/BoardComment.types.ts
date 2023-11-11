import type { ChangeEvent, Dispatch, SetStateAction, MouseEvent } from "react";
import {
  IBoardComment,
  IQuery,
} from "../../../../../commons/types/generated/types";

export interface ICommentWriteUIProps {
  onClickEdit: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  setStar: Dispatch<SetStateAction<number>>;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoardComments">;
  writer: string;
  el?: IBoardComment;
}

export interface ICommentWriteProps {
  el?: IBoardComment;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  data?: Pick<IQuery, "fetchBoardComments">;
  isEdit: boolean;
}
