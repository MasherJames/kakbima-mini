import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
// jest-dom adds custom jest matchers for asserting on DOM nodes.
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { MockedProvider } from "@apollo/client/testing";

const customRender = (ui, { mocks } = {}) => {
  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Router>{ui}</Router>
    </MockedProvider>
  );
};
export * from "@testing-library/react";
export {
  customRender as render,
  act,
  userEvent,
  screen,
  waitForElementToBeRemoved,
};
