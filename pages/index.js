import App from "../components/App";
import PositionsList from "../components/PositionsList";
import withData from "../lib/withData";

export default withData(props => (
  <App>
    <PositionsList />
  </App>
));
