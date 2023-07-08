import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import {Form, Button, Row, Col} from 'react-bootstrap';
import FormContainer from "../components/FormContainer";


const RegisterScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log("submit");
    }
  return (
    <FormContainer>
        <h1 className = "mb-3">Sign Up</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group className='my-2' controlId = 'name'>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type = 'text' 
                    placeholder = 'Your Name' 
                    value = {email} 
                    onChange = {(event) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
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
            <Form.Group className='my-2' controlId = 'confirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                    type = 'password' 
                    placeholder = 'Confirm Password' 
                    value = {confirmPassword} 
                    onChange = {(event) => setConfirmPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button type = "submit" variant = "primary" className = "mt-3">Sign Up</Button>
            <Row className = "py-3">
                <Col>
                    Already a Customer?  <Link to = "/login">   Login</Link>
                </Col>
            </Row>
        </Form>
    </FormContainer>
  )
}

export default RegisterScreen