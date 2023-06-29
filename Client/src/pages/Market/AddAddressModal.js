import { useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { add, chevronRight } from "../../assets/icons";

import './Market.css'

function AddAddressModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    return (
        <>
            <button className="btn" onClick={handleShow}><img src={add} className="px-3" />Add new address</button>

            <Modal
                show={show}
                onHide={handleClose}
                className="modal"
                dialogClassName="modal-dialog-centered"
                contentClassName="modal-content"
                aria-labelledby="modal"
                backdrop="static"
                size="lg"
            >
                <Modal.Header className="py-0 underline" closeButton>
                    <button className='btn flip' onClick={handleClose}><img src={chevronRight} /></button>
                    <Modal.Title className="ms-auto p-3">
                        <div className="mx-auto fs-24" style={{ color: '#333333' }}>Add new address</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="">
                    <Form>
                        <Form.Group className="mt-2 mx-4" itemID="address.name">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type='input' placeholder="" className="round-s"/>
                        </Form.Group>

                        <Form.Group className="mt-2 mx-4" itemID="address.addressLine">
                            <Form.Label>Street address</Form.Label>
                            <Form.Control as="input" placeholder='' className="round-s"/>
                        </Form.Group>

                        <Form.Group className="mt-2 mx-4" itemID="address.apt">
                            <Form.Control as="input" placeholder='Apt, suite, etc. (optional)' className="round-s"/>
                        </Form.Group>

                        <Form.Group className="mt-2 mx-4" itemID="address.city">
                            <Form.Label>Town/city</Form.Label>
                            <Form.Control type='input' placeholder="" className="round-s"/>
                        </Form.Group>

                        <Row>
                            <Col lg={7}>
                                <Form.Group className="mt-2 ms-4 form-address" itemID="address.province">
                                    <Form.Label>Province</Form.Label>
                                    <Form.Control type='input' placeholder="" className="round-s"/>
                                </Form.Group>
                            </Col>
                            <Col lg={5}>
                                <Form.Group className="mt-2 me-4" itemID="address.postalCode">
                                    <Form.Label>Postal code</Form.Label>
                                    <Form.Control type='input' placeholder="" className="round-s"/>
                                </Form.Group>
                            </Col>




                        </Row>


                        <Form.Group className="mt-2 mx-4" itemID="address.city">
                            <Form.Label>Country/region</Form.Label>
                            <Form.Control type='input' placeholder="Canada (CA)" className="round-s border-0 fw-600" disabled />
                        </Form.Group>

                        <Form.Group className="mt-2 mx-4" itemID="address.phone">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type='input' placeholder="" className="round-s"/>
                        </Form.Group>
                        <div className="underline my-4"></div>
                        <div className="d-flex">
                            <button className="btn-address-save p-2 px-5 mx-auto">Save and continue</button>
                        </div>


                    </Form>
                </Modal.Body>


            </Modal>
        </>
    )


}

export default AddAddressModal