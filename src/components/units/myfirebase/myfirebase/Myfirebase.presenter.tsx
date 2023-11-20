import * as S from "./Myfirebase.styles";
import type { IMyFirebaseUIProps } from "./Myfirebase.types";
import { v4 as uuidv4 } from "uuid";

export default function MyFirebaseUI(props: IMyFirebaseUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.TableTop>
        <span>번호</span>
        <S.Writer>작성자</S.Writer>
        <S.Title>제목</S.Title>
        <span>내용</span>
      </S.TableTop>
      <div>
        {props?.dataBoards.map((el: any, index: number) => (
          <S.TableBody key={uuidv4()}>
            <span>{index + 1}</span>
            <S.Writer>{el.writer}</S.Writer>
            <S.Title>{el.title}</S.Title>
            <span>{el.contents}</span>
            {/* <button id={uuidv4()} onClick={props.onClickDelete}>
              {" "}
              삭제{" "}
            </button> */}
          </S.TableBody>
        ))}
      </div>
    </S.Wrapper>
  );
}
