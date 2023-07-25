import React from 'react';

import './login.css'; 
import { Link } from 'react-router-dom';
import { Button, Card, Container, Form } from 'react-bootstrap';


function Appforget() {
  return (
    <Container  style={{ width: '30rem' ,height:'25rem'}}>

<Card style={{ width: '30rem' }}>
       
<Card.Img variant="center" src='./sopra.png' className='card-img'/>
              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Please enter your email address below. A confirmation email will be sent to you with verification code to reset your password.</h5>
<Card.Body>
              <Form.Label >email</Form.Label>
      <Form.Control
        type="text"
   
      />               
 

</Card.Body>
<br />
<br />

         <Link to='/codepwd' className='class'><Button variant="dark" className='bouton'>Submit</Button></Link> 
         
<br />
              

         
</Card>
</Container>  );
}

export default Appforget;