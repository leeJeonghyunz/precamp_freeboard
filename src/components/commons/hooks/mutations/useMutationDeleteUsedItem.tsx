import { gql, useMutation } from "@apollo/client";
import type { MutationTuple } from "@apollo/client";
import type { IMutation, IMutationDeleteUseditemArgs } from "../../../../commons/types/generated/types";

export const DELETE_USEDITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const useMutationDeleteUsedItem = (): MutationTuple<
  Pick<IMutation, "deleteUseditem">,
  IMutationDeleteUseditemArgs
> => {
  const mutation = useMutation<Pick<IMutation, "deleteUseditem">, IMutationDeleteUseditemArgs>(DELETE_USEDITEM);

  return mutation;
};
