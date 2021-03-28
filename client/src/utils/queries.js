import gql from "graphql-tag";

export const GET_MOVIES = gql`
  query {
    movies {
      _id
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
