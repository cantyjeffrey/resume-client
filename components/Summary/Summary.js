// @flow

import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Wrapper } from "./style";
import Section from "../Section";

const Summary = ({ data: { loading, error, profile } }) => {
  if (error) return error;

  if (profile && profile.summary) {
    const { summary } = profile;
    return (
      <Wrapper>
        <Section title="Summary">
          <p>{summary}</p>
        </Section>
      </Wrapper>
    );
  }
  return <div>Loading</div>;
};

const SummaryQuery = gql`
  query SummaryQuery {
    profile(id: "4QxFybelVSMYgMwuIYeIYc") {
      summary
    }
  }
`;

export default graphql(SummaryQuery)(Summary);
