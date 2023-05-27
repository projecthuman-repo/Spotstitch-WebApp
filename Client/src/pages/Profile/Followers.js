import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Modal, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom"

import './Profile.css'

function Followers() {
    const user = useSelector((state) => state.user);
    const [tab, setTab] = useState(1);

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    function tabOnChange(i) {
        setTab(i);
    }

    return (
        <>
            <button className="btn border-0" onClick={handleShow}>Followers</button>

            <Modal
                show={show}
                onHide={handleClose}
                className="modal content-border-l round-l"
                dialogClassName="modal-dialog"
                contentClassName="modal-content"
                aria-labelledby="modal"
            >
                <Modal.Header className="py-0 underline" closeButton>
                    <Row className="w-100">
                        <div className="d-flex justify-content-evenly">
                            <button className={tab == 1 ? "btn-nav active p-3" : "btn-nav p-3"} onClick={() => tabOnChange(1)}>
                                <p className='nopadding s-16 fw-500'>Followers</p></button>
                            <button className={tab == 2 ? "btn-nav active p-3" : "btn-nav p-3"} onClick={() => tabOnChange(2)}>
                                <p className='nopadding s-16 fw-500'>Following</p></button>
                        </div>
                    </Row>

                </Modal.Header>
                <Modal.Body className="mt-0 pt-0 mx-3">
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Modal.Body>


            </Modal>
        </>
    )
}

export default Followers