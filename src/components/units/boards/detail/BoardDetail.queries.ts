import { gql } from "@apollo/client";

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

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export const LIKE_BOARD = gql`
  mutation ($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export const DISLIKE_BOARD = gql`
  mutation ($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;
