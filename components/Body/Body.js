// @flow

import React from "react";
import { Wrapper, Column } from "./style";
import Section from "../Section";
import Summary from "../Summary";
import Capabilities from "../Capabilities";
import Interests from "../Interests";
import References from "../References";
import Projects from "../Projects";

const Body = () => (
  <Wrapper>
    <Column>
      <Summary />
    </Column>
    <Column>
      <Capabilities />
      <Interests />
      <References />
    </Column>
    <Column>
      <Projects />
    </Column>
  </Wrapper>
);

export default Body;
