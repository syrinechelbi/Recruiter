import React from "react";
import "./homee.png";
import "./home.css";
import { Card, Container } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function Apphome() {
  return (
    <div class="big-space">
      <Container style={{ padding: "5%" }}>
        <h1>Connecting talent to opportunity</h1>
        <h3>
          Discover the perfect match for your career <br></br>or find the ideal
          candidate for your organization.
        </h3>
        <div className="cardContainer">
          <Card style={{ width: "30rem", marginTop: "3%" }}>
            <Card.Body>
              <Card.Title>Employer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text style={{fontSize:"1.3rem"}}>
                As employer you can post offers, find candidates and follow
                applications.
              </Card.Text>
              <Container style={{ display:"flex",     flexDirection: "column",
    alignItems: "baseline", marginLeft:"35%" }}>
            <i class="bi bi-plus-circle custom-icon"></i>   <Card.Link href="/createoffer">  Post offers</Card.Link>
            <i class="bi bi-search custom-icon"></i> <Card.Link href="/candidates">   Find candidates</Card.Link>
            <i class="bi bi-journal-bookmark-fill custom-icon"></i> <Card.Link href="/ApplicationE">Follow applications</Card.Link>
              </Container>  
            </Card.Body>
          </Card>
          <Card style={{ width: "30rem", marginTop: "3%" }}>
            <Card.Body>
              <Card.Title>Candidate</Card.Title>

              <Card.Text style={{fontSize:"1.3rem"}}>
                As candidate you can create your profile, find a job and follow
                your application.
              </Card.Text>
            <Container style={{ display:"flex",     flexDirection: "column",
    alignItems: "baseline", marginLeft:"35%" }}>
      <i class="bi bi-person-lines-fill custom-icon"></i> <Card.Link href="/createProfile">Create profile</Card.Link>
      <i class="bi bi-search custom-icon"></i>    <Card.Link href="/SearchJob">Find job</Card.Link>
              <i class="bi bi-journal-bookmark-fill custom-icon"></i>  <Card.Link href="/ApplicationC">Follow your application</Card.Link>
</Container>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}
