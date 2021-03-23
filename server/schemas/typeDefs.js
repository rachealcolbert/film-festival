const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
}

type Movie {
  title: String
  year: Int
  _ids {
    tmdb
  }
  
}

type Auth {
    token: ID!
    user: User
  }
`

module.exports = typeDefs;