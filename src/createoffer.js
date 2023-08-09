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
  MDBTextArea
}
from 'mdb-react-ui-kit';
import "./createOffer.css"
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AppCreateoffer() {
  const [data, setData] = useState({
    jobTitle: "",
    ReqEmployees: "",
    contractType:"",
    description: "",
    company: "",
    deadline: "",
    addInfo: "",
    requirments: "",
    
  });
  const handleChange = ({ currentTarget: Input }) => {
    setData((prevData) => ({
      ...prevData,
      [Input.name]: Input.value,
    }));
  };
  const [errorMsg,setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/offre/create";
      const { data: res } = await axios.post(url, data);
      navigate ("/employerhome") ;
    }
      catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.status <= 500
      ) {
        setErrorMsg(error.response.data.message);
      }
    }
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <MDBContainer fluid>

      <MDBRow className='justify-content-center align-items-center m-5'>
        <form onSubmit={handleSubmit}>
        <MDBCard>
          <MDBCardBody className='px-4'>

            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Create your offer</h3>

            <br />
            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Job title' size='lg' id='form1' type='text' value={data.jobTitle} name='jobTitle' onChange={handleChange} required/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='required employees' size='lg' id='form3' type='text' value={data.ReqEmployees} name='ReqEmployees' onChange={handleChange} required/>
              </MDBCol>

            </MDBRow>

            <MDBRow>

              

              <MDBCol md='6' className='mb-4'>
                <h6 className="fw-bold">Contract Type : </h6>
                <div
              style={{
                display: "flex",
                width: "50%",
                justifyContent: "space-between",
              }}
            >
              <Form.Check
                value="FULLTIME"
                type="radio"
                aria-label="radio 1"
                label="FULLTIME"
                checked={selectedOption === "FULLTIME"}
                onChange={handleRadioChange}
              />
              <Form.Check
                value="PARTTIME"
                type="radio"
                aria-label="radio 2"
                label="PARTTIME"
                checked={selectedOption === "PARTTIME"}
                onChange={handleRadioChange}
              />
              <Form.Check
                value="INTERNSHIP"
                type="radio"
                aria-label="radio 3"
                label="INTERNSHIP"
                checked={selectedOption === "INTERNSHIP"}
                onChange={handleRadioChange}
              />
            </div>
              </MDBCol>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Company' size='lg' id='form4' type='text' value={data.company} name='company' onChange={handleChange} required/>
              </MDBCol>
            </MDBRow>

            <MDBRow>

             

              <MDBCol md='6'>
                <MDBTextArea label='Job Description' id='textAreaExample' rows={3} value={data.description} name='description' onChange={handleChange} required />
              </MDBCol>
              <MDBCol md='6'>
              <MDBTextArea label='requirments' id='textAreaExample' rows={3} value={data.requirments} name='requirments' onChange={handleChange} required/>
              </MDBCol>
            </MDBRow>
             
            <br />
            
            
             <MDBRow>

           

              
              <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Deadline' size='lg' id='form5' type='rel' value={data.deadline} name='deadline' onChange={handleChange} required/>
              </MDBCol>
              <MDBCol md='6'>
              <MDBTextArea label='Additionnal informations' id='textAreaExample' rows={3} value={data.addInfo} name='addInfo' onChange={handleChange} required/>
              </MDBCol>
            </MDBRow>

            <br />
            <br />

        
            <Button variant="dark" type='submit' >
           Submit
          </Button>
          </MDBCardBody>
        </MDBCard>
        </form>
      </MDBRow>
    </MDBContainer>
  );
}

export default AppCreateoffer;