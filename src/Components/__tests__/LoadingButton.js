import React from "react";
import { render } from "../../Utils/Tests/test-utils";

import { LoadingButton } from "..";

it("Renders loading button without error", () => {
  render(<LoadingButton />);
});
