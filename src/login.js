import React from 'react';

import './login.css'; 
import { Button, Card, Container, Form } from 'react-bootstrap';


function Applogin() {
  return (
    <Container  style={{ width: '30rem' ,height:'25rem'}}>

<Card style={{ width: '30rem' }}>
       
<Card.Img variant="center" src='./sopra.png' className='card-img'/>
              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
<Card.Body>
              <Form.Label >Username</Form.Label>
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

        <Button variant="dark" className='bouton' href="/home" >Sign In</Button>
         
<br />
              <a className="small text-muted" href="/forget">Forgot password?</a>
              <br />

              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account?</p>
              <div className='class'>
             
              <Button variant="dark" href="/registerC" > Register as a candidate </Button>
               <Button variant="dark" href="/registerE" > Register as an employer </Button>

              </div>
              

         
</Card>
</Container>  );
}

export default Applogin;