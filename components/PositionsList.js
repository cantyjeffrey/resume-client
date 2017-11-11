import { graphql } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

const Positions = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;
const Position = styled.dl`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  grid-column: span 1;
  font-size: 14px;
  line-height: 20px;
`;
const PositionHeader = styled.dt`margin-bottom: 0.5rem;`;
const PositionMeta = styled.p`
  margin: 0;
  display: flex;
  flex-direction: column;
  & span {
    text-decoration: underline;
  }
`;

const PositionTitle = styled.h4`
  margin: 0;
  font-weight: 600;
`;

const PositionSummary = styled.dd`
  margin: 0;
  & p {
    margin: 0;
  }
`;

const PositionDebug = styled.div`
  background-color: #f7f7f7;
  margin: 1rem 0;
  padding: 1rem;
  & span {
    font-family: monospace;
    font-size: 12px;
    line-height: 1;
    white-space: pre-wrap;
  }
`;
const formatDate = date =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric"
  });
const PositionsList = ({ data: { loading, error, positions } }) => {
  if (error) return error;
  if (positions && positions.length) {
    return (
      <Positions>
        {positions.map((position, index) => {
          const { title, summary, company } = position;
          const startDate = formatDate(position.startDate);
          const endDate = formatDate(position.endDate);
          const { location } = company;
          return (
            <Position key={`${startDate}${endDate}`}>
              <PositionHeader>
                <PositionTitle>{title}</PositionTitle>
                <PositionMeta>
                  <span>{location}</span>
                  <span>
                    {startDate} — {endDate}
                  </span>
                </PositionMeta>
              </PositionHeader>
              <PositionSummary>
                <p>{summary}</p>
              </PositionSummary>
              <PositionDebug>
                <span>{JSON.stringify(position, null, 2)}</span>
              </PositionDebug>
            </Position>
          );
        })}
      </Positions>
    );
  }
  return <div>Loading</div>;
};

const allPositions = gql`
  query allPositions {
    positions(q: "order=-fields.endDate") {
      title
      summary
      startDate
      endDate
      isCurrent
      role
      technologies {
        name
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

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (Positions)
export default graphql(allPositions, {
  props: ({ data }) => ({
    data
  })
})(PositionsList);
