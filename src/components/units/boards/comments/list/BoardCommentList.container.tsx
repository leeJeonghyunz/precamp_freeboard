import { useRouter } from "next/router";
import CommentListUI from "./BoardCommentList.presenter";
import { FETCH_COMMENTS } from "./BoardCommentList.queries";
import { useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchBoardCommentsArgs } from "../../../../../commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller";

export default function CommentList(): JSX.Element {
  const router = useRouter();

  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(
    FETCH_COMMENTS,
    {
      variables: { boardId: String(router.query.number) },
    },
  );

  const loadFunc = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length ?? 10 / 10),
      },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments !== undefined) return previousQueryResult;

        return {
          fetchBoardComments: [...previousQueryResult.fetchBoardComments, ...fetchMoreResult.fetchBoardComments],
        };
      },
    });
  };

  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={loadFunc}>
        {data?.fetchBoardComments.map((el) => <CommentListUI data={data} key={el._id} />)}
      </InfiniteScroll>
    </>
  );
}
