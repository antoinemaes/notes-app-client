import React from "react";
import { Form } from "react-bootstrap";

import LoaderButton from "./LoaderButton";
import { useFormFields } from "../libs/hooksLib";
import "./Form.css";

export default function SignupForm(props) {

    const [fields, handleChange] = useFormFields({
        email:"", 
        password:"",
        confirm:""
    });

    function handleSubmit(event) {
        event.preventDefault();
        props.signup(fields.email, fields.password);
    }

    const isValid = () => (
        fields.email.length > 0 &&
        fields.password.length > 0 &&
        fields.confirm === fields.password
    );

    return (
        <div className="SignupForm">
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        autoFocus
                        type="email"
                        placeholder="Enter your email address"
                        required 
                        value={fields.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password"
                        placeholder="Choose a password"
                        required
                        value={fields.password}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="confirm">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control 
                        type="password"
                        placeholder="Confirm your password"
                        required
                        value={fields.confirm}
                        onChange={handleChange}
                    />
                </Form.Group>

                <LoaderButton
                    type="submit"
                    isLoading={props.isPending}
                    disabled={!isValid()}
                    block
                    size="lg"
                    className="mt-4 mt-sm-5"
                >
                    Signup
                </LoaderButton>

            </Form>
        </div>
    );
}