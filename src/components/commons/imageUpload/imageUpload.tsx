import * as S from "./styles";
import { wrapAsync } from "../../../commons/libraries/asyncFunc";
import { useState } from "react";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IInputProps {
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
}

export default function ImageUpload01(props: IInputProps): JSX.Element {
  const [images, SetImages] = useState(["", "", ""]);

  const onChangeImageFile =
    (index: number) =>
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
      const file = event.target.files?.[0];
      if (file === undefined) return;
      console.log("file:", file);

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        console.log(event.target?.result); // 게시판에서 event.target.id를 쓰면 eslint가 잡았던 이유: event.target은 태그만을 가르키지 않음
        if (typeof event.target?.result === "string") {
          const tempUrls = [...images];
          console.log("images:", images);
          console.log("tempUrls:", tempUrls);
          tempUrls[index] = event.target?.result;
          console.log("tempUrls:", tempUrls);
          SetImages(tempUrls);
          console.log("images:", images);

          const tempFiles = [...props.files];
          console.log("tempFiles:", tempFiles);
          tempFiles[index] = file;
          console.log("file:", file);
          console.log("tempFiles:", tempFiles);
          props.setFiles(tempFiles);
        }
      };
    };

  console.log("props.files:", props.files);

  return (
    <>
      <S.Wrapper>
        <S.Image src={`${images[0]}`} alt="" />
        <S.Image src={`${images[1]}`} alt="" />
        <S.Image src={`${images[2]}`} alt="" />
        <input type="file" onChange={wrapAsync(onChangeImageFile(0))} />
        <input type="file" onChange={wrapAsync(onChangeImageFile(1))} />
        <input type="file" onChange={wrapAsync(onChangeImageFile(2))} />
        {/* <input value={images} {...props.register} name="images" style={{ display: "none" }} /> */}
      </S.Wrapper>
    </>
  );
}
