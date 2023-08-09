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
import { Button } from 'react-bootstrap';


function Appcodepwd() {
  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='.\code.png' alt="code" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0"><img src='./sopra.png' alt="logo" className='img-cus2' /></span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Please enter the code recieved via mail </h5>

                <MDBInput wrapperClass='mb-4' label='verification code' id='formControlLg' type='email' size="lg" placeholder='code'/>
              

              <Link to='/newpwd' >
        <Button
          style={{ marginLeft: "-1%" }}
          variant="dark"
          className="bouton"
          type="submit"
        >
         Submit
        </Button> </Link>
             

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Appcodepwd;