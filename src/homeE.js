import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import './homeE.css';
import { Link } from "react-router-dom";
import {MDBBtn} from "mdb-react-ui-kit";

export default function ApphomeE() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='.\post111.png'
        alt='...'
      >
<Link to='/' > <MDBBtn rounded className='mx-2' color='dark'>Add offer</MDBBtn></Link>
      </MDBCarouselItem>
     

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='.\seaech11.png'
        alt='...'
      >
         <Link to='/' > <MDBBtn rounded className='mx-2' color='dark'>See candidates</MDBBtn></Link>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='.\followup.PNG'
        alt='...'
      >
       <Link to='/' > <MDBBtn rounded className='mx-2' color='dark'>See applications</MDBBtn></Link>
      </MDBCarouselItem>
    
    </MDBCarousel>
  );
}