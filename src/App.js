import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NumberSelector from "./components/NumberSelector";
import GenreSelector from "./components/GenreSelector";
import PlatformSelector from "./components/PlatformSelector";

import "./App.css";

function App() {
  return (
    <Container className="col-md-5 p-5 mx-auto text-center">
      <Row>
        <Col>
          <h3>Aaj dekhte hai</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          The <NumberSelector /> movie from the <GenreSelector /> genre on{" "}
          <PlatformSelector />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
