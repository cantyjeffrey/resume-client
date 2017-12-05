// @flow

import styled from "styled-components";

export const Wrapper = styled.div``;
export const List = styled.ul`
  margin: 0 0 0.25rem 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  margin: 0;
  padding: 0;
  flex: none;

  &::after {
    content: ",";
    margin-right: 0.125rem;
  }
  &:last-of-type {
    &::after {
      content: "";
      margin-right: 0;
    }
  }
  &:first-of-type {
    &::before {
      content: "•";
      padding-right: 0.25rem;
      margin-left: -0.5rem;
    }
  }
`;

export default {};
