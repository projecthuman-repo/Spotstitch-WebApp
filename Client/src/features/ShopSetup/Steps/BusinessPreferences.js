import * as React from "react";
import "react-step-progress-bar/styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function BusinessPreferences() {
  return (
    <>
      <Row>
        <Col></Col>
        <Col
          xs={10}
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          Business Preferences
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col
          xs={10}
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          Tell us about your shop.
        </Col>
        <Col></Col>
      </Row>
      <br />
      <Row
        style={{
          borderStyle: "solid",
          borderRadius: "5px",
          borderColor: "#d3d3d3cc",
        }}
      >
        <Col></Col>
        <Col>
          <br />
          Business Language:
          <Form.Select>
            <option>English</option>
          </Form.Select>
          <br />
          Business Country:
          <Form.Select>
            <option>Canada</option>
          </Form.Select>
          <br />
          Business State/Province:
          <Form.Select>
            <option>British Columbia</option>
          </Form.Select>
          <br />
          Business Currency:
          <Form.Select>
            <option>$ Canadian Dollars</option>
          </Form.Select>
          <br />
          <br />
        </Col>
        <Col></Col>
      </Row>
      <br />
      <div
        style={{
          alignItems: "right",
          justifyContent: "right",
          display: "flex",
        }}
      >
        <Button
          variant="secondary"
          onClick={() => {
            localStorage.setItem("step", "BN");
            window.location.href = "/ShopSetup";
          }}
        >
          Save & Continue
        </Button>{" "}
      </div>
    </>
  );
}

export default BusinessPreferences;
