import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

export const USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      createdAt
      pickedCount
      useditemAddress {
        zipcode
        address
      }
    }
  }
`;

export const useQueryFetchUsedItem = (variables: IQueryFetchUseditemArgs) => {
  const query = useQuery<Pick<IQuery, "fetchUseditem">>(USED_ITEM, {
    variables,
  });
  return query;
};
