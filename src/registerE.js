import React from 'react';

import './login.css'; 
import { Link } from 'react-router-dom';
import { Button, Card, Container, Form } from 'react-bootstrap';


function AppregisterE() {
  return (
    <Container  style={{ width: '30rem' ,height:'25rem'}}>

<Card style={{ width: '30rem' }}>
       
<Card.Img variant="center" src='./sopra.png' className='card-img'/>
              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Register as an employer</h5>
<Card.Body>
              <Form.Label >Firstname</Form.Label>
      <Form.Control
        type="text"
   
      />   
         <Form.Label >Lastname</Form.Label>
      <Form.Control
        type="text"
   
      />   
         <Form.Label >Company name</Form.Label>
      <Form.Control
        type="text"
   
      />  
         <Form.Label >phone</Form.Label>
      <Form.Control
        type="text"
   
      />    


<Form.Label >email</Form.Label>
      <Form.Control
        type="text"
   
      />   
                 
 <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />

</Card.Body>
<br />
<br />

         <Link to='/home' className='class'><Button variant="dark" className='bouton'>Register</Button></Link> 
         

         <br />
<br />       

         
</Card>
</Container>  );
}

export default AppregisterE;