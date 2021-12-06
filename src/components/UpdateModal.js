import { useReducer } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import SettingsAccordion from "./SettingsAccordion";

import { genres } from "../libs/genres";
import { genreReducer } from "../reducers/genreReducer";

import { platforms } from "../libs/platforms";
import { platformReducer } from "../reducers/platformReducer";

const UpdateModal = ({ show, handleClose, setRefreshedAt }) => {
  const [genre, genreDispatcher] = useReducer(genreReducer, genres());
  const [platform, platformDispatcher] = useReducer(
    platformReducer,
    platforms()
  );

  const saveOptionUpdates = () => {
    genreDispatcher({ type: "saveChanges" });
    platformDispatcher({ type: "saveChanges" });
    setRefreshedAt();
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Edit Options</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SettingsAccordion
          genres={genre}
          genreDispatcher={genreDispatcher}
          platforms={platform}
          platformDispatcher={platformDispatcher}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => saveOptionUpdates()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateModal;
