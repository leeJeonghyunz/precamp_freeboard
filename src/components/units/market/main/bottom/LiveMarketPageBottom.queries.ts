import { gql } from "@apollo/client";

export const USED_ITEMS = gql`
  query {
    fetchUseditems {
      _id
      name
      contents
      price
      images
    }
  }
`;
