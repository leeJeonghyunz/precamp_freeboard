import type { ChangeEvent, Dispatch, SetStateAction, MouseEvent } from "react";
import type { IBoardComment, IQuery } from "../../../../../commons/types/generated/types";

export interface ICommentWriteUIProps {
  onClickEdit: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  setStar: Dispatch<SetStateAction<number>>;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoardComments">;
  writer: string;
  password: string;
  contents: string;
  el?: IBoardComment;
  star: number;
}

export interface ICommentWriteProps {
  el?: IBoardComment;
  data?: Pick<IQuery, "fetchBoardComments">;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  isEdit?: boolean;
}
