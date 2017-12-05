import withData from "../lib/withData";

import App from "../components/App";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

export default withData(props => (
  <App>
    <Header />
    <Body />
    <Footer />
  </App>
));
