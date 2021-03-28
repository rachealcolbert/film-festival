import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation addMovie($title: String!, $year: Int!) {
    addMovie(title: $title, year: $year) {
      title
      year
    }
  }
`;

export const REMOVE_MOVIE = gql`
  mutation removeMovie($title: String!, $year: Int!) {
    removeMovie(title: $title, year: $year) {
      title
      year
    }
  }
`;
