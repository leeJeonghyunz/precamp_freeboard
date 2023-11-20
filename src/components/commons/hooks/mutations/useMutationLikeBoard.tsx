import { gql, useMutation } from "@apollo/client";
import type { MutationTuple } from "@apollo/client";
import type {
  IMutation,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
} from "../../../../commons/types/generated/types";

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

export const useMutationLikeBoard = (): MutationTuple<Pick<IMutation, "likeBoard">, IMutationLikeBoardArgs> => {
  const mutation = useMutation<Pick<IMutation, "likeBoard">, IMutationLikeBoardArgs>(LIKE_BOARD);

  return mutation;
};

export const useMutationDislikeBoard = (): MutationTuple<
  Pick<IMutation, "dislikeBoard">,
  IMutationDislikeBoardArgs
> => {
  const mutation = useMutation<Pick<IMutation, "dislikeBoard">, IMutationDislikeBoardArgs>(DISLIKE_BOARD);

  return mutation;
};
