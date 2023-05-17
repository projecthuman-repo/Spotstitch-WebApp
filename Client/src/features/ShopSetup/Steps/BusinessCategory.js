import * as React from "react";
import "react-step-progress-bar/styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function BusinessCategory() {
    return (
        <>
            <Row>
                <Col></Col>
                <Col xs={10} style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>Product Types
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col xs={10} style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>What type of products does your business provide?
                </Col>
                <Col></Col>
            </Row>
            <br />
            <Row style={{ borderStyle: "solid", borderRadius: "5px", borderColor: "#d3d3d3cc" }}>
                <Col></Col>
                <Col>
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control placeholder="Search" />
                    </Form.Group>
                    {/* List of categories, can change h4 to h3/h5/etc to make bigger or smaller */}
                    <h4>
                        <Badge bg="secondary">Category</Badge><Badge bg="secondary">Category</Badge><Badge bg="secondary">Category</Badge><Badge bg="secondary">Category</Badge><Badge bg="secondary">Category</Badge><Badge bg="secondary">Category</Badge><Badge bg="secondary">Category</Badge><Badge bg="secondary">Category</Badge><Badge bg="secondary">Category</Badge><Badge bg="secondary">Category</Badge>
                    </h4>
                    <br /> <br />
                </Col>
                <Col></Col>
            </Row>
            <br />
            <div style={{ alignItems: "right", justifyContent: "right", display: "flex" }}>
                <Button variant="secondary" onClick={() => {
                    localStorage.setItem("step", "BI")
                    window.location.href = "/ShopSetup"
                }}>Save & Continue</Button>{' '}
            </div>
        </>
    );
}

export default BusinessCategory;

