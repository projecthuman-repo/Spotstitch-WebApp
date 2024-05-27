import React, { useState, useEffect } from "react";
import "react-step-progress-bar/styles.css";
import Progress from "./Progress";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BusinessPreferences from "./Steps/BusinessPreferences";

function ShopSetup() {
  const [step, setStep] = useState("BP");

  useEffect(() => {
    if (localStorage.getItem("step")) {
      setStep(localStorage.getItem("step"));
    }
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={10}>
            <Progress></Progress>
          </Col>
          <Col></Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        {step === "BP" && <BusinessPreferences />}
        {step === "BN" && <>Business Name</>}
      </Container>
    </>
  );
}

export default ShopSetup;
