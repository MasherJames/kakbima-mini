import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const NoMatch = () => {
  const location = useLocation();
  const history = useHistory();

  const goToSignIn = () => {
    history.push("/signin");
  };

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
        <a href="#/" onClick={goToSignIn}>
          Go to Sign In
        </a>
      </h3>
    </div>
  );
};

export default NoMatch;
