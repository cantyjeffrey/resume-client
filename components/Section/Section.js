// @flow

import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Title } from "./style";

const Section = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;
