import React from "react";
import { useQuery, useApolloClient } from "@apollo/react-hooks";
import { Router, Redirect, useLocation } from "@reach/router";

import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import { DashboardHome, Policies, Claims } from "./Components";

import { AuthResolvers, AuthGql } from "./Gql";

// receives component as Components and any other stuff as props
// redirect to signin if the user is not authenticated
const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();

  // Instantiate a client
  const client = useApolloClient();
  // add the resolver
  client.addResolvers(AuthResolvers.resolveIsAuthenticated);
  // Query for the user to determine if isAuthenticated
  const { data } = useQuery(AuthGql.IS_USER_LOGGED_IN);

  return data.isLoggedIn ? (
    <Component {...rest} />
  ) : (
    <Redirect from={location.pathname} to="/signin" noThrow />
  );
};

// For public routes, redirect to dashboard if the user is authenticated
const PublicRoutes = ({ component: Component, ...rest }) => {
  const location = useLocation();
  // Query for the user to determine if isAuthenticated
  const { data } = useQuery(AuthGql.IS_USER_LOGGED_IN);

  return data.isLoggedIn ? (
    <Redirect from={location.pathname} to="/dashboard" noThrow />
  ) : (
    <Component {...rest} />
  );
};

const Routes = () => {
  return (
    <Router>
      <Redirect from="/" to="/signin" noThrow />
      <PublicRoutes component={SignIn} path="/signin" />
      {/* <SignIn path="/signin" />*/}
      <PublicRoutes component={SignUp} path="/signup" />
      <PrivateRoute component={Dashboard} path="/">
        <PrivateRoute component={DashboardHome} path="/dashboard" />
        <PrivateRoute component={Policies} path="policies" />
        <PrivateRoute component={Claims} path="claims" />
      </PrivateRoute>
    </Router>
  );
};

export default Routes;
