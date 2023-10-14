import type { ChangeEvent, RefObject } from "react";

export interface IUploads01Props {
  index: number;
  image: string;
  onChangeImage: (fileUrl: string, index: number) => void;
}

export interface IUpload01UIProps {
  image: string;

  onClickUpload: () => void;
  onChangeImageFile: (event: ChangeEvent<HTMLInputElement>) => void;
  fileRef: RefObject<HTMLInputElement>;
}
