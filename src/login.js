import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import './login.css'; 
import { Link } from 'react-router-dom';


function Applogin() {
  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='./loginn.jpg' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0"><img src='./logo.png' alt="logo" className='img-cus2' /></span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" placeholder='Email'/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" placeholder='Password'/>

              <Link to='/home' ><MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn> </Link>
              <a className="small text-muted" href="/forget">Forgot password?</a>
              <br />
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account?</p>
            
              <Link to='/registerC'><MDBBtn className="mb-4 px-5" color='dark' size='lg'>Register as a Candidate </MDBBtn></Link>
              <Link to='/registerE'><MDBBtn className="mb-4 px-5" color='dark' size='lg'>Register as an Employer </MDBBtn></Link>


              

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Applogin;