import gql from "graphql-tag";

const ADD_POLICY_MUTATION = gql`
  mutation addPolicy($input: PolicyInput!) {
    addPolicy(input: $input) {
      success
      message
      policy {
        id
        name
        startDate
        endDate
        benefits {
          isClaimed
          benefit
        }
        premium
        identifier
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
  }
`;

const AMEND_POLICY_MUTATION = gql`
  mutation amendPolicy($input: PolicyAmendInput!, $id: ID!) {
    amendPolicy(input: $input, id: $id) {
      success
      message
      policy {
        id
        name
        startDate
        endDate
        benefits {
          isClaimed
          benefit
        }
        premium
        identifier
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
  }
`;

const GET_SINGLE_POLICY = gql`
  query getPolicy($id: ID!) {
    getPolicy(id: $id) {
      id
      name
      startDate
      endDate
      benefits {
        isClaimed
        benefit
      }
      premium
      identifier
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

const GET_ALL_POLICIES = gql`
  query getAllPolicies {
    getAllPolicies {
      id
      name
      startDate
      endDate
      benefits {
        isClaimed
        benefit
      }
      premium
      identifier
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

export {
  ADD_POLICY_MUTATION,
  AMEND_POLICY_MUTATION,
  GET_SINGLE_POLICY,
  GET_ALL_POLICIES,
};
