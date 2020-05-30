import React from "react";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { ApolloProvider } from "@apollo/react-hooks";

import { typeDefs } from "./Gql";
import Routes from "./routes";

// initialize the cache
const cache = new InMemoryCache();

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

const httpLink = createHttpLink({
  uri: "https://kakbima-mini.herokuapp.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("AUTH_TOKEN");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
});

const link = ApolloLink.from([erroLink, authLink, httpLink]);
// Create an instance of apollo client with the initialized cache and link
const client = new ApolloClient({
  cache,
  link,
  typeDefs,
});

// initial state to the cache
const writeInitialData = () => {
  const data = {
    isLoggedIn: !!localStorage.getItem("AUTH_TOKEN"),
  };
  cache.writeData({ data });
};

writeInitialData();

// reset the store
client.onResetStore(writeInitialData());

if (!localStorage.getItem("AUTH_TOKEN")) {
  // client.resetStore()
}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
};

export default App;
