import { gql, useMutation } from "@apollo/client";
import type { MutationTuple } from "@apollo/client";
import type { IMutation, IMutationLoginUserArgs } from "../../../../commons/types/generated/types";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const useMutationLoginUser = (): MutationTuple<Pick<IMutation, "loginUser">, IMutationLoginUserArgs> => {
  const mutation = useMutation<Pick<IMutation, "loginUser">, IMutationLoginUserArgs>(LOGIN_USER);

  return mutation;
};
