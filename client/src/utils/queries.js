import gql from 'graphql-tag'

export const GET_ME = gql`
query {
  me {
    _id
    username
    email
    movieCount
    savedMovies {
        title
        year
        director 
        actors
        poster
    }
  }
}
`;
// export
