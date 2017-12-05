// @flow

import React from "react";
import { shallow, render } from "enzyme";
import Capabilities from "./index";

describe("<Capabilities />", () => {
  it("should match existing snapshot", () => {
    expect(shallow(<Capabilities />)).toMatchSnapshot();
  });

  // it("should render to static HTML", () => {
  //   expect(render(<Capabilities />).text()).toEqual("");
  // });
});
