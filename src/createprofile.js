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
  MDBTextArea,
  MDBFile
}
from 'mdb-react-ui-kit';

function AppCreateProfile() {
  return (
    <MDBContainer fluid>

      <MDBRow className='justify-content-center align-items-center m-5'>

        <MDBCard>
          <MDBCardBody className='px-4'>

            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Create your profile</h3>

            <h4>Personnal informations</h4>
            <br />
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
                <MDBInput wrapperClass='mb-4' label='Date of birth' size='lg' id='form3' type='text'/>
              </MDBCol>

              <MDBCol md='6' className='mb-4'>
                <h6 className="fw-bold">Gender: </h6>
                <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel'/>
              </MDBCol>

            </MDBRow>
             <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Country' size='lg' id='form4' type='email'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Town' size='lg' id='form5' type='rel'/>
              </MDBCol>

            </MDBRow>
            <h4>Education</h4>
            <br />
            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Highest level of education attained' size='lg' id='form4' type='email'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Name of the educational institution' size='lg' id='form5' type='rel'/>
              </MDBCol>

            </MDBRow>
             <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Major/Field of study' size='lg' id='form4' type='email'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Year of graduation' size='lg' id='form5' type='rel'/>
              </MDBCol>

            </MDBRow>
            
            <h4>Previous Work Experience</h4>
            <br />
            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Company Name' size='lg' id='form4' type='email'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Job title' size='lg' id='form5' type='rel'/>
              </MDBCol>

            </MDBRow>
             <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Employment period (start and end dates)' size='lg' id='form4' type='email'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBTextArea label='Job responsabilities' id='textAreaExample' rows={3} />
              </MDBCol>

            </MDBRow>

            <h4>Skills</h4>
            <br />
            <MDBRow>

              <MDBCol md='6'>
              <MDBTextArea label='Technical skills' id='textAreaExample' rows={3} />
              </MDBCol>

              <MDBCol md='6'>
              <MDBTextArea label='Soft Skills' id='textAreaExample' rows={3} />
              </MDBCol>
              

            </MDBRow>
            <MDBRow>

              <MDBCol md='6'>
              <MDBTextArea label='Language Proficiency' id='textAreaExample' rows={3} />
              </MDBCol>

              <MDBCol md='6'>
              <MDBTextArea label='Additionnal informations' id='textAreaExample' rows={3} />
              </MDBCol>
              
            

            </MDBRow>
            
            <br />
            <br />

            <MDBRow className='align-items-center pt-4 pb-3'>

            <MDBCol md='3' className='ps-5'>
              <h6 className="mb-0">Upload CV</h6>
            </MDBCol>

            <MDBCol md='9' className='pe-5'>
              <MDBFile size='lg' id='customFile' />
              <div className="small text-muted mt-2">Upload your CV/Resume or any other relevant file. Max file size 50 MB</div>
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

export default AppCreateProfile;