import { InMemoryCache } from "@apollo/client";
// Functions to be triggered in type policies
import { isAuthenticated } from "./TypePolicies/Auth";

// initialize the cache
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVariable();
          },
        },
      },
    },
  },
});

// Reactive variables
const isLoggedInVariable = cache.makeVar(isAuthenticated());

export { cache, isLoggedInVariable };
