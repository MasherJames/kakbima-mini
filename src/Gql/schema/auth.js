import { gql } from "@apollo/client";

const USER_FIELDS = gql`
  fragment UserFields on User {
    id
    firstName
    lastname
    email
    phoneNumber
    createdAt
    updatedAt
  }
`;

const SIGN_UP_MUTATION = gql`
  mutation registerUser($input: UserInput!) {
    registerUser(input: $input) {
      success
      message
      user {
        ...UserFields
      }
    }
  }
  ${USER_FIELDS}
`;

const SIGN_IN_MUTATION = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      success
      message
      token
      user {
        ...UserFields
      }
    }
  }
  ${USER_FIELDS}
`;

const GET_SINGLE_USER = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      ...UserFields
    }
  }
  ${USER_FIELDS}
`;

const IS_USER_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export {
  SIGN_UP_MUTATION,
  SIGN_IN_MUTATION,
  GET_SINGLE_USER,
  IS_USER_LOGGED_IN,
};
