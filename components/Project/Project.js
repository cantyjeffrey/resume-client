// @flow

import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Header,
  Meta,
  MetaDateRange,
  MetaDate,
  Summary,
  Content
} from "./style";
import { Title, Emphasis } from "../Typography";

const formatTime = date => new Date(date).toISOString();

const formatDate = date =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric"
  });

const Project = ({
  title,
  location,
  startDate,
  endDate,
  summary,
  isCurrent
}) => (
  <Wrapper isCurrent={isCurrent}>
    <Header>
      <Title>{title}</Title>
      <Meta>
        <Emphasis>{location}</Emphasis>
        <MetaDateRange>
          <MetaDate dateTime={formatTime(startDate)}>
            {formatDate(startDate)}
          </MetaDate>
          {" — "}
          {endDate ? (
            <MetaDate dateTime={formatTime(endDate)}>
              {formatDate(endDate)}
            </MetaDate>
          ) : (
            "Present"
          )}
        </MetaDateRange>
      </Meta>
    </Header>
    <Summary>
      <Content>{summary}</Content>
    </Summary>
  </Wrapper>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  summary: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool
};

Project.defaultProps = {
  isCurrent: false,
  endDate: null
};

export default Project;
