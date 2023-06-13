import React from 'react';
import Container from 'react-bootstrap/Container';
import  Nav  from 'react-bootstrap/Nav';
import  Navbar  from 'react-bootstrap/Navbar';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { AiOutlineUser } from 'react-icons/ai';



function Appnavbar() {
  return (
    <>
   
      <Navbar bg="light" variant="light">
        <Container className='container'>
          <Navbar.Brand href="#" >
        <img src='./logo.png' alt="Logo" className='logoo' />
        </Navbar.Brand>
          <Nav className="centered-element">
            <Nav.Link href="#">Home   </Nav.Link>
            <Nav.Link href="#">Employer  </Nav.Link>
            <Nav.Link href="#">Candidate  </Nav.Link>
          
          </Nav>
        </Container>
        <AiOutlineUser size={30} />
      </Navbar>
    </>
  );
}

export default Appnavbar;

