import gql from "graphql-tag";

const ADD_CLAIM_MUTATION = gql`
  mutation addClaim($input: ClaimInput!) {
    addClaim(input: $input) {
      success
      message
      claim {
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
    }
  }
`;

const AMEND_CLAIM_MUTATION = gql`
  mutation amendClaim($input: ClaimAmendInput!, $id: ID!) {
    amendClaim(input: $input, id: $id) {
      success
      message
      claim {
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
    }
  }
`;

const GET_SINGLE_CLAIM = gql`
  query getClaim($id: ID!) {
    getClaim(id: $id) {
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
  }
`;

const GET_ALL_CLAIMS = gql`
  query getAllClaims {
    getAllClaims {
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
  }
`;

export {
  ADD_CLAIM_MUTATION,
  AMEND_CLAIM_MUTATION,
  GET_SINGLE_CLAIM,
  GET_ALL_CLAIMS,
};
