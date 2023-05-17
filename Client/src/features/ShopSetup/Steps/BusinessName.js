import * as React from "react";
import "react-step-progress-bar/styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BusinessName() {
    return (
        <>
            <Row>
                <Col></Col>
                <Col xs={10} style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>Name your Business
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col xs={10} style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>No rush! You may use draft names for now and change it later.
                </Col>
                <Col></Col>
            </Row>
            <br />
            <Row style={{ borderStyle: "solid", borderRadius: "5px", borderColor: "#d3d3d3cc" }}>
                <Col></Col>
                <Col>
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control placeholder="Enter your business name" />
                        <Form.Text>
                            Between 4-20 characters
                        </Form.Text>
                        <br />
                        <Form.Text>
                            No special characters, or accented letters
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col></Col>
            </Row>
            <br />
            {/* Next Step */}
            <div style={{ alignItems: "right", justifyContent: "right", display: "flex" }}>
                <Button variant="secondary" onClick={() => {
                    localStorage.setItem("step", "BC")
                    window.location.href = "/ShopSetup"
                }}>Save & Continue</Button>{' '}
            </div>
        </>
    );
}

export default BusinessName;

