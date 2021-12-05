import { useState } from "react";

import Card from "react-bootstrap/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import NumberSelector from "./components/NumberSelector";
import GenreSelector from "./components/GenreSelector";
import PlatformSelector from "./components/PlatformSelector";
import UpdateModal from "./components/UpdateModal";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card
        bg="light"
        style={{ width: "18rem", fontSize: "1.5rem" }}
        className="mx-auto text-center m-5"
      >
        <Card.Header>
          <strong>Let's watch</strong>{" "}
          <FontAwesomeIcon icon={faEdit} onClick={handleShow} />
        </Card.Header>
        <Card.Body>
          <Card.Text>
            The <NumberSelector /> movie from the <GenreSelector /> genre on{" "}
            <PlatformSelector />
          </Card.Text>
        </Card.Body>
      </Card>
      <UpdateModal show={show} handleClose={handleClose} />
    </>
  );
};

export default App;
