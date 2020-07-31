import { HttpLink, ApolloLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// Initialize link
const httpLink = new HttpLink({
  uri: "https://kakbima-mini.herokuapp.com/graphql",
});

/*
Apollo Link - customize the flow of data between Client and server.
Request Handler
  Operation - object with an operation passed through the link
  Forward - function for executing the next link in a chain except the terminating link
  Terminating link - last link in a composed chain, send req to the server and returns an ExecutionResult
 */
const authMiddleware = new ApolloLink((operation, forward) => {
  // get the authentication token from local storage if it exists
  // and sets an Authorization header to each req with the token,

  operation.setContext({
    headers: {
      authorization: localStorage.getItem("AUTH_TOKEN") || "",
    },
  });

  return forward(operation);
});

// handle server errors, network errors, and GraphQL errors
// log in dev, send to a logger service i.e sentry in prod
const erroLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([erroLink, authMiddleware, httpLink]);

export { link };
