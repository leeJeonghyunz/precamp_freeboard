import { gql, useQuery } from "@apollo/client";
import type { QueryResult } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

export const USED_ITEMS_OF_THE_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      name
      contents
      price
      images
    }
  }
`;

export const useQueryFetchUsedItemsOfTheBest = (): QueryResult<Pick<IQuery, "fetchUseditemsOfTheBest">> => {
  const query = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(USED_ITEMS_OF_THE_BEST);
  return query;
};
