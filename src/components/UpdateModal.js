import { useReducer } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import SettingsAccordion from "./SettingsAccordion";

import { genres } from "../libs/genres";
import { genreReducer } from "../reducers/genreReducer";

import { platforms } from "../libs/platforms";
import { platformReducer } from "../reducers/platformReducer";

const UpdateModal = ({ show, handleClose }) => {
  const [genre, genreDispatcher] = useReducer(genreReducer, genres());
  const [platform, platformDispatcher] = useReducer(
    platformReducer,
    platforms()
  );

  const disabled =
    genre.every((g) => g.selected === false) ||
    platform.every((p) => p.selected === false);

  const saveOptionUpdates = () => {
    genreDispatcher({ type: "saveChanges" });
    platformDispatcher({ type: "saveChanges" });
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
        {disabled ? (
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">
                Please select atleast Genre/Platform to continue
              </Tooltip>
            }
          >
            <span className="d-inline-block">
              <Button disabled style={{ pointerEvents: "none" }}>
                Save Changes
              </Button>
            </span>
          </OverlayTrigger>
        ) : (
          <Button
            variant="primary"
            onClick={() => saveOptionUpdates()}
            disabled={disabled}
          >
            Save Changes
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateModal;
