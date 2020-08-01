import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { isLoggedInVariable } from "../../Apollo";
import { AuthGql } from "../../Gql";
import useMutation from "../../Utils/CustomHooks/Services/useMutation";
import useForm from "../../Utils/CustomHooks/useForm";
import {
  Button,
  InputField,
  Notification,
  LoadingButton,
} from "../../Components";
import Lock from "../../Assets/Icons/lock.svg";
import "./index.css";

const SignIn = () => {
  // error state
  const [error, setError] = useState("");

  // instantiate the history hook
  const history = useHistory();

  // Form initial state
  const initialState = {
    email: "",
    password: "",
  };

  // Form custom hook that handles on-change and on-submit
  const { handleChange, handleSubmit, inputValues } = useForm(
    signInUser,
    initialState
  );

  // function to be executed on error
  const handleOnError = (error) => {
    // show side bar error
    setError(error);
  };

  // function to be executed on success
  const handleOnSuccess = ({ login }) => {
    // store the token to local storage
    localStorage.setItem("AUTH_TOKEN", login.token);
    // set login to true
    isLoggedInVariable(true);
    // redirect to sign in
    history.push("/");
  };

  // close side bar function by setting error to nul
  const closeSideNotification = () => {
    setError(null);
  };

  // Mutation custom hook to trigger a mutation
  const { mutateFunc, loading } = useMutation(
    AuthGql.SIGN_IN_MUTATION,
    inputValues,
    handleOnSuccess,
    handleOnError
  );

  function signInUser() {
    mutateFunc();
  }

  return (
    <main className="sign-in-main">
      {error && (
        <Notification
          message={error}
          closeSideNotification={closeSideNotification}
        />
      )}
      <section className="sign-in-container">
        <article className="sign-in-form-container">
          <div className="sign-in-icon">
            <img src={Lock} alt="lock" />
          </div>
          <h1 className="sign-in-text">Sign in</h1>
          <form
            className="sign-in-form"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <InputField
              normal={true}
              type="text"
              name="email"
              value={inputValues.email}
              onChange={handleChange}
              size="full"
              labelText="Email"
            />
            <InputField
              normal={true}
              type="password"
              name="password"
              value={inputValues.password}
              onChange={handleChange}
              size="full"
              labelText="Password"
            />
            {loading ? (
              <LoadingButton />
            ) : (
              <Button text="SIGN IN" type="submit" />
            )}
          </form>
          <Link className="sign-in-link" to="/signup">
            Dont have an account? Sign Up
          </Link>
        </article>
      </section>
      <div className="sign-in-bg-img"></div>
    </main>
  );
};

export default SignIn;
