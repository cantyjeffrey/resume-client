// @flow

import styled from "styled-components";
import { Emphasis } from "../Typography";

export const Wrapper = styled.div`
  padding: 0;
  grid-column: ${props => (props.isCurrent ? "span 2" : "span 1")};
  ${props =>
    props.isCurrent &&
    `
    grid-row-start: 1;
    margin-bottom: 1rem;
  `};
`;

export const Header = styled.dt`
  margin-bottom: 1rem;
`;

export const Summary = styled.dd`
  margin: 0;
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MetaDateRange = Emphasis.extend``;
export const MetaDate = styled.time``;
export const Content = styled.p``;

export const TagList = styled.div`
  margin: 0 0 1rem;
  display: inline-flex;
  flex-wrap: wrap;
`;

export const Tag = styled.a`
  text-decoration: none;
  margin: 0.125rem;
  flex: none;
  font-size: 12px;
  line-height: 1;
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 0.375rem 0.5rem;
  border-radius: 3px;
  letter-spacing: -0.02em;
  user-select: none;
  cursor: pointer;
`;

export default { Wrapper };
