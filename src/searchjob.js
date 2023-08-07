import React, { useEffect, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function AppApplicationC() {
  const [data,setData]=useState([]);
  useEffect(() => {
  axios
  .get("http://localhost:5000/offre/all")
  .then(res => {
    console.log({res})
    setData(res.data)
  }
    )
    .catch(err => {
      console.log(err);
    })  
  },[]);

  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Title</th>
          <th scope='col'>Company</th>
          <th scope='col'>Required employees</th>
          <th scope='col'>Deadline</th>
          <th scope='col'>Details</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        
        {data.map( data =>(
          <tr>
          <td><b>{data.jobTitle}</b></td>
          <td>{data.company}</td>
          <td>{data.ReqEmployees}</td>
          <td>{data.deadline}</td>
          <td><a href="#">See details</a></td>

        </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
}