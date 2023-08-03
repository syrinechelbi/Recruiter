import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import "./logo.png";
import "./footer.css";

export default function Appfooter() {
  return (
    <MDBFooter classNmdb-react-ui-kitame="bg-secondary text-white text-center">
      <MDBContainer className="p-4"></MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright: Recruiter
      </div>
    </MDBFooter>
  );
}
