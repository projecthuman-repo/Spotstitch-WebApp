import { useEffect, useState } from "react";
import { add, checked, chevronRight, mastercard, visa, } from "../../../assets/icons";
import { Col, Container, Modal, Row } from "react-bootstrap";
import AddCardModal from "./AddCardModal";
import { useDispatch, useSelector } from "react-redux";
import { useGetAddressQuery } from "../../../services/address";
import { useGetWalletQuery } from "../../../services/wallet";
import { setUserData } from "../../../features/User/userSlice";

function ChangeCardModal() {
    const walletResponse = useGetWalletQuery()?.data

    const wallet = useSelector(state => state.user?.wallet)
    const selectedCard = useSelector(state => state.user?.selectedCard)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    useEffect(async () => {
        if (walletResponse) {
            await dispatch(setUserData({ wallet: walletResponse.wallet }))
        }
    }, [walletResponse])

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    const selectCard = (card, index) => {
        const temp = {
            ...card,
            index: index
        }
        dispatch(setUserData({ selectedCard: temp }))
    }

    return (
        <>
            <button className="btn" onClick={handleShow}><img src={chevronRight} /></button>

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
                <Modal.Header className="py-0 border-0" closeButton>
                    <Modal.Title className="ms-auto p-3">
                        <div className="mx-auto fs-24">Change payment method</div>
                    </Modal.Title>


                </Modal.Header>
                <Modal.Body className="px-5 py-3">
                    <div>
                        {walletResponse && walletResponse.wallet.map((card, index) => {
                            return <Row className="my-3" key={`purchase_card_i_${index}`}
                                onClick={() => { selectCard(card, index) }}>
                                <Col lg={2} className="d-flex justify-content-center"><img src={visa} /></Col>
                                <Col lg={8}>
                                    <div>
                                        <span>{card.cardType || "Visa"} **** **** **** {card.cardNumber}</span> <br />
                                        <span className="py-0">Exp 03/07</span>
                                    </div>

                                </Col>
                                <Col lg={2}>{selectedCard?.index == index && <img src={checked} />}</Col>
                            </Row>
                        })}
                        {!walletResponse && (<Container>
                            <div className="justify-text-center">test</div>
                        </Container>)}
                        <div className="underline"></div>
                        <div><AddCardModal /></div>
                        <div><button className="btn"><img src={add} className="px-3" />Paypal</button></div>
                    </div>
                </Modal.Body>


            </Modal>
        </>
    )
}

export default ChangeCardModal