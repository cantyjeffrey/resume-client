// @flow

import React from "react";
import { shallow, render } from "enzyme";
import Body from "./index";

describe("<Body />", () => {
  it("should match existing snapshot", () => {
    expect(shallow(<Body />)).toMatchSnapshot();
  });

  // it("should render to static HTML", () => {
  //   expect(render(<Body />).text()).toEqual("");
  // });
});
