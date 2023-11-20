import { gql, useMutation } from "@apollo/client";
import type { MutationTuple } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_COMMENT = gql`
  mutation ($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {
    createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {
      _id
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation ($updateBoardCommentInput: UpdateBoardCommentInput!, $password: String, $boardCommentId: ID!) {
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput
      password: $password
      boardCommentId: $boardCommentId
    ) {
      _id
    }
  }
`;

export const useMutationCreateComment = (): MutationTuple<
  Pick<IMutation, "createBoardComment">,
  IMutationCreateBoardCommentArgs
> => {
  const mutation = useMutation<Pick<IMutation, "createBoardComment">, IMutationCreateBoardCommentArgs>(CREATE_COMMENT);

  return mutation;
};

export const useMutationUpdateComment = (): MutationTuple<
  Pick<IMutation, "updateBoardComment">,
  IMutationUpdateBoardCommentArgs
> => {
  const mutation = useMutation<Pick<IMutation, "updateBoardComment">, IMutationUpdateBoardCommentArgs>(UPDATE_COMMENT);

  return mutation;
};
