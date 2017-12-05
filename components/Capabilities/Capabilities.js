// @flow

import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Section from "../Section";
import { Wrapper, List, ListItem } from "./style";

const Capabilities = ({ data: { loading, error, capabilities } }) => {
  if (error) return error;
  if (capabilities) {
    const { parent } = capabilities;
    if (parent && parent.length) {
      return (
        <Wrapper>
          <Section title="Capabilities">
            {parent.filter(p => p.children && p.children.length).map(c => {
              if (c.children && c.children.length) {
                return (
                  <List key={c.name}>
                    {c.children.map(t => (
                      <ListItem key={t.name}>{t.name}</ListItem>
                    ))}
                  </List>
                );
              }
            })}
          </Section>
        </Wrapper>
      );
    }
  }
  return <div>Loading</div>;
};

const AllCapabilitiesQuery = gql`
  query AllCapabilitiesQuery {
    capabilities: taxonomyList(id: "BZix4rg5mCQg4ikYsAgye") {
      name
      parent: taxonomies {
        name
        children {
          name
          url
          description
        }
      }
    }
  }
`;

export default graphql(AllCapabilitiesQuery, {
  props: ({ data }) => ({
    data
  })
})(Capabilities);
