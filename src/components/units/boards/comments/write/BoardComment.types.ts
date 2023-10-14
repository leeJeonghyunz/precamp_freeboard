import type { ChangeEvent, Dispatch, SetStateAction, MouseEvent } from "react";
import { IBoardComment } from "../../../../../commons/types/generated/types";

export interface ICommentWriteUIProps {
  onClickEdit: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  setStar: Dispatch<SetStateAction<number>>;
  isEdit: boolean;
  writer: string;
  el?: IBoardComment;
}

export interface ICommentWriteProps {
  el?: IBoardComment;
  setIsEdit: boolean;
  isEdit: boolean;
}
