import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

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

export const useQueryFetchUsedItemsOfTheBest = () => {
  const query = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    USED_ITEMS_OF_THE_BEST,
  );
  return query;
};
