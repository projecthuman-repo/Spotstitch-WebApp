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
                            <Col>

                                <Form.Group>
                                    <Form.Label>Card number</Form.Label>
                                    <Form.Control type="number"></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Expiration date</Form.Label>
                                    <Row>
                                        <Col><Form.Control type='number' value={date.getMonth()+1}></Form.Control></Col>
                                        <Col><Form.Control type="number" value={date.getFullYear()}></Form.Control></Col>
                                    </Row>


                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Name on card</Form.Label>
                                    <Form.Control type="text"></Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>


                </Modal.Body>


            </Modal>
        </>
    )
}

export default AddCard