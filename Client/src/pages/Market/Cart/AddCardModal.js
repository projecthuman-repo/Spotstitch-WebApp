import { useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { add, chevronRight } from "../../../assets/icons";

import '../Market.css'
import { useDispatch, useSelector } from "react-redux";
import { useAddCardMutation } from "../../../services/wallet";
import { setUserData } from "../../../features/User/userSlice";

function AddCardModal() {
    
    const [show, setShow] = useState(false);
    const [addCard, {}] = useAddCardMutation()
    const [cardNumber, setCardNumber] = useState("")
    const [cardOwner, setCardOwner] = useState("")
    const [cvv, setCVV] = useState("")
    const dispatch = useDispatch()

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
                handleClose()
            }
        } catch (error) {
            console.log('rejected', error.message)
        }
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
                    <Form itemID="card" onSubmit={handleSubmit}>
                        <Form.Group className="mt-2 mx-4" itemID="card.name">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='input' placeholder="" className="round-s" />
                        </Form.Group>

                        <Row>
                            <Col lg={12}>
                                <Form.Group className="mt-2 mx-4 form-address" itemID="card.number">
                                    <Form.Label>Card information</Form.Label>
                                    <Form.Control type='input' placeholder="Card Number" className="round-s" value={cardNumber}
                                    onChange={(e) => { setCardNumber(e.target.value) }}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mt-2 ms-4 form-address" itemID="card.expiry">
                                    
                                    <Form.Control type='input' placeholder="MM / YY" className="round-s" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mt-2 me-4" itemID="card.cvc">
                                    
                                    <Form.Control type='input' placeholder="CCV" className="round-s" 
                                    onChange={(e) => { setCVV(e.target.value) }}/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mt-2 mx-4" itemID="card.name">
                            <Form.Label>Name on card</Form.Label>
                            <Form.Control type='input' placeholder="" className="round-s" 
                            onChange={(e) => { setCardOwner(e.target.value) }}/>
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
                            <button className="btn-address-save p-2 px-5 mx-auto" type="submit">Save and continue</button>
                        </div>


                    </Form>
                </Modal.Body>


            </Modal>
        </>
    )


}

export default AddCardModal