// @flow

import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Wrapper } from "./style";
import Section from "../Section";

const Summary = ({ data: { loading, error, profile } }) => {
  if (error) return error;

  if (profile && profile.summary && profile.status) {
    const { summary, status } = profile;

    return (
      <Wrapper>
        <Section title="Summary">
          {summary.split("\n\n").map((t, i) => <p key={i}>{t}</p>)}
          <p>{status}</p>
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
      status
    }
  }
`;

export default graphql(SummaryQuery)(Summary);
