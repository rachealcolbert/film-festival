import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query {
    movies {
      title
      year
      ids {
        trakt
        slug
        tvdb
        imdb
        tmdb
      }
    }
  }
`;

// export
