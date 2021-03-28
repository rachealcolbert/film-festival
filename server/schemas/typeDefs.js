const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Movie {
    title: String
    year: Int
  }
  type Query {
    movies: [Movie!]!
    me: User
  }
  type Mutation {
    addUser(email: String!, username: String!, password: String!): Auth
    login(email: String!, password: String!, password: String!): Auth
    addMovie(title: String!, year: Int!): Movie
    removeMovie(title: STring!): Movie
  }
`;

module.exports = typeDefs;
