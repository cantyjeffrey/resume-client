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
  Content,
  TagList,
  Tag
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
  isCurrent,
  tags
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
      {tags &&
        tags.length && (
          <TagList>
            {tags.map(t => (
              <Tag
                key={t.name}
                href={t.url}
                title={t.description}
                target="_blank"
                onClick={() => {
                  window.gtag("event", "link_click_tag", {
                    url: t.url,
                    name: t.name
                  });
                }}
              >
                {t.name}
              </Tag>
            ))}
          </TagList>
        )}
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
