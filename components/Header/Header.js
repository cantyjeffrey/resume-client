// @flow

import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Wrapper, Column } from "./style";
import { Title, Link } from "../Typography";

const Header = ({ data: { loading, error, profile } }) => {
  if (error) return error;
  if (profile) {
    const {
      name,
      title,
      address,
      phoneNumber,
      emailAddress,
      twitter
    } = profile;
    return (
      <Wrapper>
        <Column>
          <Title>{name}</Title>
          <span>{title}</span>
        </Column>
        <Column>
          <span>{address}</span>
        </Column>
        <Column>
          <span>{phoneNumber}</span>
          <Link
            href="mailto:hello@jeffrey.engineer"
            onClick={() => {
              window.gtag("event", "link_click_email");
            }}
          >
            {emailAddress}
          </Link>
        </Column>
        <Column>
          <Link
            href="https://twitter.com/cantyjeffrey"
            target="_blank"
            onClick={() => {
              window.gtag("event", "link_click_twitter");
            }}
          >
            @{twitter}
          </Link>
          <Link
            href="https://jeffrey.engineer"
            target="_blank"
            onClick={() => {
              window.gtag("event", "link_click_website");
            }}
          >
            https://jeffrey.engineer
          </Link>
        </Column>
      </Wrapper>
    );
  }
  return <div>Loading</div>;
};

const HeaderQuery = gql`
  query HeaderQuery {
    profile(id: "4QxFybelVSMYgMwuIYeIYc") {
      name
      title
      address
      emailAddress
      phoneNumber
      twitter
      linkedin
      github
    }
  }
`;

export default graphql(HeaderQuery)(Header);
