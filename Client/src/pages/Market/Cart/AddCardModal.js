import { useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { add, chevronRight } from "../../../assets/icons";

import '../Market.css'

function AddCardModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    function handleSave(e) {
        e.preventDefault()
        handleClose()
    }

    return (
        <>
            <button className="btn" onClick={handleShow}><img src={add} className="px-3" />Add new credit/debit card</button>

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
                        <div className="mx-auto fs-24">Change payment method</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="">
                    <Form itemID="card">
                        <Form.Group className="mt-2 mx-4" itemID="card.name">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='input' placeholder="" className="round-s" />
                        </Form.Group>

                        <Row>
                            <Col lg={12}>
                                <Form.Group className="mt-2 mx-4 form-address" itemID="card.number">
                                    <Form.Label>Card information</Form.Label>
                                    <Form.Control type='input' placeholder="" className="round-s" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mt-2 ms-4 form-address" itemID="card.expiry">
                                    
                                    <Form.Control type='input' placeholder="MM / YY" className="round-s" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mt-2 me-4" itemID="card.cvc">
                                    
                                    <Form.Control type='input' placeholder="CVC" className="round-s" />
                                </Form.Group>

                            </Col>




                        </Row>


                        <Form.Group className="mt-2 mx-4" itemID="card.name">
                            <Form.Label>Name on card</Form.Label>
                            <Form.Control type='input' placeholder="" className="round-s" />
                        </Form.Group>

                        <Form.Group className="mt-2 mx-4" itemID="card.country">
                            <Form.Label>Country or region</Form.Label>
                            <Form.Control type='input' placeholder="" className="round-s" />

                        </Form.Group>

                        <Form.Group className="mt-2 mx-4" itemID="card.postalCode">
                            <Form.Control type='input' placeholder="Postal code" className="round-s" />

                        </Form.Group>

                        <div className="underline my-4"></div>
                        <div className="d-flex">
                            <button className="btn-address-save p-2 px-5 mx-auto" onClick={handleSave}>Save and continue</button>
                        </div>


                    </Form>
                </Modal.Body>


            </Modal>
        </>
    )


}

export default AddCardModal