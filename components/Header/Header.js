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
          <Link>{emailAddress}</Link>
        </Column>
        <Column>
          <Link>@{twitter}</Link>
          <Link>https://jeffrey.engineer</Link>
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
