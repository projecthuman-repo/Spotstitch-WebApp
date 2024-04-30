import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal, Row, Col, Container, Form } from "react-bootstrap";

import './Wallet.css'
import { useAddCardMutation } from "../../services/wallet";
import { setUserData } from "../../features/User/userSlice";

function AddCard() {
    const user = useSelector((state) => state.user);
    const [addCard, {}] = useAddCardMutation()
    const [cardNumber, setCardNumber] = useState("")
    const [cardOwner, setCardOwner] = useState("")
    const [cvv, setCVV] = useState("")
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const cardRegex = / /
    const date = new Date()


    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const card = {
                cardNumber: cardNumber,
                cardOwner: cardOwner,
                cardType: "" // add verify card type functionality 
            }
            const res = await addCard({ card: card })
            if (res.error) throw new Error(res.error.data.error.message)
            if (res.data?.status == "ok") {
                const wallet = res.data?.wallet
                await dispatch(setUserData({ wallet: wallet }))
                window.location.reload();
            }
        } catch (error) {
            console.log('rejected', error.message)
        }
    }


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
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col lg={1}></Col>
                            <Col lg={6}>

                                <Form.Group>
                                    <Form.Label>Card number</Form.Label>
                                    <Form.Control type="number" value={cardNumber} 
                                    placeholder="Card Number"
                                    onChange={(e) => {setCardNumber(e.target.value)}}/>
                                </Form.Group>
                                <Form.Group className="mt-2">
                                    <Form.Label>Expiration date</Form.Label>
                                    <Row>
                                        <Col lg={5}><Form.Control type='month' placeholder={date.getMonth() + 1}></Form.Control></Col>
                                        <Col lg={5}><Form.Control type="year" placeholder={date.getFullYear()}></Form.Control></Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label>Name on card</Form.Label>
                                    <Form.Control type="text" value={cardOwner} onChange={(e) => {setCardOwner(e.target.value)}}></Form.Control>
                                </Form.Group>
                                <Row>
                                    <Col lg={7}><Form.Group className="mt-2">
                                        <Form.Label>CVV</Form.Label>
                                        <Form.Control type="number" value={cvv} onChange={(e) => {setCVV(e.target.value)}}></Form.Control>
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