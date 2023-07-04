import React from 'react';
import Container from 'react-bootstrap/Container';
import  Nav  from 'react-bootstrap/Nav';
import  Navbar  from 'react-bootstrap/Navbar';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';


function Appnavbar() {
  return (
    <>
   
      <Navbar bg="light" variant="light">
        <Container className='container'>
          <Navbar.Brand href="#" >
        <img src='./logo.png' alt="Logo" className='logoo' />
        </Navbar.Brand>
          <Nav className="centered-element">
            <Nav.Link href="/home">Home   </Nav.Link>
            <Nav.Link href="/homeE">Employer  </Nav.Link>
            <Nav.Link href="/homeC">Candidate  </Nav.Link>
          </Nav>
        </Container>
        <AiOutlineUser size={40} /> 
        <Link to='/' ><MDBBtn className="mb-2 px-3" color='dark' size='md'>Logout </MDBBtn> </Link>
       <p>   </p>
      </Navbar>
    </>
  );
}

export default Appnavbar;



