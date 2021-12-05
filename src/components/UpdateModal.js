import { useReducer } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import SettingsAccordion from "./SettingsAccordion";

import { genres } from "../libs/genres";
import { genreReducer } from "../reducers/genreReducer";

const UpdateModal = ({ show, handleClose }) => {
  const [genre, genreDispatcher] = useReducer(genreReducer, genres());

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Edit Options</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SettingsAccordion genres={genre} genreDispatcher={genreDispatcher} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            genreDispatcher({ type: "saveChanges" });
            handleClose();
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateModal;
