import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import {Form, Button, Row, Col} from 'react-bootstrap';
import FormContainer from "../components/FormContainer";


const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log("submit");
    }
  return (
    <FormContainer>
        <h1 className = "mb-3">Sign In</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group className='my-2' controlId = 'email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    type = 'email' 
                    placeholder = 'Your Email Address' 
                    value = {email} 
                    onChange = {(event) => setEmail(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <Form.Group className='my-2' controlId = 'password'>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type = 'password' 
                    placeholder = 'Your Password' 
                    value = {password} 
                    onChange = {(event) => setPassword(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <Button type = "submit" variant = "primary" className = "mt-3">Sign In</Button>
            <Row className = "py-3">
                <Col>
                    New Customer?  <Link to = "/register">   Register Now</Link>
                </Col>
            </Row>
        </Form>
    </FormContainer>
  )
}

export default LoginScreen