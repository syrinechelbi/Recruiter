import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AppCandidates() {
  const [data,setData]=useState([]);
  useEffect(() => {
  axios
  .get("http://localhost:5000/candidates/all")
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

<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Speciality</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
  {data.map( data =>(    <tr>
      <td><b>{data.firstName} {data.lastName} </b> <br/> {data.email}</td>
      <td>Software Engineer</td>
      <td><a href="#">See profile</a></td>


    </tr>))}

    
  </tbody>
</table>

  );
}