import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import './logo.png';
import './footer.css';

export default function Appfooter() {
  return (
    <MDBFooter classNmdb-react-ui-kitame='bg-secondary text-white text-center'>
      <MDBContainer className='p-4'>
    
        <MDBRow>
            <MDBCol lg="6" md="6">
            <img src='./logo.png' alt='logo' className='custom-img'/>
            </MDBCol>
          <MDBCol lg="6" md="6" className='mb-4 mb-md-0'>
         
            <h5 className='text-uppercase'>about us</h5>
            <p className='custom-text'>
            Connecting talent to opportunity. Recruiter is the gateway to a world of possibilities.
            Discover the perfect match for your career or find the ideal candidate for your organization. 
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Candidate</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-black'>
                 create profile
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                 find jobs
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                 application follow-up
                </a>
              </li>
              
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Employer</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-black'>
                  post offer
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                  find candidates
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                  application follow-up
                </a>
              </li>
              
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: Recruiter
       
      </div>
    </MDBFooter>
  );
}