import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
 
  MDBRadio,
  MDBTextArea
}
from 'mdb-react-ui-kit';

function AppCreateoffer() {
  return (
    <MDBContainer fluid>

      <MDBRow className='justify-content-center align-items-center m-5'>

        <MDBCard>
          <MDBCardBody className='px-4'>

            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Create your offer</h3>

            <br />
            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Job title' size='lg' id='form1' type='text'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Domain' size='lg' id='form2' type='text'/>
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='required employees' size='lg' id='form3' type='text'/>
              </MDBCol>

              <MDBCol md='6' className='mb-4'>
                <h6 className="fw-bold">Contract Type : </h6>
                <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='FULLTIME' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='PARTTIME' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='INTERNSHIP' inline />
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Company' size='lg' id='form4' type='email'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Department' size='lg' id='form5' type='rel'/>
              </MDBCol>

            </MDBRow>
             
            <br />
            
            
             <MDBRow>

              <MDBCol md='6'>
                <MDBTextArea label='Job Description' id='textAreaExample' rows={3} />
              </MDBCol>

              <MDBCol md='6'>
              <MDBTextArea label='requirments' id='textAreaExample' rows={3} />
              </MDBCol>

            </MDBRow>

            
            <br />
            
            <MDBRow>

              <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Deadline' size='lg' id='form5' type='rel'/>
              </MDBCol>

              <MDBCol md='6'>
              <MDBTextArea label='Additionnal informations' id='textAreaExample' rows={3} />
              </MDBCol>
              
            

            </MDBRow>
            
            <br />
            <br />

        
            <MDBBtn className='mb-4' size='lg'>Submit</MDBBtn>

          </MDBCardBody>
        </MDBCard>

      </MDBRow>
    </MDBContainer>
  );
}

export default AppCreateoffer;