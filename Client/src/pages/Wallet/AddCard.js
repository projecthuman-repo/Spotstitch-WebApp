import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Modal, Row, Col, Container, Form } from "react-bootstrap";

import './wallet.css'

function AddCard() {
    const user = useSelector((state) => state.user);

    const [show, setShow] = useState(false);

    const date = new Date()


    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };


    return (
        <>
            <button className="btn-payment py-2" onClick={handleShow}>Add new card</button>

            <Modal
                show={show}
                onHide={handleClose}
                className="modal content-border-l round-l"
                dialogClassName="modal-dialog"
                contentClassName="modal-content"
                aria-labelledby="modal"
                backdrop="static"
                size="lg"
                centered
            >
                <Modal.Header className="underline" closeButton>
                    <Row className="w-100">
                        <div className="d-flex justify-content-evenly my-1">
                            <div className="fs-24">Add new card</div>
                        </div>
                    </Row>

                </Modal.Header>
                <Modal.Body >
                    <Form>
                        <Row>
                            <Col lg={1}></Col>
                            <Col lg={6}>

                                <Form.Group>
                                    <Form.Label>Card number</Form.Label>
                                    <Form.Control type="number"></Form.Control>
                                </Form.Group>
                                <Form.Group className="mt-2">
                                    <Form.Label>Expiration date</Form.Label>
                                    <Row>
                                        <Col lg={5}><Form.Control type='number' value={date.getMonth() + 1}></Form.Control></Col>
                                        <Col lg={5}><Form.Control type="number" value={date.getFullYear()}></Form.Control></Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label>Name on card</Form.Label>
                                    <Form.Control type="text"></Form.Control>
                                </Form.Group>
                                <Row>
                                    <Col lg={7}><Form.Group className="mt-2">
                                        <Form.Label>CVV</Form.Label>
                                        <Form.Control type="text"></Form.Control>
                                    </Form.Group></Col>
                                </Row>

                            </Col>
                            <Col lg={1}></Col>
                        </Row>
                        <Row className="mt-3">
                            <Col><button className="btn p-2 px-5 mx-3 btn-card float-end">Save</button></Col>
                        </Row>
                    </Form>


                </Modal.Body>


            </Modal>
        </>
    )
}

export default AddCard