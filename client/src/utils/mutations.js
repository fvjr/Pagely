import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($title: String!) {
    savebook(title: $title) {
      ID
      bookId: ID
      authors: [String]
      description: String
      title: String
      image: String
      link: String
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($title: String!) {
    removeSkill(title: $title) {
      bookId: ID
      authors: [String]
      description: String
      title: String
      image: String
      link: String
    }
  }
`;
