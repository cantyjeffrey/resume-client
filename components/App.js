import styled from "styled-components";

const Container = styled.main`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  letter-spacing: 0;
  font-weight: 400;
  font-style: normal;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "liga" on;
  -webkit-font-smoothing: antialiased;
  color: rgba(0, 0, 0, 0.84);
  font-size: 16px;
  line-height: 24px;
`;

export default ({ children }) => <Container>{children}</Container>;
