import gql from "graphql-tag";

const SIGN_UP_MUTATION = gql`
  mutation registerUser($input: UserInput!) {
    registerUser(input: $input) {
      success
      message
      user {
        id
        firstName
        lastname
        email
        phoneNumber
        createdAt
        updatedAt
      }
    }
  }
`;

const SIGN_IN_MUTATION = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      success
      message
      token
      user {
        id
        firstName
        lastname
        email
        phoneNumber
        createdAt
        updatedAt
      }
    }
  }
`;

const GET_SINGLE_USER = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastname
      email
      phoneNumber
      createdAt
      updatedAt
    }
  }
`;

const IS_USER_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client(always: true)
  }
`;

export {
  SIGN_UP_MUTATION,
  SIGN_IN_MUTATION,
  GET_SINGLE_USER,
  IS_USER_LOGGED_IN,
};
