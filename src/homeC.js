import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import './homeE.css';
import { Link } from "react-router-dom";
import {MDBBtn} from "mdb-react-ui-kit";

export default function ApphomeC() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='.\C2.png'
        alt='...'
      >
<Link to='/createProfile' > <MDBBtn rounded className='mx-2' color='dark'>Create your profile</MDBBtn></Link>
      </MDBCarouselItem>
     

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='.\C1.png'
        alt='...'
      >
         <Link to='/SearchJob' > <MDBBtn rounded className='mx-2' color='dark'>See job offers</MDBBtn></Link>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='.\C3.png'
        alt='...'
      >
       <Link to='/ApplicationC' > <MDBBtn rounded className='mx-2' color='dark'>See your applications</MDBBtn></Link>
      </MDBCarouselItem>
    
    </MDBCarousel>
  );
}