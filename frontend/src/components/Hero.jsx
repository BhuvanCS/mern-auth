import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Hero = () => {
  return (
    
    <Container >
    <Card className="text-center my-5">
        <Card.Body>
        <Card.Title>MERN Authentication</Card.Title>
        <Card.Text>
          This project mainly focuses on MERN Authentication. It creates an HTTP only cookie. It uses React Bootstrap and Redux Toolkit.
        </Card.Text>
        <Button variant="primary" href = "/login" className = 'me-3'>Sign In</Button>
        <Button variant="secondary" href = "/register" className = 'me-3'>Sign Up</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Copyright Bhuvan C S 2023</Card.Footer>
    </Card>
      
    </Container>
  );
}

export default Hero