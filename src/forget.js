import React, { useState } from 'react';

import './login.css'; 
import { Link } from 'react-router-dom';
import { Button, Card, Container, Form, Toast } from 'react-bootstrap';


function Appforget() {

  const [email, setEmail] = useState('');

 
  const [message, setMessage] = useState("");

  const setVal = (e) => {
      setEmail(e.target.value)
  }

  const sendLink = async (e) => {
      e.preventDefault();

      if (email === "") {
          Toast.error("email is required!", {
              position: "top-center"
          });
      } else if (!email.includes("@")) {
          Toast.warning("includes @ in your email!", {
              position: "top-center"
          });
      } else {
          const res = await fetch("/sendpasswordlink", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({ email })
          });

          const data = await res.json();

          if (data.status === 201) {
              setEmail("");
              setMessage(true)
          } else {
              Toast.error("Invalid User",{
                  position: "top-center"
              })
          }
      }
  }

  return (
    <Container  style={{ width: '30rem' ,height:'25rem'}}>

<Card style={{ width: '30rem' }}>
       
<Card.Img variant="center" src='./sopra.png' className='card-img'/>
 <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Please enter your email address below. A confirmation email will be sent to you with verification code to reset your password.</h5>
<Card.Body>
              <Form.Label >email</Form.Label>
      <Form.Control
        type="text"
        onChange={setVal}
      />               
 

</Card.Body>
<br />
<br />

         <Link to='/codepwd' className='class'><Button variant="dark" className='bouton' >Submit</Button></Link> 
         
<br />
              

         
</Card>
</Container>  );
}

export default Appforget;