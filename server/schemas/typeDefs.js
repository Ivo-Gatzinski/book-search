const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID
    bookId: String!
    authors: [String]
    title: String
    description: String
    image: String
    link: String
  }

  input BookInput {
    bookId: String!
    authors: [String]
    title: String
    description: String
    image: String
    link: String
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
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
    saveBook(newbook: BookInput): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
