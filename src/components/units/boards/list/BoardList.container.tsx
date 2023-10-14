import { FETCH_BOARDS } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, type MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";

export default function BoardList(): JSX.Element {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS);

  const { oncLickMoveToPage } = useMoveToPage();

  const onClickMoveRegister = (): void => {
    void router.push("new");
  };

  const onCLickMoveDetail = (event: MouseEvent<HTMLDivElement>): void => {
    if (event.target instanceof HTMLDivElement)
      void router.push(`/boards/${event.target.id}`);
    // event.target이 태그일 수 도 아닐 수 도 있다.
    // console.log(event.currentTarget.id);
  };

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
    console.log(keyword);
  };

  return (
    <BoardListUI
      keyword={keyword}
      data={data}
      refetch={refetch}
      onClickMoveRegister={onClickMoveRegister}
      onCLickMoveDetail={onCLickMoveDetail}
      onChangeKeyword={onChangeKeyword}
      oncLickMoveToPage={oncLickMoveToPage}
    />
  );
}
