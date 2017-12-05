// @flow

import React from "react";
import { shallow, render } from "enzyme";
import App from "./index";

describe("<App />", () => {
  it("should match existing snapshot", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });

  it("should render to static HTML", () => {
    expect(render(<App />).text()).toEqual("Application");
  });
});
