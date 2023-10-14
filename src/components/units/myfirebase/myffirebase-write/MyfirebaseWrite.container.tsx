import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import FirebaseWriteUI from "./MyfirebaseWrite.presenter";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { useState, type ChangeEvent } from "react";
import { useRouter } from "next/router";

export default function FirebaseWrite(): JSX.Element {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const router = useRouter();

  const onClickSubmit = (): void => {
    const board = collection(getFirestore(firebaseApp), "board");
    void addDoc(board, {
      writer,
      title,
      contents,
    });
    void router.push("/myfirebase");
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value);
  };

  return (
    <FirebaseWriteUI
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
    />
  );
}
