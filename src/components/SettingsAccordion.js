import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

const SettingsAccordion = ({ genres, genreDispatcher }) => {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>Genres</Accordion.Header>
        <Accordion.Body>
          <Form>
            {genres.map((genre, index) => {
              return (
                <Form.Group className="mb-3" key={genre.name}>
                  <Form.Check
                    type="checkbox"
                    label={genre.name}
                    checked={genre.selected}
                    onChange={(e) =>
                      genreDispatcher({
                        type: "updateSelection",
                        index: index,
                        selected: e.target.checked,
                      })
                    }
                  />
                </Form.Group>
              );
            })}
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default SettingsAccordion;
