import React, { useState } from "react";

import "./login.css";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import axios from "axios";

function AppregisterC() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    gender: ""
  });

  const handleChange = ({ currentTarget: Input }) => {
    setData({ data, [Input.name]: Input.value });
  };
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/candidate/signup";
      console.log(url);
      const { data: res } = await axios.post(url, data);
      Navigate("/login");
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
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);}

    return (
      <Container style={{ width: "30rem", height: "25rem" }}>
        <Card style={{ width: "30rem" }}>
          <Card.Img variant="center" src="./sopra.png" className="card-img" />
          <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
            Register as a Candidate
          </h5>
          <Card.Body>
            <form onSubmit={handleSubmit}>
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                name="firstName"
                type="text"
                value={data.firstName}
                required
                onChange={handleChange}
              />
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={data.lastName}
                required
                onChange={handleChange}
              />
              <Form.Label>phone</Form.Label>
              <Form.Control
                name="phone"
                type="text"
                value={data.phone}
                onChange={handleChange}
              />
              <Form.Label>Gender</Form.Label>
              <Form.Check
                value="female"
                type="radio"
                aria-label="radio 1"
                label="female"
                checked={selectedOption === "f"}
                onChange={handleRadioChange}
              />

              <Form.Check
                value="male"
                type="radio"
                aria-label="radio 2"
                label="male"
                checked={selectedOption === "m"}
                onChange={handleRadioChange}
              />

              <Form.Label>email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={data.email}
                onChange={handleChange}
              />

              <Form.Label htmlFor="inputPassword5">Password</Form.Label>
              <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                value={data.password}
                onChange={handleChange}
              />
              {error && <div className={StyleSheet.error_msg}>error</div>}
              <Button variant="dark" className="bouton" type="submit">
                Register
              </Button>
            </form>
          </Card.Body>
          <br />
          <br />
          <br />
          <br />
        </Card>
      </Container>
    );
  };


export default AppregisterC;
