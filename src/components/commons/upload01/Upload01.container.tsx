import { useRef, type ChangeEvent } from "react";
import Upoload01UI from "./Upload01.presenter";
import { checkValidatonFile } from "../libraries/validationFiles";
import { useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";
import { UPLOAD_FILE } from "./Upload01.queries";
import type { IUploads01Props } from "./Upload01.types";

export default function Upoload01(props: IUploads01Props): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeImageFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0];

    const isValid = checkValidatonFile(file);
    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });
    props.onChangeImage(result.data?.uploadFile.url, props.index);
    console.log(result);
  };

  const onClickUpload = (): void => {
    fileRef.current?.click();
  };
  return (
    <Upoload01UI
      image={props.image}
      fileRef={fileRef}
      onClickUpload={onClickUpload}
      onChangeImageFile={onChangeImageFile}
    />
  );
}