// @flow

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  padding-bottom: 6rem;
  position: relative;
`;

export const Tagline = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2rem;
  font-weight: 600;
  &::before {
    background-color: currentColor;
    opacity: 0.54;
    content: "";
    width: 2rem;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
  }
  & [role="img"] {
    margin-left: 0.25rem;
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  grid-column: 4;
  @media print {
    display: none !important;
  }
`;

export default {};
