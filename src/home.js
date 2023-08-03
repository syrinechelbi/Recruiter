import React from "react";
import "./homee.png";
import "./home.css";
import { Card, Container } from "react-bootstrap";

export default function Apphome() {
  return (
    <div class="big-space">
      <Container style={{ height: "650px", padding: "5%" }}>
        <h1>Connecting talent to opportunity</h1>
        <h3>
          Discover the perfect match for your career <br></br>or find the ideal
          candidate for your organization.
        </h3>
        <div className="cardContainer">
          <Card style={{ width: "30rem", height: "12rem", marginTop: "3%" }}>
            <Card.Body>
              <Card.Title>Employer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                As employer you can post offers, find candidates and follow
                applications.
              </Card.Text>
              <Card.Link href="#">Post offers</Card.Link>
              <Card.Link href="#">Find candidates</Card.Link>
              <Card.Link href="#">Follow applications</Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "30rem", marginTop: "3%" }}>
            <Card.Body>
              <Card.Title>Candidate</Card.Title>

              <Card.Text>
                As candidate you can create your profile, find a job and follow
                your application.
              </Card.Text>
              <Card.Link href="#">Create profile</Card.Link>
              <Card.Link href="#">Find job</Card.Link>
              <Card.Link href="#">Follow your application</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}
