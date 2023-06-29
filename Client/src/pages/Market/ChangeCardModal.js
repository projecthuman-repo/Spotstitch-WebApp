import { useState } from "react";
import { add, checked, chevronRight } from "../../assets/icons";
import { Modal, Row } from "react-bootstrap";
import AddCardModal from "./AddCardModal";

function ChangeCardModal() {


    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

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