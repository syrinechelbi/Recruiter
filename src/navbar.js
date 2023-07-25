import React from 'react';
import Container from 'react-bootstrap/Container';
import  Nav  from 'react-bootstrap/Nav';
import  Navbar  from 'react-bootstrap/Navbar';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { AiOutlineUser } from 'react-icons/ai';

import { Button } from 'react-bootstrap';


function Appnavbar() {
  return (
    <>
   
      <Navbar bg="light" variant="light">
        <Container className='container'>
          <Navbar.Brand href="#" >
        <img src='./sopra.png' alt="Logo"  className='logoo'/>
        </Navbar.Brand>
          <Nav className="centered-element">
            <Nav.Link href="/home">Home   </Nav.Link>
            <Nav.Link href="/employerhome">Employer  </Nav.Link>
            <Nav.Link href="/homeC">Candidate  </Nav.Link>
          </Nav>
        </Container>
        <AiOutlineUser size={40} /> 
        <Button variant="dark" href="/" > Login </Button>
       <p>   </p>
      </Navbar>
    </>
  );
}

export default Appnavbar;



