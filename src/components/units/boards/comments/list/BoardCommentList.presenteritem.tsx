import * as S from "./BoardCommentList.style";
import { getDate } from "../../../../commons/libraries/utils";
import type { IBoardCommentListUIItemProps } from "./BoardCommentList.types";
import { useRouter } from "next/router";
import type { MouseEvent, ChangeEvent } from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import type { IMutation, IMutationDeleteBoardCommentArgs } from "../../../../../commons/types/generated/types";
import { DELETE_COMMENTS, FETCH_COMMENTS } from "./BoardCommentList.queries";
import CommentWrite from "../write/BoardComment.container";
import { wrapAsync } from "../../../../../commons/libraries/asyncFunc";

export default function CommentListUIItem(props: IBoardCommentListUIItemProps): JSX.Element {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [boardCommentId, setBardCommentId] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [deleteBoardComment] = useMutation<Pick<IMutation, "deleteBoardComment">, IMutationDeleteBoardCommentArgs>(
    DELETE_COMMENTS,
  );

  const onClickDelete = async (): Promise<void> => {
    setIsDelete(false);
    // const password = prompt("비밀번호를 입력하시오.");
    // if (event.target instanceof HTMLDivElement)
    await deleteBoardComment({
      variables: {
        boardCommentId,
        password,
      },
      refetchQueries: [
        {
          query: FETCH_COMMENTS,
          variables: { boardId: router.query.number },
        },
      ],
    });
    alert("삭제되었습니다.");
  };

  const onClickEdit = (): void => {
    setIsEdit(true);
    // console.log(isEdit);
  };

  const onClickDeleteModal = (event: MouseEvent<HTMLImageElement>): void => {
    setBardCommentId(event.currentTarget.id);
    setIsDelete(true);
  };

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  return (
    <div>
      {isDelete && (
        <S.PasswordModal
          title="모달 제목"
          open={isDelete}
          onOk={wrapAsync(onClickDelete)}
          // onCancel={handleCancel}
        >
          비밀번호 입력: <input type="password" onChange={onChangeDeletePassword} />
        </S.PasswordModal>
      )}
      {!isEdit ? (
        <S.Wrapper key={props.el._id}>
          <S.Body>
            <S.WrapperTop>
              <S.FaceWrapper>
                <S.ProfileImages></S.ProfileImages>
              </S.FaceWrapper>
              <S.CommentWrapper key={props.el._id}>
                <S.CommentWrapperTop>
                  <S.WriterName>{props.el.writer}</S.WriterName>
                  <S.Rating value={props.el.rating} disabled />
                </S.CommentWrapperTop>
                <S.CommentContent>{props.el.contents}</S.CommentContent>
                <S.CreatedAt>{getDate(props.el.createdAt)}</S.CreatedAt>
              </S.CommentWrapper>
            </S.WrapperTop>
            <S.IconWrapper>
              <div></div>
              <S.DeleteBtn id={props.el._id} onClick={onClickEdit}>
                🖊
              </S.DeleteBtn>
              <S.DeleteBtn id={props.el._id} onClick={onClickDeleteModal}>
                ❌
              </S.DeleteBtn>
            </S.IconWrapper>
          </S.Body>
        </S.Wrapper>
      ) : (
        <CommentWrite data={props.data} el={props.el} setIsEdit={setIsEdit} isEdit={isEdit} />
      )}
    </div>
  );
}
