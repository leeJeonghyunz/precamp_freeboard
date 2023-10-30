import {
  useState,
  type ChangeEvent,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";

import * as S from "./styles";
import type { UseFormRegisterReturn, UseFormSetValue } from "react-hook-form";
import { useMutationUploadFile } from "../hooks/mutations/useMutationUploadFile";
import { IFormData } from "../../units/market/product/register/body/ProductRegisterBody.index";
import { wrapAsync } from "../../../commons/libraries/asyncFunc";

interface IInputProps {
  register: UseFormRegisterReturn;
  setValue: UseFormSetValue<IFormData>;
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
}

export default function ImageUpload01(props: IInputProps): JSX.Element {
  const [images, SetImages] = useState(["", "", ""]);

  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeImageFile =
    (index: number) =>
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
      const file = event.target.files?.[0];
      if (file === undefined) return;
      console.log(file);

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        console.log(event.target?.result); // 게시판에서 event.target.id를 쓰면 eslint가 잡았던 이유: event.target은 태그만을 가르키지 않음
        if (typeof event.target?.result === "string") {
          const tempUrls = [...images];
          tempUrls[index] = event.target?.result;
          SetImages(tempUrls);

          const tempFiles = [...props.files];
          tempFiles[index] = file;
          props.setFiles(tempFiles);
        }
      };

      // const result = await uploadFile({ variables: { file } });
      // console.log(result.data?.uploadFile.url);
      // SetImages(result?.data?.uploadFile?.url ?? "");
      // props.setValue("images", result.data?.uploadFile.url);
    };

  console.log(images);

  const onClickFile = (): void => {
    fileRef.current?.click();
  };

  return (
    <>
      <S.Wrapper>
        <S.Image src={`${images[0]}`} alt="" />
        <S.Image src={`${images[1]}`} alt="" />
        <S.Image src={`${images[2]}`} alt="" />
        <input type="file" onChange={wrapAsync(onChangeImageFile(0))} />
        <input type="file" onChange={wrapAsync(onChangeImageFile(1))} />
        <input type="file" onChange={wrapAsync(onChangeImageFile(2))} />
        {/* <S.ImageClick onClick={onClickFile}> +</S.ImageClick>
        <S.ImageClick onClick={onClickFile}> +</S.ImageClick>
        <S.ImageClick onClick={onClickFile}> +</S.ImageClick>
        <S.HiddenInput onChange={onChangeImageFile} type="file" ref={fileRef} />
        <S.HiddenInput onChange={onChangeImageFile} type="file" ref={fileRef} />
        <S.HiddenInput onChange={onChangeImageFile} type="file" ref={fileRef} /> */}
        <input
          value={images}
          {...props.register}
          name="images"
          style={{ display: "none" }}
        />
      </S.Wrapper>
    </>
  );
}
