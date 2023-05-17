import React, { useState } from "react";
import { RxHamburgerMenu } from 'react-icons/rx'
import { Modal, Row, Col } from "react-bootstrap";
function SideNav() {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    return (
        <>
            <button className="btn border-0" onClick={handleShow}><RxHamburgerMenu /></button>

            <Modal
                show={show}
                onHide={handleClose}
                className="modal right"
                dialogClassName="modal-dialog"
                contentClassName="modal-content"
                size="lg"
                aria-labelledby="right-side-modal"
            >

                <Modal.Body>
                    <Row>
                        <Col>avater</Col>
                        <Col>
                            <p>user</p>
                            <p>account type</p>
                            <p>email</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p></p>
                            <p>Following</p>
                        </Col>
                        <Col>
                            <p></p>
                            <p>Followers</p>
                        </Col>
                        <Col>
                            <p></p>
                            <p>Layers</p>
                        </Col>
                    </Row>
                    <Row></Row>
                    <Row>
                        <Col>Your accounts</Col>
                    </Row>
                    <Row>
                        <Col>More Options</Col>
                    </Row>
                    <Row>
                        <Col>Log Out</Col>
                    </Row>
                    {/* Your modal content goes here */}
                </Modal.Body>

            </Modal>
        </>
    );
};

export default SideNav