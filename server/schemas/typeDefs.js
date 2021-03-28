const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    movieCount: Int
    savedMovies: [Movie]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Movie {
    movieID: ID
    title: String
    year: Int
  }
  type Query {
    movies: [Movie!]!
    me: User
    user(username: String!): User
    savedMovies(username: String): [Movie]
    movie(title: String!): Movie
  }
  type Mutation {
    addUser(email: String!, username: String!, password: String!): Auth
    login(email: String!, password: String!, password: String!): Auth
    addMovie(movieID: ID!, title: String!, year: Int!): Movie
    removeMovie(movieId: ID!): Movie
  }
`;

module.exports = typeDefs;
