import { gql } from "@apollo/client";

const CLAIM_FIELDS = gql`
  fragment ClaimFields on Claim {
    id
    claimNumber
    claimDate
    claimAmount
    benefit
    description
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
`;

const ADD_CLAIM_MUTATION = gql`
  mutation addClaim($input: ClaimInput!) {
    addClaim(input: $input) {
      success
      message
      claim {
        ...ClaimFields
      }
    }
  }
  ${CLAIM_FIELDS}
`;

const AMEND_CLAIM_MUTATION = gql`
  mutation amendClaim($input: ClaimAmendInput!, $id: ID!) {
    amendClaim(input: $input, id: $id) {
      success
      message
      claim {
        ...ClaimFields
      }
    }
  }
  ${CLAIM_FIELDS}
`;

const GET_SINGLE_CLAIM = gql`
  query getClaim($id: ID!) {
    getClaim(id: $id) {
      ...ClaimFields
    }
  }
  ${CLAIM_FIELDS}
`;

const GET_ALL_CLAIMS = gql`
  query getAllClaims {
    getAllClaims {
      ...ClaimFields
    }
  }
  ${CLAIM_FIELDS}
`;

export {
  ADD_CLAIM_MUTATION,
  AMEND_CLAIM_MUTATION,
  GET_SINGLE_CLAIM,
  GET_ALL_CLAIMS,
};
