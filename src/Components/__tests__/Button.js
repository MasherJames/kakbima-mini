import React from "react";
import { render } from "../../Utils/Tests/test-utils";

import { Button } from "..";

it("Renders button without error", () => {
  const onClick = jest.fn();
  render(<Button type="button" text="button" click={onClick} />);
});
