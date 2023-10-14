import { gql } from "@apollo/client";

export const USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      contents
      price
      images
    }
  }
`;

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
