import { Form } from "react-bootstrap";

import LoaderButton from "./LoaderButton";
import { useFormFields } from "../libs/hooksLib";
import "./Form.css";

export default function ConfirmationForm(props) {

  const [fields, handleChange] = useFormFields({
    confirmationCode:"", 
  });

  function handleSubmit(event) {
    event.preventDefault();
    props.confirm(fields.confirmationCode);
  }

  return (
    <div className="SignupForm">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="confirmationCode" bsSize="large">
          <Form.Label>Confirmation Code</Form.Label>
          <Form.Control
            autoFocus
            type="tel"
            onChange={handleChange}
            value={fields.confirmationCode}
          />
          <Form.Text>Please check your email for the code.</Form.Text>
        </Form.Group>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={props.isPending}
          disabled={false}
        >
          Verify
        </LoaderButton>
      </Form>
    </div>
  );
}