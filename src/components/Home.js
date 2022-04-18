import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'
import Background from '../images/background.jpeg';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

function Home(props) {
return (
    <>
       <Navbar bg="dark" variant="dark" className='navbar'>
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <Container>
            <Image fluid='true' className='jumbotron-img' bsPrefix='img'>
                <img src={Background} alt='' />
            </Image>
        </Container>
    </>
  );
}

export default Home;