import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Hero = () => {
  return (
    
    <Container >
    <Card className="text-center my-5">
        <Card.Body>
        <h2 className = "m-3">MERN Authentication</h2>
        <Card.Text>
          This project mainly focuses on MERN Authentication. It creates an HTTP only cookie. It uses React Bootstrap and Redux Toolkit.
        </Card.Text>
        <LinkContainer to = "/login" >
          <Button variant="primary" className = 'me-3'>Sign In</Button>
        </LinkContainer>
        <LinkContainer to = "/register" >
          <Button variant="secondary" href = "/register" className = 'me-3'>Sign Up</Button>
        </LinkContainer>
        
        
      </Card.Body>
      <Card.Footer className="text-muted">Copyright Bhuvan C S 2023</Card.Footer>
    </Card>
      
    </Container>
  );
}

export default Hero