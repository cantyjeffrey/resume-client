// @flow

import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Wrapper } from "./style";
import Section from "../Section";

const Interests = ({ data: { loading, error, profile } }) => {
  if (error) return error;
  const hasInterests = profile.interests && profile.interests.length;
  if (profile && hasInterests) {
    const { interests } = profile;
    return (
      <Wrapper>
        <Section title="Interests">
          <p>{interests.join(", ")}</p>
        </Section>
      </Wrapper>
    );
  }
  return <div>Loading</div>;
};

const InterestsQuery = gql`
  query InterestsQuery {
    profile(id: "4QxFybelVSMYgMwuIYeIYc") {
      interests
    }
  }
`;

export default graphql(InterestsQuery)(Interests);
