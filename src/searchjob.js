import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function AppApplicationC() {
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Title</th>
          <th scope='col'>Company</th>
          <th scope='col'>Location</th>
          <th scope='col'>Deadline</th>
          <th scope='col'>Details</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='./js.png'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Software developer</p>
                <p className='text-muted mb-0'>full stack js</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Sopra hr</p>
            <p className='text-muted mb-0'>IT department</p>
          </td>
          <td>
            Tunis
          </td>
          <td>technical interview</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Details
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='./js.png'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Software developer</p>
                <p className='text-muted mb-0'>full stack js</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Sopra hr</p>
            <p className='text-muted mb-0'>IT department</p>
          </td>
          <td>
            Tunis
          </td>
          <td>technical interview</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Details
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='./js.png'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Software developer</p>
                <p className='text-muted mb-0'>full stack js</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Sopra hr</p>
            <p className='text-muted mb-0'>IT department</p>
          </td>
          <td>
           Tunis
          </td>
          <td>technical interview</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Details
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}