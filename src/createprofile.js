import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function AppCreateProfile() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
    dateOfBirth : "",
    country : "",
    town : "",
    highLevel : "",
    educInstitut : "",
    fieldStudy : "",
    yearGrad : "",
    CopmanyP : "",
    jobTitleP : "",
    empPeriod : "",
    jobResp : "",
    techSkills : "",
    softSkills : "",
    Language : "",
    addInfor : ""

  });
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChange = ({ currentTarget: Input }) => {
    setData({ ...data, [Input.name]: Input.value });
  };

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/profile/create";
      console.log(url);
      const { data: res } = await axios.post(url, data);
      navigate("/");
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
    <MDBContainer fluid>

      <MDBRow className='justify-content-center align-items-center m-5'>
<form onSubmit={handleSubmit}>
        <MDBCard>
          <MDBCardBody className='px-4'>

            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Create your profile</h3>

            <h4>Personnal informations</h4>
            <br />
            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' 
                value={data.firstName} name='firstName' onChange={handleChange} required/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'
                value={data.lastName} name='lastName' onChange={handleChange} required/>
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Date of birth' size='lg' id='form3' type='text'
                value={data.dateOfBirth} name='dateOfBirth' onChange={handleChange} required/>
              </MDBCol>

              <MDBCol md='6' className='mb-4'>
                <h6 className="fw-bold">Gender: </h6>
                <MDBRadio name='inlineRadio' id='inlineRadio1' value='f' label='Female' inline checked={selectedOption === "female"}
                onChange={handleRadioChange}/>
                <MDBRadio name='inlineRadio' id='inlineRadio2' value='m' label='Male' inlinechecked={selectedOption === "female"}
                onChange={handleRadioChange} />
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email'
                value={data.email} name='email' onChange={handleChange} required/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='text'
                value={data.phone} name='phone' onChange={handleChange} required/>
              </MDBCol>

            </MDBRow>
             <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Country' size='lg' id='form4' type='text'
                value={data.country} name='country' onChange={handleChange} required/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Town' size='lg' id='form5' type='text'
                value={data.town} name='town' onChange={handleChange} required/>
              </MDBCol>

            </MDBRow>
            <h4>Education</h4>
            <br />
            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Highest level of education attained' size='lg' id='form4' type='text'
                value={data.highLevel} name='highLevel' onChange={handleChange} required/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Name of the educational institution' size='lg' id='form5' type='text'
                value={data.educInstitut} name='educInstitut' onChange={handleChange} required/>
              </MDBCol>

            </MDBRow>
             <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Major/Field of study' size='lg' id='form4' type='text'
                value={data.fieldStudy} name='fieldStudy' onChange={handleChange} required/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Year of graduation' size='lg' id='form5' type='text'
                value={data.yearGrad} name='yearGrad' onChange={handleChange} required/>
              </MDBCol>

            </MDBRow>
            
            <h4>Previous Work Experience</h4>
            <br />
            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Company Name' size='lg' id='form4' type='text'
                value={data.CopmanyP} name='CopmanyP' onChange={handleChange} required/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Job title' size='lg' id='form5' type='text'
                value={data.jobTitleP} name='jobTitleP' onChange={handleChange} required/>
              </MDBCol>

            </MDBRow>
             <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Employment period (start and end dates)' size='lg' id='form4' type='text'
                value={data.empPeriod} name='empPeriod' onChange={handleChange} required/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBTextArea label='Job responsabilities' id='textAreaExample' rows={3} 
                value={data.jobResp} name='jobResp' onChange={handleChange} required/>
              </MDBCol>

            </MDBRow>

            <h4>Skills</h4>
            <br />
            <MDBRow>

              <MDBCol md='6'>
              <MDBTextArea label='Technical skills' id='textAreaExample' rows={3}
                value={data.techSkills} name='techSkills' onChange={handleChange} required />
              </MDBCol>

              <MDBCol md='6'>
              <MDBTextArea label='Soft Skills' id='textAreaExample' rows={3} 
                value={data.softSkills} name='softSkills' onChange={handleChange} required/>
              </MDBCol>
              

            </MDBRow>
            <MDBRow>

              <MDBCol md='6'>
              <MDBTextArea label='Language Proficiency' id='textAreaExample' rows={3}
                value={data.Language} name='Language' onChange={handleChange} required />
              </MDBCol>

              <MDBCol md='6'>
              <MDBTextArea label='Additionnal informations' id='textAreaExample' rows={3}
                value={data.addInfo} name='addInfo' onChange={handleChange} required />
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
            <Button
          style={{ marginLeft: "-1%" }}
          variant="dark"
          className="bouton"
          type="submit"
        >
         Submit
        </Button>

          </MDBCardBody>
        </MDBCard>
        </form>
      </MDBRow>
    </MDBContainer>
  );
}

export default AppCreateProfile;