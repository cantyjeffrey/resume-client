// @flow

import React from "react";
import { shallow, render } from "enzyme";
import Section from "./index";

describe("<Section />", () => {
  it("should match existing snapshot", () => {
    expect(shallow(<Section />)).toMatchSnapshot();
  });

  // it("should render to static HTML", () => {
  //   expect(render(<Section />).text()).toEqual("");
  // });
});
