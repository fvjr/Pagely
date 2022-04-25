const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: id
    authors: [String!]
    description: String!
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: String
    user(_id: String, User: ID!)
  }

  type Query {
    me(user)
  }

  type Mutation {
    login:
  }
`;
