// @flow

import React from "react";
import { shallow, render } from "enzyme";
import Summary from "./index";

describe("<Summary />", () => {
  it("should match existing snapshot", () => {
    expect(shallow(<Summary />)).toMatchSnapshot();
  });

  // it("should render to static HTML", () => {
  //   expect(render(<Summary />).text()).toEqual("");
  // });
});
