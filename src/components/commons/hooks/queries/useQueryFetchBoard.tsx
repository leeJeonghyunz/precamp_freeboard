import { gql, useQuery } from "@apollo/client";
import type { IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";

export const FETCH_BOARD = gql`
  query fetchBoard($_id: ID!) {
    fetchBoard(boardId: $_id) {
      _id
      writer
      title
      contents
      createdAt
      youtubeUrl
      likeCount
      dislikeCount
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`;

export const useQueryFetchBoard = (variables: IQueryFetchBoardArgs) => {
  const query = useQuery(FETCH_BOARD, {
    variables,
  });

  return query;
};
