import * as S from "./Upload01.styles";
import type { IUpload01UIProps } from "./Upload01.types";

export default function Upoload01UI(props: IUpload01UIProps): JSX.Element {
  return (
    <div>
      {props.image !== "" ? (
        <S.UploadedImage src={`https://storage.googleapis.com/${props.image}`} />
      ) : (
        <S.UploadBtn onClick={props.onClickUpload}>+</S.UploadBtn>
      )}
      <S.UploadHiddenBtn type="file" ref={props.fileRef} onChange={props.onChangeImageFile} />
    </div>
  );
}
