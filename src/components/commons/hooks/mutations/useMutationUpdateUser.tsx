import { gql, useMutation } from "@apollo/client";
import type { MutationTuple } from "@apollo/client";
import type { IMutation, IMutationUpdateUserArgs } from "../../../../commons/types/generated/types";

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      name
    }
  }
`;

export const useMutationUpadateUser = (): MutationTuple<Pick<IMutation, "updateUser">, IMutationUpdateUserArgs> => {
  const mutation = useMutation<Pick<IMutation, "updateUser">, IMutationUpdateUserArgs>(UPDATE_USER);

  return mutation;
};
