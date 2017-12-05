// @flow

import React from "react";
import { shallow, render } from "enzyme";
import Interests from "./index";

describe("<Interests />", () => {
  it("should match existing snapshot", () => {
    expect(shallow(<Interests />)).toMatchSnapshot();
  });

  // it("should render to static HTML", () => {
  //   expect(render(<Interests />).text()).toEqual("");
  // });
});
