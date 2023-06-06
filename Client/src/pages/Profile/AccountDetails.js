import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Modal, Row, Col, Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom"

import { editAvatar, editBanner, removeBanner } from "../../assets/icons";

function AccountDetails() {
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
            <button className="btn btn-profile" onClick={handleShow}>Edit Account</button>

            <Modal
                show={show}
                onHide={handleClose}
                className="modal"
                dialogClassName="modal-dialog"
                contentClassName="modal-content"
                aria-labelledby="modal"
                backdrop="static"
                size="lg"
            >
                <Modal.Header className="py-0 underline" closeButton>
                    <Row className="w-100">
                        <Col>
                            <div className="d-flex justify-content-evenly">
                                <button className={tab == 1 ? "btn-nav active p-3" : "btn-nav p-3"} onClick={() => tabOnChange(1)}>
                                    <p className='nopadding s-16 fw-500'>Account</p></button>

                            </div>
                        </Col>
                    </Row>
                </Modal.Header>
                <Modal.Body className="mt-0 pt-0 p-0">
                    <Row className="d-flex">
                        <Form>
                            <Form.Group>
                                <div className="bg-banner row g-0 pt-5"
                                    style={{ backgroundImage: `url(${''}), linear-gradient(#D9D9D9 100%, #FFFFFF 1%)` }}>
                                    <Col lg={3} sm={6} xs={7}>
                                        <div
                                            className="avatar content-border-l mx-4 d-flex"
                                            style={{ width: '139px', height: '139px', backgroundImage: `url(${''})` }}>
                                                <img src={editAvatar} className="m-auto" width={30} height={30}/>
                                        </div>

                                    </Col>
                                    <Col lg={6} className="d-flex justify-content-evenly" sm={6} xs={5}>
                                        <img src={editBanner} className="" height={54} width={54} />
                                        <img src={removeBanner} className="" height={54} width={54} />
                                    </Col>
                                    <Col lg={3} sm={0} xs={0}>
                                    </Col>
                                </div>

                            </Form.Group>

                            <Form.Group className="mt-2 mx-4" itemID="account.name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type='input' placeholder="name" />
                            </Form.Group>

                            <Form.Group className="mt-2 mx-4" itemID="account.bio">
                                <Form.Label>Bio</Form.Label>
                                <Form.Control as="textarea" placeholder='old bio' rows={4} style={{ resize: 'none' }} />
                            </Form.Group>

                            <Form.Group className="mt-2 mx-4" itemID="account.website">
                                <Form.Label>Website</Form.Label>
                                <Form.Control type='input' placeholder="website" />
                            </Form.Group>

                            <button className="btn btn-profile my-2 mx-4 float-end">Save</button>

                        </Form>
                    </Row>
                </Modal.Body>


            </Modal>
        </>
    )
}

export default AccountDetails