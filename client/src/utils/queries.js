import gql from "graphql-tag";

export const GET_MOVIES = gql`
  query {
    movies {
      title
      year
    }
  }
`;

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      movieCount
      savedMovies
    }
  }
`;
