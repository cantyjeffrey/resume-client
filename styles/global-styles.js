// @flow

/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
import { injectGlobal } from "styled-components";
import { normalize } from "polished";
import "./fonts";

injectGlobal`
  ${normalize()}
  :root {
    box-sizing: border-box;
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    max-width: 100%;
    overflow-x: hidden;
    font-family: 'Apercu', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
    letter-spacing: 0;
    font-weight: 400;
    font-style: normal;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: "liga" on;
    -webkit-font-smoothing: antialiased;
    color: rgba(0, 0, 0, 0.84);
    font-size: 14px;
    line-height: 20px;
    color: #212529;
    & .main {
      flex: 1;
      display: flex;
      max-width: 980px;
      margin: 0 auto;
    }
  }

  @media screen and (min-aspect-ratio: 2/3) {
    overflow: hidden;
  }

  @media print {
    a {
      padding: 0 !important;
      border-bottom: none !important;
    }
  }
`;
