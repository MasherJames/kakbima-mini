import { gql } from "@apollo/client";

const POLICY_FIELDS = gql`
  fragment PolicyFields on Policy {
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
  }
`;

const ADD_POLICY_MUTATION = gql`
  mutation addPolicy($input: PolicyInput!) {
    addPolicy(input: $input) {
      success
      message
      policy {
        ...PolicyFields
      }
    }
  }
  ${POLICY_FIELDS}
`;

const AMEND_POLICY_MUTATION = gql`
  mutation amendPolicy($input: PolicyAmendInput!, $id: ID!) {
    amendPolicy(input: $input, id: $id) {
      success
      message
      policy {
        ...PolicyFields
      }
    }
  }
  ${POLICY_FIELDS}
`;

const GET_SINGLE_POLICY = gql`
  query getPolicy($id: ID!) {
    getPolicy(id: $id) {
      ...PolicyFields
    }
  }
  ${POLICY_FIELDS}
`;

const GET_ALL_POLICIES = gql`
  query getAllPolicies {
    getAllPolicies {
      ...PolicyFields
    }
  }
  ${POLICY_FIELDS}
`;

export {
  ADD_POLICY_MUTATION,
  AMEND_POLICY_MUTATION,
  GET_SINGLE_POLICY,
  GET_ALL_POLICIES,
};
