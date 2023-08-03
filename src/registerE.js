import React, { useState } from 'react';

import './login.css'; 
import { Link, Navigate } from 'react-router-dom';
import { Button, Card, Container, Form } from 'react-bootstrap';
import axios from 'axios';


function AppregisterE() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    phone: "",
    email: "",
    password: "",
    
  });

  const handleChange = ({ currentTarget: Input }) => {
    setData({ data, [Input.name]: Input.value });
  };
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/employer/signup";
      console.log(url);
      const { data: res } = await axios.post(url, data);
      Navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <Container  style={{ width: '30rem' ,height:'25rem'}}>

<Card style={{ width: '30rem' }}>
       
<Card.Img variant="center" src='./sopra.png' className='card-img'/>
              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Register as an employer</h5>
<Card.Body>
  <form onSubmit={handleSubmit}>
              <Form.Label >Firstname</Form.Label>
      <Form.Control
        type="text"
        name="firstName"
        value={data.firstName}
        required
        onChange={handleChange}
   
      />   
         <Form.Label >Lastname</Form.Label>
      <Form.Control
        type="text"
        name="lastName"
        value={data.lastName}
        required
        onChange={handleChange}  
      />   
         <Form.Label >Company name</Form.Label>
      <Form.Control
        type="text"
        name="companyName"
        value={data.companyName}
        required
        onChange={handleChange} 
      />  
         <Form.Label >phone</Form.Label>
      <Form.Control
        type="text"
        name="phone"
        value={data.phone}
        required
        onChange={handleChange}
      />    


<Form.Label >email</Form.Label>
      <Form.Control
        type="email"
        name="email"
        value={data.email}
        required
        onChange={handleChange} 
      />   
                 
 <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        name="password"
        value={data.password}
        required
        onChange={handleChange}   
      />
</form>
</Card.Body>
<br />
<br />

         <Link to='/login' className='class'><Button variant="dark" className='bouton'>Register</Button></Link> 
         

         <br />
<br />       

         
</Card>
</Container>  );
}

export default AppregisterE;