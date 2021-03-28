import gql from 'graphql-tag';

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
mutation addMovie($movies: String!, $title: String!, $year: String!) {
  addMovie(movies: $movies, title: $title, year: $year) {
    token
    user {
      movies {
        title
        year
      }
    }
  }
}
`;