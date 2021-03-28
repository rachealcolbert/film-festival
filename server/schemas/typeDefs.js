const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedMovies: [Movie]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Movie {
    movieId: String
    title: String
    year: Int
    image: String
  }
  input movieInput {
    movieId: String
    title: String
    year: String
    image: String
  }
  type Query {
    movies: [Movie!]!
    me: User
  }
  type Mutation {
    addUser(email: String!, username: String!, password: String!): Auth
    login(email: String!, password: String!, password: String!): Auth
    saveMovie(input: movieInput): User
  }
`;

module.exports = typeDefs;
