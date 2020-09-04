import React from "react";

import { render, screen } from "../../Utils/Tests/test-utils";
import DashBoard from "../Dashboard";

it("Should Render Dashboard", () => {
  render(<DashBoard />);

  expect(screen.getAllByText(/Dashboard/)).toHaveLength(2);
  expect(screen.getByText("Policies")).toBeInTheDocument();
  expect(screen.getByText("Total Claims")).toBeInTheDocument();
});
