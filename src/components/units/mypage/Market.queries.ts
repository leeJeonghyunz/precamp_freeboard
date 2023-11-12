import { gql } from "@apollo/client";

export const FETCH_USEDITEM_ISOLD = gql`
  query fetchUseditemsISold {
    fetchUseditemsISold {
      name
      remarks
      price
      createdAt
    }
  }
`;
