import * as S from "./BoardDetail.style";
import { getDate } from "../../../commons/libraries/utils";
import type { IBoardDetailUIProps } from "./BoardDetail.types";
import { Tooltip } from "antd";
import DOMPurify from "dompurify";

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  return (
    <>
      <S.Body>
        <S.Wrapper>
          <S.WrapperTop>
            <S.Info>
              <S.ProfilePhoto></S.ProfilePhoto>
              <S.InfoBody>
                <div>{props.data?.fetchBoard?.writer}</div>
                <div>{getDate(props.data?.fetchBoard?.createdAt)}</div>
              </S.InfoBody>
            </S.Info>
            <S.TitleDiv>
              <S.Title>{props.data?.fetchBoard?.title}</S.Title>
            </S.TitleDiv>
            <S.Icon>
              <S.LinkIcon></S.LinkIcon>
              <Tooltip
                placement="topRight"
                title={`${props.data?.fetchBoard.boardAddress?.address ?? ""} ${
                  props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
                }`}
              >
                <S.LocationIcon></S.LocationIcon>
              </Tooltip>
            </S.Icon>
          </S.WrapperTop>
          <S.WrapperContents>
            <S.ImageBox>
              {props.data?.fetchBoard.images
                ?.filter((el) => el)
                .map((el) => (
                  <S.Image
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  ></S.Image>
                ))}
            </S.ImageBox>
            {process.browser && (
              <S.Contents
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(props.data?.fetchBoard?.contents),
                }}
              />
            )}
          </S.WrapperContents>
          <S.WrapperBottom>
            {props.data?.fetchBoard.youtubeUrl !== "" && (
              <S.Youtube
                url={props.data?.fetchBoard.youtubeUrl ?? ""}
                width="486px"
                height="240px"
              />
            )}
            <S.LikeWrapped>
              <S.LikeBtnWrapped>
                <S.LikeBtn onClick={props.onClickLike}></S.LikeBtn>
                <div>{props.data?.fetchBoard?.likeCount}</div>
              </S.LikeBtnWrapped>
              <S.LikeBtnWrapped>
                <S.DisLikeBtn onClick={props.onClickDisLike}></S.DisLikeBtn>
                <div>{props.data?.fetchBoard?.dislikeCount}</div>
              </S.LikeBtnWrapped>
            </S.LikeWrapped>
          </S.WrapperBottom>
          <S.Footer>
            <S.FooterBtn onClick={props.onClickMoveList}>목록으로</S.FooterBtn>
            <S.FooterBtn onClick={props.onClickMoveEdit}>수정하기</S.FooterBtn>
            <S.FooterBtn onClick={props.onClickDelete}>삭제하기</S.FooterBtn>
          </S.Footer>
        </S.Wrapper>
      </S.Body>
    </>
  );
}
