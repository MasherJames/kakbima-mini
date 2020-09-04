import React from "react";

import {
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
} from "../../Utils/Tests/test-utils";
import SignIn from "../SignIn";
import { SIGN_IN_MUTATION } from "../../Gql/schema/auth";
import { MockFunc, user } from "../../__mocks__";

describe("Login page", () => {
  it("Should render Sign In", () => {
    render(<SignIn />);

    expect(screen.getByText(/Sign in/)).toBeInTheDocument();
    expect(screen.getByText(/Dont have an account/)).toBeInTheDocument();
  });
  it("Should test sign in process", async () => {
    const email = "test@email.com";
    const password = "MyPassword12";

    render(<SignIn />, {
      mocks: MockFunc({
        query: SIGN_IN_MUTATION,
        variables: { email, password },
        responseData: { user },
      }),
    });

    const signInBtn = screen.getByRole("button", { name: /SIGN IN/ });

    expect(signInBtn).toBeDisabled();
    expect(screen.queryByText(/Loading .../)).not.toBeInTheDocument();

    userEvent.type(screen.getByLabelText(/Email/), email);
    userEvent.type(screen.getByLabelText(/Password/), password);

    expect(signInBtn).toBeEnabled();

    userEvent.click(signInBtn);

    expect(screen.getByText(/Loading/)).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByText(/Loading/));
  });
});
