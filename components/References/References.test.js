// @flow

import React from "react";
import { shallow, render } from "enzyme";
import References from "./index";

describe("<References />", () => {
  it("should match existing snapshot", () => {
    expect(shallow(<References />)).toMatchSnapshot();
  });

  // it("should render to static HTML", () => {
  //   expect(render(<References />).text()).toEqual("");
  // });
});
