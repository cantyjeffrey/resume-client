// @flow

import React from "react";
import { Wrapper, Tagline, Column } from "./style";
import { Link } from "../Typography";

const Footer = () => (
  <Wrapper>
    <Tagline>
      <span>Fight the good fight.</span>
      <span role="img" aria-label="Flexed Biceps">
        💪
      </span>
    </Tagline>
    <Column>
      <Link
        target="_blank"
        href="https://resume-service.jff.re/"
        onClick={() => {
          window.gtag("event", "link_click_generate_pdf");
        }}
      >
        Download as PDF
      </Link>
    </Column>
  </Wrapper>
);

export default Footer;
