// @flow

import React from "react";
import { shallow, render } from "enzyme";
import Header from "./index";

describe("<Header />", () => {
  it("should match existing snapshot", () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });

  // it("should render to static HTML", () => {
  //   expect(render(<Header />).text()).toEqual("");
  // });
});
