import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthGql } from "../../Gql";
import {
  Button,
  LoadingButton,
  InputField,
  Footer,
  Notification,
} from "../../Components";
import { useForm, useMutation } from "../../Utils";
import Lock from "../../Assets/Icons/lock.svg";
import "./index.css";

const SignUp = () => {
  // error state
  const [error, setError] = useState("");
  // instantiate the navigation hook
  const history = useHistory();

  // Form initial state
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  };

  // Form custom hook that handles on-change and on-submit
  const {
    handleChange,
    handlePhoneChange,
    handleSubmit,
    inputValues,
  } = useForm(signUpNewUser, initialState);

  // function to be executed on error
  const handleOnError = (error) => {
    // show side bar error
    setError(error);
  };

  // function to be executed on success
  const handleOnSuccess = (data) => {
    // redirect to sign in
    history.push("/signin");
  };

  // close side bar function by setting error to nul
  const closeSideNotification = () => {
    setError(null);
  };

  // Mutation custom hook to trigger a mutation
  const { mutateFunc, loading } = useMutation(
    AuthGql.SIGN_UP_MUTATION,
    inputValues,
    handleOnSuccess,
    handleOnError
  );

  function signUpNewUser() {
    mutateFunc();
  }

  return (
    <>
      <section className="sign-up-section">
        {error && (
          <Notification
            message={error}
            closeSideNotification={closeSideNotification}
          />
        )}
        <div className="sign-up-icon">
          <img src={Lock} alt="lock" />
        </div>
        <h1 className="sign-up-text">Sign up</h1>
        <form
          className="sign-up-form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <InputField
            normal={true}
            type="text"
            name="firstName"
            value={inputValues.firstName}
            onChange={handleChange}
            size="half"
            labelText="First Name"
          />
          <InputField
            normal={true}
            type="text"
            name="lastName"
            value={inputValues.lastName}
            onChange={handleChange}
            size="half"
            labelText="Last name"
          />
          <InputField
            type="phone"
            name="phoneNumber"
            value={inputValues.phoneNumber}
            onChange={handlePhoneChange}
            size="full"
            labelText="Phone Number"
            phone={true}
          />
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
            <Button text="SIGN UP" type="submit" />
          )}
        </form>
        <Link className="sign-in-link" to="/signin">
          Already have an account? Sign in
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
