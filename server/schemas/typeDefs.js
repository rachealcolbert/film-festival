const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Auth {
    token: ID!
    user: User
},
type Movie {
  movieId: String
  title: String
  year: String
  image: String
},
input movieInput {
  movieId: String
  title: String
  image: String
  year: String
}
type User {
  _id: ID
  username: String
  email: String
  movieCount: Int
  savedMovies: [Movie]
},
type Query {
  me: User
},
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveMovie(input: movieInput): User
  removeMovie(movieId: String!): User
}
`;

module.exports = typeDefs;