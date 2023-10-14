import * as S from "./BoardComment.styles";
import type { ICommentWriteUIProps } from "./BoardComment.types";

export default function CommentWriteUI(
  props: ICommentWriteUIProps,
): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.TitleBox>
          <span>댓글</span>
        </S.TitleBox>
        <S.BodyWrapper>
          <S.InfoWrapper>
            <S.Writer
              placeholder="작성자"
              value={
                props.writer !== "" ? props.writer : props.el?.writer ?? ""
              }
              readOnly={props.isEdit}
              onChange={props.onChangeWriter}
            />
            <S.Password
              placeholder="비밀번호"
              onChange={props.onChangePassword}
            />
            <S.Star onChange={props.setStar} />
          </S.InfoWrapper>
          <S.ContentWrapper>
            <S.Content
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={props.onChangeContents}
            ></S.Content>
            <S.SubmitWrapper>
              <span>0/100</span>
              <S.SubBtn
                onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
              >
                등록하기
              </S.SubBtn>
            </S.SubmitWrapper>
          </S.ContentWrapper>
        </S.BodyWrapper>
      </S.Wrapper>
    </>
  );
}