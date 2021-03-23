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
  }
`;

module.exports = typeDefs;
