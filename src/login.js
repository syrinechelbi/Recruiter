import React, { useState } from "react";

import "./login.css";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Applogin() {

  const [data, setData] = useState({
    email: "",
    password: "",
    
  });
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = ({ currentTarget: Input }) => {
    setData((prevData) => ({
      ...prevData,
      [Input.name]: Input.value,
    }));
  };
  
  const navigate = useNavigate();
  const [errorMsg,setErrorMsg] = useState('');

  const handleSubmit= async (e) => {
    e.preventDefault();
    try {
      if (selectedOption==='c'){  const url = "http://localhost:5000/candidates/signin";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token",res.data);
      navigate("/");}
      else {
        const url = "http://localhost:5000/employer/signin";
        const { data: res } = await axios.post(url, data);
        localStorage.setItem("token",res.data);
        navigate("/");
      }
    
    }
      catch (error) {
        if (error.response && error.response.status === 401) {
          setErrorMsg('Mot de passe incorrect');
    }
    else {
      setErrorMsg('Une erreur s\'est produite lors de la connexion');
    }
  }
};

  


  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container style={{ width: "30rem", height: "25rem", marginTop: "4%" }}>
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="center" src="./sopra.png" className="card-img" />
        <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
          <b>Sign into your account</b>
        </h5>
        <form onSubmit={handleSubmit}>
        <Card.Body>
        <Form.Label><b>choose your role</b></Form.Label>
        <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
              }}
            >
              <Form.Check
                value="c"
                type="radio"
                aria-label="radio 1"
                label="candidate"
                checked={selectedOption === "c"}
                onChange={handleRadioChange}

              />
              <Form.Check
                value="e"
                type="radio"
                aria-label="radio 2"
                label="employer"
                checked={selectedOption === "e"}
                onChange={handleRadioChange}
              />
            </div>
            <br />  

          <Form.Label>Email</Form.Label>
          <Form.Control
           type="email"
           name="email"
           value={data.email}
           required
           onChange={handleChange} />

          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
           type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        name="password"
        value={data.password}
        required
        onChange={handleChange} 
          />
        </Card.Body>
        <br />
       

        <Button
          style={{ marginLeft: "-1%" }}
          variant="dark"
          className="bouton"
          type="submit"
        >
          Sign In
        </Button>

        
     {errorMsg && <div>{errorMsg}</div>}


  
        </form>
        <br />
        <a className="small text-muted" href="/forget">
          Forgot password?
        </a>
        <br />

        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
          Don't have an account?
        </p>
        <div className="class">
          <Button variant="dark" href="/registerC">
            Register as a candidate
          </Button>
          <Button variant="dark" href="/registerE">
            Register as an employer
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default Applogin;
