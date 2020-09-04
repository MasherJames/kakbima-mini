import React from "react";
import { render } from "../../Utils/Tests/test-utils";

import { DashboardHome } from "..";

it("Should render without error", () => {
  render(<DashboardHome />);
});
