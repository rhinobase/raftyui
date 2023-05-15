import { render } from "@testing-library/react";

import ComponentsUpload from "./upload";

describe("ComponentsUpload", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ComponentsUpload />);
    expect(baseElement).toBeTruthy();
  });
});
