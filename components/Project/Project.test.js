// @flow

import React from "react";
import { shallow, render } from "enzyme";
import Project from "./index";

describe("<Project />", () => {
  it("should match existing snapshot", () => {
    expect(shallow(<Project />)).toMatchSnapshot();
  });

  // it("should render to static HTML", () => {
  //   expect(render(<Project />).text()).toEqual("");
  // });
});
