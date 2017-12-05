// @flow

import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Wrapper, Content } from "./style";
import Section from "../Section";
import Project from "../Project";

const Projects = ({ data: { loading, error, projects } }) => {
  if (error) return error;
  if (projects && projects.length) {
    return (
      <Wrapper>
        <Section title="Experience">
          <Content>
            {projects.map(project => {
              const {
                title,
                summary,
                company,
                startDate,
                endDate,
                isCurrent
              } = project;
              const { location } = company;
              return (
                <Project
                  key={`${startDate}${endDate}`}
                  title={title}
                  summary={summary}
                  company={company}
                  location={location}
                  startDate={startDate}
                  endDate={endDate}
                  isCurrent={isCurrent}
                />
              );
            })}
          </Content>
        </Section>
      </Wrapper>
    );
  }
  return <div>Loading</div>;
};

const AllProjectsQuery = gql`
  query AllProjectsQuery {
    projects: positions(q: "order=-fields.endDate") {
      title
      summary
      startDate
      endDate
      isCurrent
      role
      tags {
        name
        url
        description
      }
      company {
        ... on Company {
          name
          location
          url
          logo {
            url
          }
        }
      }
    }
  }
`;

export default graphql(AllProjectsQuery, {
  props: ({ data }) => ({
    data
  })
})(Projects);
