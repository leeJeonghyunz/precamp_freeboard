import { gql, useMutation } from "@apollo/client";
import type { MutationTuple } from "@apollo/client";
import type { IMutation, IMutationUpdateUseditemArgs } from "../../../../commons/types/generated/types";

export const UPDATE_USEDITEM = gql`
  mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!, $useditemId: ID!) {
    updateUseditem(updateUseditemInput: $updateUseditemInput, useditemId: $useditemId) {
      _id
    }
  }
`;

export const useMutationUpdateUsedItem = (): MutationTuple<
  Pick<IMutation, "updateUseditem">,
  IMutationUpdateUseditemArgs
> => {
  const mutation = useMutation<Pick<IMutation, "updateUseditem">, IMutationUpdateUseditemArgs>(UPDATE_USEDITEM);

  return mutation;
};
