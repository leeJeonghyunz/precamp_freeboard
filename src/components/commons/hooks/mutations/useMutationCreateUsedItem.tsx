import { gql, useMutation } from "@apollo/client";
import type { MutationTuple } from "@apollo/client";
import type { IMutation, IMutationCreateUseditemArgs } from "../../../../commons/types/generated/types";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      remarks
      contents
      price
    }
  }
`;
export const useMutationCreateUsedItem = (): MutationTuple<
  Pick<IMutation, "createUseditem">,
  IMutationCreateUseditemArgs
> => {
  const mutation = useMutation<Pick<IMutation, "createUseditem">, IMutationCreateUseditemArgs>(CREATE_USED_ITEM);

  return mutation;
};
