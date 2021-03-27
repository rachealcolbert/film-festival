import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query {
    me {
      _id
      username
      email
      savedMovies {
        movieId
        title
        year
        image
      }
    }
    
  }
`;
export const GET_ME = gql`
  query {
    me {
      _id
      username
      email
      savedMovies {
        movieId
        title
        year
        image
      }
    }
  }
`;


// export
