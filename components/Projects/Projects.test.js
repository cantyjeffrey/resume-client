// @flow

import React from "react";
import { shallow, render } from "enzyme";
import Projects from "./index";

describe("<Projects />", () => {
  it("should match existing snapshot", () => {
    expect(shallow(<Projects />)).toMatchSnapshot();
  });

  // it("should render to static HTML", () => {
  //   expect(render(<Projects />).text()).toEqual("");
  // });
});
