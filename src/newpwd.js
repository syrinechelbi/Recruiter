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
import './navbar.css';

function Appnewpwd() {
  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='./capture3.png' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='container'>
                <br />
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="centered-element"><img src='./logo.png' alt="logo" className='img-cus2' /></span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Reinitialize password</h5>

              <MDBInput wrapperClass='mb-4' label='New Password' id='formControlLg' type='password' size="lg" placeholder='New Password'/>
                <MDBInput wrapperClass='mb-4' label=' Confirm Password' id='formControlLg' type='password' size="lg" placeholder='Confirm Password'/>

              <Link to='/home' ><MDBBtn className="mb-4 px-5" color='dark' size='lg'>Submit</MDBBtn> </Link>
             
              

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Appnewpwd;