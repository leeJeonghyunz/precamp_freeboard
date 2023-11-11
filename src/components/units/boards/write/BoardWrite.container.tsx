import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import type { ChangeEvent } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import type { IBoardWriteProps } from "./BoardWrite.type";
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import type { Address } from "react-daum-postcode";
import { result } from "lodash";
import { FETCH_BOARD } from "../detail/BoardDetail.queries";

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);

  const [isActive, setIsActive] = useState(false);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [image, setImage] = useState(["", "", ""]);

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }

    if (
      event.target.value !== "" &&
      password !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    if (
      writer !== "" &&
      event.target.value !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    if (
      writer !== "" &&
      password !== "" &&
      event.target.value !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (value: string): void => {
    setContents(value);
    if (value !== "") {
      setContentsError("");
    }

    if (writer !== "" && password !== "" && title !== "" && value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeAddress = (event: ChangeEvent<HTMLInputElement>): void => {
    setZipcode(event.target.value);
  };

  const onClickSearchAddress = (): void => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteSearchAddress = (data: Address): void => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    setIsOpen((prev) => !prev);
  };

  const onChangeAddressDetail = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setAddressDetail(event.target.value);
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>): void => {
    setYoutubeUrl(event.target.value);
  };

  const onChangeImage = (image1: string, index: number): void => {
    const newImage = [...image];
    newImage[index] = image1;
    setImage(newImage);
    console.log(image);
  };

  const onClickUpload = async (): Promise<void> => {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요.");
    }
    if (contents === "") {
      setContentsError("내용을 입력해주세요.");
    }

    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              title,
              password,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
              images: [...image],
            },
          },
        });
        console.log(result);

        void router.push(`${String(result.data?.createBoard._id)}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickEdit = async (): Promise<void> => {
    if (title === "" && contents === "") {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (password === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (title !== "") updateBoardInput.title = title;
    if (contents !== "") updateBoardInput.contents = contents;
    if (youtubeUrl !== "") updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode !== "" || address !== "" || addressDetail !== "") {
      updateBoardInput.boardAddress = {};
      if (zipcode !== "") updateBoardInput.boardAddress.zipcode = zipcode;
      if (address !== "") updateBoardInput.boardAddress.address = address;
      if (addressDetail !== "")
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    try {
      if (typeof router.query.number !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      const result = await updateBoard({
        variables: {
          password,
          boardId: String(router.query.number),
          updateBoardInput,
        },
      });
      console.log(result);
      void router.push(`/boards/${String(result.data?.updateBoard._id)}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
    console.log(updateBoardInput);
  };

  // const a = () => {
  // };

  return (
    <BoardWriteUI
      // a={a}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickUpload={onClickUpload}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      isActive={isActive}
      data={props.data}
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
      onClickSearchAddress={onClickSearchAddress}
      onCompleteSearchAddress={onCompleteSearchAddress}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeAddress={onChangeAddress}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeImage={onChangeImage}
      image={image}
      fileRef={fileRef}
    />
  );
}
