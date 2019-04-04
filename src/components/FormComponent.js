import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const addFormOptions = [
  { key: "fhaz", text: "Front Hazard Avoidance Camera", value: "fhaz" },
  { key: "rhaz", text: "Rear Hazard Avoidance Camera", value: "rhaz" },
  { key: "mast", text: "Mast Camera", value: "mast" },
  { key: "mahli", text: "Mars Hand Lens Imager", value: "mahli" },
  { key: "navcam", text: "Navigation Camera", value: "navcam" }
];

class FormComponent extends React.Component {

  render() {
    const { correctDate, correctCamera, getImages, handleChangeDate, handleChangeCamera } = this.props;

    const enabled =
      correctDate &&
      correctCamera;

    return (
      <Form onSubmit={getImages}>
        <Form.Group>
          <Form.Input name="date" type="date" fluid placeholder='Date' onChange={handleChangeDate} />
          <Form.Select fluid options={addFormOptions} placeholder='Camera' onChange={handleChangeCamera} />
          <Button disabled={!enabled}>Get Images</Button>
        </Form.Group>
      </Form>
    );
  }
}

export default FormComponent;