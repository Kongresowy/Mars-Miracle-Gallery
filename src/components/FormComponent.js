import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const addFormOptions = [
  { key: "fhaz", text: "Front Hazard Avoidance Camera", value: "fhaz" },
  { key: "rhaz", text: "Rear Hazard Avoidance Camera", value: "rhaz" },
  { key: "navcam", text: "Navigation Camera", value: "navcam" }
];

class FormComponent extends React.Component {

  render() {

    const enabled = 
    this.props.correctDate &&
    this.props.correctCamera;

    return (
      <Form onSubmit={this.props.getImages}>
        <Form.Group>
          <Form.Input name="date" type="date" fluid label='Date' placeholder='DD.MM.YYYY' onChange={this.props.handleChangeDate} />
          <Form.Select fluid label='Camera' options={addFormOptions} placeholder='-' onChange={this.props.handleChangeCamera} />
          <Button disabled={!enabled}>Get Images</Button>
        </Form.Group>
      </Form>
    );
  }
}

export default FormComponent;