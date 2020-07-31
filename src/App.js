import React from "react";
import { ApolloClient, ApolloProvider } from "@apollo/client";

import { cache, link } from "./Apollo";
import { typeDefs } from "./Gql";
import Routes from "./routes";

// Create an instance of apollo client with the initialized cache and link
const client = new ApolloClient({
  cache,
  link,
  typeDefs,
  resolvers: {},
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
};

export default App;
