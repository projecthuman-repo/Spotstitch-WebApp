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
                <Col xs={10} style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>Billing Information
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col xs={10} style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>Input your billing information. This is how you'll get paid
                </Col>
                <Col></Col>
            </Row>
            <br />
            <Row style={{ borderStyle: "solid", borderRadius: "5px", borderColor: "#d3d3d3cc" }}>
                <Col></Col>
                <Col>
                    Seller type
                    <br />
                    For tax purposes, what type of seller are you?
                    <Form>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Individual"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Business"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                            </div>
                        ))}
                    </Form>
                    Vendor Information
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control placeholder="First name" />
                        <Form.Control placeholder="Last name" />
                    </Form.Group>

                    Date of birth
                    <Form.Select aria-label="Default select example">
                        <option>Day</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                        <option>Month</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                        <option>Year</option>
                    </Form.Select>

                    Tax payer address
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control placeholder="Number" />
                        <Form.Control placeholder="Street name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control placeholder="City/town" />
                        <Form.Control placeholder="State/province/region" />
                        <Form.Control placeholder="Country" />
                        <Form.Control placeholder="Postal code" />
                    </Form.Group>

                    Add a credit card
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control placeholder="Card number" />
                        <Form.Control placeholder="Expiration date" />
                        <Form.Control placeholder="CVV" />
                        <Form.Control placeholder="Name on card" />
                    </Form.Group>
                    <br/>
                </Col>
                <Col></Col>
            </Row>
            <br />
            {/* Next Step */}
            <div style={{ alignItems: "right", justifyContent: "right", display: "flex" }}>
                <Button variant="secondary" onClick={() => {
                    localStorage.setItem("step", "BC2")
                    window.location.href = "/ShopSetup"
                }}>Save & Continue</Button>{' '}
            </div>
        </>
    );
}

export default BusinessName;

