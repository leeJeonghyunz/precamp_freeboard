import { ReactQuill } from "../../../commons/react-quill";
import "react-quill/dist/quill.snow.css";
import Upoload01 from "../../../commons/upload01/Upload01.container";
import * as S from "./BoardWrite.styles";
import type { IBoardWriteUIProps } from "./BoardWrite.type";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps): JSX.Element {
  return (
    <>
      {props.isOpen && (
        <S.ModalAddress
          open={props.isOpen}
          onOk={props.onClickSearchAddress}
          onCancel={props.onClickSearchAddress}
        >
          <S.ModalAddressInput onComplete={props.onCompleteSearchAddress} />
        </S.ModalAddress>
      )}
      <S.Body>
        <S.Title>게시물{props.isEdit ? "수정" : "등록"}</S.Title>
        <S.BodyWrapped>
          <S.IdPw>
            <S.InputIdPw>
              <p>작성자</p>
              <S.Input
                onChange={props.onChangeWriter}
                placeholder="이름을 입력해주세요."
                defaultValue={props.data?.fetchBoard.writer ?? ""}
                readOnly={Boolean(props.data?.fetchBoard.writer)}
              />
              {/* !! 논리연산자 */}
              <S.Error>{props.writerError}</S.Error>
            </S.InputIdPw>
            <S.InputIdPw>
              <p>비밀번호</p>
              <S.Input
                onChange={props.onChangePassword}
                placeholder="비밀번호를 입력해주세요."
              />
              <S.Error>{props.passwordError}</S.Error>
            </S.InputIdPw>
          </S.IdPw>
          <S.InputDiv>
            <p>제목</p>
            <input
              onChange={props.onChangeTitle}
              placeholder="제목을 입력해주세요."
              defaultValue={props.data?.fetchBoard.title}
            />
            <S.Error>{props.titleError}</S.Error>
          </S.InputDiv>
          <S.Content>
            <p>내용</p>
            <ReactQuill
              onChange={props.onChangeContents}
              style={{ height: "400px" }}
              defaultValue={props.data?.fetchBoard.contents ?? ""}
            />
            <S.Error>{props.contentsError}</S.Error>
          </S.Content>
          <S.PostDiv>
            <span>주소</span>
            <S.PostDiv2>
              <S.PostCode
                readOnly
                value={
                  props.zipcode !== ""
                    ? props.zipcode
                    : props.data?.fetchBoard.boardAddress?.zipcode
                }
              />
              <S.SearchBtn onClick={props.onClickSearchAddress}>
                우편번호 검색
              </S.SearchBtn>
            </S.PostDiv2>
            <S.PostInput
              readOnly
              value={
                props.address !== ""
                  ? props.address
                  : props.data?.fetchBoard.boardAddress?.address
              }
            />
            <S.PostInput
              onChange={props.onChangeAddressDetail}
              defaultValue={
                props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
              }
            />
          </S.PostDiv>
          <S.YoutubeBox>
            <p>유튜브</p>
            <S.YoutubeInput
              placeholder="링크를 복사해주세요."
              onChange={props.onChangeYoutubeUrl}
              defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
            />
          </S.YoutubeBox>
          <S.PicDiv>
            <p>사진 첨부</p>
            <S.PicDiv2>
              {props.image.map((el, index) => (
                <Upoload01
                  key={uuidv4()}
                  index={index}
                  image={el}
                  onChangeImage={props.onChangeImage}
                />
              ))}
            </S.PicDiv2>
          </S.PicDiv>
          <S.CheckBox>
            <p>메인 설정</p>
            <S.CheckBoxLabel>
              <label>
                <input name="a" type="radio" />
                유튜브
              </label>
              <label>
                <input name="a" type="radio" />
                사진
              </label>
            </S.CheckBoxLabel>
          </S.CheckBox>
        </S.BodyWrapped>
        <S.Save
          onClick={props.isEdit ? props.onClickEdit : props.onClickUpload}
          isActive={props.isEdit ? true : props.isActive}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </S.Save>
        {/* <button onClick={props.a}>zxczxzxc</button> */}
      </S.Body>
    </>
  );
}
