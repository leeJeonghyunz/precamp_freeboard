import * as S from "./BoardList.style";
import { getDate } from "../../../commons/libraries/utils";
import type { IBoardListUIProps } from "./BoardList.types";
import Pagination from "../../../commons/pagination/Pagination.container";
import { v4 as uuidv4 } from "uuid";
import SearchBar from "../../../commons/searchbar/SearchBar.container";

export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <SearchBar
        refetch={props.refetch}
        onChangeKeyword={props.onChangeKeyword}
      />
      <S.Table>
        <S.Row>
          <S.Number>번호</S.Number>
          <S.Title>제목</S.Title>
          <S.Writer>작성자</S.Writer>
          <S.CreatedAt>날짜</S.CreatedAt>
        </S.Row>
        {props.data?.fetchBoards.map((el) => (
          <S.Row key={el._id}>
            <S.Number>{String(el._id).slice(-4).toUpperCase()}</S.Number>
            <S.Title
              id={el._id}
              onClick={props.oncLickMoveToPage(`/boards/${el._id}`)}
            >
              {el.title
                .replaceAll(props.keyword, `@@2vv${props.keyword}@@2vv`)
                .split("@@2vv")
                .map((el) => (
                  <span
                    key={uuidv4()}
                    style={{ color: el === props.keyword ? "red" : "black" }}
                  >
                    {el}
                  </span>
                ))}
            </S.Title>
            <S.Writer>{el.writer}</S.Writer>
            <S.CreatedAt>{getDate(el.createdAt)}</S.CreatedAt>
          </S.Row>
        ))}
      </S.Table>
      <S.Footer>
        <Pagination refetch={props.refetch} />
        <S.RegisterBtn onClick={props.onClickMoveRegister}>
          게시물 등록하기
        </S.RegisterBtn>
      </S.Footer>
    </S.Wrapper>
  );
}
