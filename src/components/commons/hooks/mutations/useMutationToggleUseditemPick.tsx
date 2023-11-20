import { gql, useMutation } from "@apollo/client";
import type { MutationTuple } from "@apollo/client";
import type { IMutation, IMutationToggleUseditemPickArgs } from "../../../../commons/types/generated/types";

export const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;
export const useMutationToggleUsedItemPick = (): MutationTuple<
  Pick<IMutation, "toggleUseditemPick">,
  IMutationToggleUseditemPickArgs
> => {
  const mutation = useMutation<Pick<IMutation, "toggleUseditemPick">, IMutationToggleUseditemPickArgs>(
    TOGGLE_USED_ITEM_PICK,
  );

  return mutation;
};
