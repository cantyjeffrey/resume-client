// @flow

import React from "react";
import { shallow, render } from "enzyme";
import Footer from "./index";

describe("<Footer />", () => {
  it("should match existing snapshot", () => {
    expect(shallow(<Footer />)).toMatchSnapshot();
  });

  // it("should render to static HTML", () => {
  //   expect(render(<Footer />).text()).toEqual("");
  // });
});
