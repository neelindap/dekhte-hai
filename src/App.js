import Card from "react-bootstrap/Card";

import NumberSelector from "./components/NumberSelector";
import GenreSelector from "./components/GenreSelector";
import PlatformSelector from "./components/PlatformSelector";

const App = () => {
  return (
    <Card
      bg="light"
      style={{ width: "18rem", fontSize: "1.5rem" }}
      className="mx-auto text-center m-5"
    >
      <Card.Header>
        <strong>Let's watch</strong>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          The <NumberSelector /> movie from the <GenreSelector /> genre on{" "}
          <PlatformSelector />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default App;
