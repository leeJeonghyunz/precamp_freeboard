import CommentWriteUI from "./BoardComment.presenter";
import { FETCH_COMMENTS } from "../list/BoardCommentList.queries";
import { useRouter } from "next/router";
import { useState } from "react";
import type { ChangeEvent } from "react";
import type { IUpdateBoardCommentInput } from "../../../../../commons/types/generated/types";
import type { ICommentWriteProps } from "./BoardComment.types";
import {
  useMutationCreateComment,
  useMutationUpdateComment,
} from "../../../../commons/hooks/mutations/useMutationBoardComment";

export default function CommentWrite(props: ICommentWriteProps): JSX.Element {
  const [createBoardComment] = useMutationCreateComment();
  const [updateBoardComment] = useMutationUpdateComment();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);

  const router = useRouter();

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>): void {
    setWriter(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value);
  }

  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>): void {
    setContents(event.target.value);
  }

  const onClickSubmit = async (): Promise<void> => {
    await createBoardComment({
      variables: {
        createBoardCommentInput: {
          writer,
          password,
          contents,
          rating: star,
        },
        boardId: String(router.query.number),
      },
      refetchQueries: [
        {
          query: FETCH_COMMENTS,
          variables: { boardId: router.query.number },
        },
      ],
    });
  };

  const onClickEdit = async (): Promise<void> => {
    const updateBoardCommentInput: IUpdateBoardCommentInput = {};
    if (contents !== "") updateBoardCommentInput.contents = contents;

    if (typeof props.el?._id !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    await updateBoardComment({
      variables: {
        updateBoardCommentInput,
        password,
        boardCommentId: props.el?._id,
      },
      refetchQueries: [
        {
          query: FETCH_COMMENTS,
          variables: { boardId: router.query.number },
        },
      ],
    });
    props.setIsEdit(false);
  };

  return (
    <CommentWriteUI
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      setStar={setStar}
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
      writer={writer}
      el={props.el}
    />
  );
}
