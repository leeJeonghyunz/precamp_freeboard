import { gql, useMutation } from "@apollo/client";
import type { ApolloCache, DefaultContext, MutationTuple, OperationVariables } from "@apollo/client";
import type { IMutation } from "../../../../commons/types/generated/types";

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export const useMutationLogoutUser = (): MutationTuple<
  Pick<IMutation, "logoutUser">,
  OperationVariables,
  DefaultContext,
  ApolloCache<any>
> => {
  const mutation = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  return mutation;
};
