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

export default { Wrapper };
