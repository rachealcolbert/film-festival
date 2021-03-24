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
  type MovieId {
    trakt: Int
    slug: String
    tvdb: Int
    imdb: String
    tmdb: Int
  }
  type Movie {
    title: String
    year: Int
    ids: MovieId
  }
  type Query {
    movies: [Movie!]!
  }
  type Mutation {
    addUser(email: String!, username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
