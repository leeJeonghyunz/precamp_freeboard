import { useState, type ChangeEvent, useRef } from "react";

import * as S from "./styles";
import type { UseFormRegisterReturn, UseFormSetValue } from "react-hook-form";
import { useMutationUploadFile } from "../hooks/mutations/useMutationUploadFile";
import { IFormData } from "../../units/market/product/register/body/ProductRegisterBody.index";

interface IInputProps {
  register: UseFormRegisterReturn;
  setValue: UseFormSetValue<IFormData>;
}

export default function ImageUpload01(props: IInputProps): JSX.Element {
  const [images, SetImages] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutationUploadFile();

  const onChangeImageFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0];

    const result = await uploadFile({ variables: { file } });
    console.log(result.data?.uploadFile.url);
    SetImages(result?.data?.uploadFile?.url ?? "");
    props.setValue("images", result.data?.uploadFile.url);
  };
  console.log(images);
  const onClickFile = (): void => {
    fileRef.current?.click();
  };

  return (
    <>
      <S.Wrapper>
        <S.Image src={`https://storage.googleapis.com/${images}`} alt="" />
        <S.ImageClick onClick={onClickFile}> +</S.ImageClick>
        <S.HiddenInput onChange={onChangeImageFile} type="file" ref={fileRef} />
        <input value={images} {...props.register} name="images" />
      </S.Wrapper>
    </>
  );
}
