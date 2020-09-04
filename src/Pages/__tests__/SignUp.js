import React from "react";

import {
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
} from "../../Utils/Tests/test-utils";
import SignUp from "../SignUp";
import { SIGN_UP_MUTATION } from "../../Gql/schema/auth";
import { MockFunc, user } from "../../__mocks__";

describe("Sign Up flow", () => {
  it("Should render sign up", () => {
    render(<SignUp />);

    expect(screen.getByText(/Sign up/)).toBeInTheDocument();
    expect(screen.getByText(/Already have an account/)).toBeInTheDocument();
  });

  it("Should test sign up flow", async () => {
    const firstName = "firstName";
    const lastName = "lstName";
    const phoneNumber = "phone";
    const email = "test@email.com";
    const password = "MyPassword12";

    render(<SignUp />, {
      mocks: MockFunc({
        query: SIGN_UP_MUTATION,
        variables: { firstName, lastName, phoneNumber, email, password },
        responseData: { user },
      }),
    });

    const signUpBtn = screen.getByRole("button", { name: /SIGN UP/ });

    expect(signUpBtn).toBeDisabled();
    expect(screen.queryByText(/Loading .../)).not.toBeInTheDocument();

    userEvent.type(screen.getByLabelText(/First Name/), firstName);
    userEvent.type(screen.getByLabelText(/Last name/), lastName);
    userEvent.type(screen.getByLabelText(/Phone Number/), phoneNumber);
    userEvent.type(screen.getByLabelText(/Email/), email);
    userEvent.type(screen.getByLabelText(/Password/), password);

    screen.debug();

    expect(signUpBtn).toBeEnabled();

    userEvent.click(signUpBtn);

    expect(screen.getByText(/Loading/)).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByText(/Loading/));
  });
});
