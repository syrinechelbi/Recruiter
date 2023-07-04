import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRadio
}
from 'mdb-react-ui-kit';
import './login.css'; 
import { Link } from 'react-router-dom';
import axios from 'axios';


function AppregisterE() {

  const [firstName,setfirstName]= useState('');
  const [lastName,setlastName]= useState('');
  const [phone,setphone]= useState('');
  const [Gender,setGender]= useState('');
  const [email,setemail]= useState('');
  const [password,setpassword]= useState('');
  
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  
const handleSubmit = (e) => {
  // prevent the form from refreshing the whole page
  e.preventDefault();
 
}
const configuration = {
  method: "post",
  url: "http://localhost:5000/employers/create",
  data: {
    firstName,
    lastName,
    phone,
    email,
    password,
  },
};
axios(configuration);


  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='.\Capture.PNG' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0"><img src='./logo.png' alt="logo" className='img-cus2' /></span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Register as an Employer</h5>

              <MDBRow>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
              </MDBCol>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='company name' size='lg' id='form3' type='text'/>
              </MDBCol>
          
  <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='phone' size='lg' id='form3' type='text'/>
              </MDBCol>
          
            </MDBRow>
            <MDBRow>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg'  id='form4' type='email'/>
              </MDBCol>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Password'   id='form5' type='rel'/>
              </MDBCol>
            </MDBRow>
           



              <Link to='/home' ><MDBBtn className="mb-4 px-5" color='dark' size='lg'>Sign up</MDBBtn> </Link>
              

              

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default AppregisterE;