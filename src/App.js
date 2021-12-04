import { useRef } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NumberSelector from './components/NumberSelector';
import GenreSelector from './components/GenreSelector';
import PlatformSelector from './components/PlatformSelector';

function App() {
  const numberSelectorRef = useRef(null);

  return (
    <Container className="col-md-5 p-5 mx-auto text-center">
      <Row>
        <Col>Thou shall watch</Col>
      </Row>
      <Row>
        <Col>
          The <NumberSelector ref={numberSelectorRef} /> movie
          from the <GenreSelector /> genre
          on <PlatformSelector />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
