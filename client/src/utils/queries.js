import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query {
    movies {
      imdbID
      title
      year
    }
  }
`;

// export
