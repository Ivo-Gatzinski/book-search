const { gql } = require('apollo-server-express');

const typeDefs = gql`
# TODO: create book type
  type User {
    _id: ID
    username: String
    email: String
    password: String
    # TODO: savedBooks: [bookSchema]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    # TODO: add fields for save and remove books from user
  }
`;

module.exports = typeDefs;
