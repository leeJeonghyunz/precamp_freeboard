import type { IQuery } from "../../../../commons/types/generated/types";
import type { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUIProps {
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  zipcode: any;
  address: string;
  addressDetail: any;
  image: string[];
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (value: string) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickEdit: () => void;
  onClickUpload: () => void;
  onCompleteSearchAddress: (data: any) => void;
  onChangeImage: (image: string, index: number) => void;
  isEdit: boolean;
  isActive: boolean;
  isOpen: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  onClickSearchAddress: () => void;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
