// @flow

import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 6rem;
  display: flex;
  flex: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin-bottom: 2rem;
  color: #4e4e4e;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  white-space: pre-wrap;
`;

export default {};
