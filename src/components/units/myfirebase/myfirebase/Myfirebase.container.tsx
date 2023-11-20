import { addDoc, collection, getDocs, getFirestore, doc, deleteDoc } from "firebase/firestore/lite";
import MyFirebaseUI from "./Myfirebase.presenter";
import { useEffect, useState, type MouseEvent } from "react";
import type { DocumentData } from "firebase/firestore/lite";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

export default function MyFirebase(): JSX.Element {
  const router = useRouter();
  const [dataBoards, SetDataBoards] = useState<DocumentData>([]);

  const onClickSubmit = (): void => {
    void router.push("/myfirebase/write");
  };

  useEffect(() => {
    const onClickFetch = async (): Promise<void> => {
      const board = collection(getFirestore(firebaseApp), "board");
      const result = await getDocs(board);
      const datas = result.docs.map((el) => el.data());
      SetDataBoards(datas);
    };
    void onClickFetch();
  }, []);

  // const onClickDelete = async (event: MouseEvent<HTMLButtonElement>): Promise<void> => {
  //   // console.log(event.target.id);
  //   // const eventID = event.target.id;
  //   await deleteDoc(doc(getFirestore(firebaseApp), "boards", eventID));
  // };

  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
      <MyFirebaseUI dataBoards={dataBoards} />
    </>
  );
}
