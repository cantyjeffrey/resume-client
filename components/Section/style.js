// @flow

import styled from "styled-components";
import { Caption } from "../Typography";

export const Wrapper = styled.div`
  grid-column: ${props => (props.span ? `span ${props.span}` : "span 1")};
`;
export const Title = Caption.extend`
  margin-bottom: 1rem;
`;

export default {};
