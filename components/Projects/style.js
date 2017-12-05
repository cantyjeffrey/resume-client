// @flow

import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: dense;
  grid-auto-rows: auto;
  grid-gap: 0 1rem;
`;

export default {};
