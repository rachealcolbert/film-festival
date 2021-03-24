import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query {
    movies {
      title
      year
    }
  }
`;

// export
