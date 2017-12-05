// @flow

import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Section from "../Section";
import { Wrapper, List, ListItem } from "./style";

const Capabilities = ({ data: { loading, error, capabilities } }) => {
  if (error) return error;
  if (capabilities && capabilities.length) {
    return (
      <Wrapper>
        <Section title="Capabilities">
          {capabilities
            .filter(c => c.technologies && c.technologies.length)
            .map(c => {
              const { name, technologies } = c;
              return (
                <List key={name}>
                  {technologies.map(t => (
                    <ListItem key={t.name}>{t.name}</ListItem>
                  ))}
                </List>
              );
            })}
        </Section>
      </Wrapper>
    );
  }
  return <div>Loading</div>;
};

const AllCapabilitiesQuery = gql`
  query AllCapabilitiesQuery {
    capabilities: taxonomies {
      name
      slug
      description
      technologies: children {
        name
        url
        description
      }
    }
  }
`;

export default graphql(AllCapabilitiesQuery, {
  props: ({ data }) => ({
    data
  })
})(Capabilities);
