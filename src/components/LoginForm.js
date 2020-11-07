import React from "react";
import { Form } from "react-bootstrap";

import LoaderButton from "./LoaderButton";
import { useFormFields } from "../libs/hooksLib";
import "./Form.css";

export default function LoginForm(props) {

    const [fields, handleChange] = useFormFields({
        email:"", 
        password:""
    });

    function handleSubmit(event) {
        event.preventDefault();
        props.login(fields.email, fields.password);
    }

    return (
        <div className="LoginForm">
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        autoFocus
                        type="email"
                        placeholder="Enter email"
                        required 
                        value={fields.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password"
                        placeholder="Password"
                        required
                        value={fields.password}
                        onChange={handleChange}
                    />
                </Form.Group>

                <LoaderButton
                    type="submit"
                    isLoading={props.isPending}
                    block
                    size="lg"
                    className="mt-4 mt-sm-5"
                >
                    Login
                </LoaderButton>

            </Form>
        </div>
    );
}