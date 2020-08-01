import React, { useMemo } from "react";
import { useQuery } from "@apollo/client";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { isLoggedInVariable, isAuthenticated } from "./Apollo";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import { NoMatch } from "./Components";

import { AuthGql } from "./Gql";

// receives component as Components and any other stuff as props
// redirect to signin if the user is not authenticated
const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  const isLoggedIn = useMemo(() => isLoggedInVariable(isAuthenticated(token)), [
    token,
  ]);

  return (
    <Route
      {...rest}
      render={() => {
        return isLoggedIn ? <Component /> : <Redirect to="/signin" />;
      }}
    />
  );
};

// For public routes, redirect to dashboard if the user is authenticated
const PublicRoutes = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  const isLoggedIn = useMemo(() => isLoggedInVariable(isAuthenticated(token)), [
    token,
  ]);

  return (
    <Route
      {...rest}
      render={() => (isLoggedIn ? <Redirect to="/" /> : <Component />)}
    />
  );
};

const Routes = () => {
  const { data } = useQuery(AuthGql.IS_USER_LOGGED_IN);

  return (
    <Router>
      <Switch>
        <PublicRoutes path="/signin" component={SignIn} />

        <PublicRoutes path="/signup" component={SignUp} />

        <PrivateRoute path="/" component={Dashboard} />

        {/* Placed at the bottom to match any route that need auth */}
        <Route
          path="/"
          render={() =>
            data.isLoggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />
          }
        />

        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default Routes;
