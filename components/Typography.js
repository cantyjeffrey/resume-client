// @flow

import styled from "styled-components";

export const Emphasis = styled.p`
  color: #4e4e4e;
  margin: 0;
  text-decoration: underline;
`;

export const Link = styled.a`
  display: inline-flex;
  text-decoration: none;
  color: inherit;
  padding-bottom: 1px;
  border-bottom: 1px solid #f0f0f0;
  transition: border 150ms linear;
  -webkit-tap-highight-color: transparent;
  cursor: pointer;
  user-select: none;
  & > * {
    margin: 0;
    line-height: 1;
  }
  &:hover {
    border-color: #1d2329;
  }
`;

export const Title = styled.h4`
  margin: 0;
  font-style: normal;
  font-weight: 600;
  color: #000;
`;

export const Caption = styled.h6`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.125em;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 4px;
  line-height: 1;
`;

export default {};
