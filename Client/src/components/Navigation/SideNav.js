import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RxHamburgerMenu } from 'react-icons/rx'
import { Modal, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom"
import { inventory, messages, profile, settings, wallet } from '../../assets/icons'


function SideNav() {
    const user = useSelector((state) => state.user);
    const links = [
        { icon: profile, name: "Profile", destination: "/profile" },
        { icon: messages, name: "Messages", destination: "/messages" },
        { icon: inventory, name: "Inventory", destination: "/inventory" },
        { icon: wallet, name: "Wallet", destination: "/wallet" },
        { icon: settings, name: "Settings", destination: "/settings" }
    ]

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    return (
        <>
            <button className="btn border-0" onClick={handleShow}><RxHamburgerMenu size={30} /></button>

            <Modal
                show={show}
                onHide={handleClose}
                className="modal right"
                dialogClassName="modal-dialog"
                contentClassName="modal-content"
                aria-labelledby="right-side-modal"
            >
                <Modal.Header className="border-no pb-0" closeButton>

                </Modal.Header>
                <Modal.Body className="mt-0 pt-0 mx-3 d-flex flex-column">
                    <section>
                        <Row>
                            <Col lg={4} ><img className='avatar' src={''} height={88} width={88}></img></Col>
                            <Col lg={8} >
                                <p className="nopadding fs-16 fw-500 my-1">user</p>
                                <p className="nopadding fs-15 fw-300 my-1">account type</p>
                                <p className="nopadding fs-15 fw-400">email</p>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col lg={3} xs={4} className="text-center">
                                <span>5</span>
                                <p>Following</p>
                            </Col>
                            <Col lg={3} xs={4} className="text-center">
                                <span>5</span>
                                <p>Followers</p>
                            </Col>
                            <Col lg={3} xs={4} className="text-center">
                                <span>5</span>
                                <p>Layers</p>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <Row>
                            {
                                links.map(link => {
                                    return <Link to={link.destination} className="btn text-start my-1" onClick={handleClose}><Row>
                                        <Col sm={1} lg={1} className="mx-2"><img src={link.icon}></img></Col>
                                        <Col sm={5} lg={6} className="fs-20">{link.name}</Col>
                                    </Row></Link>
                                })
                            }
                        </Row>
                    </section>

                    <section className="mt-auto">
                        <Row className="mb-1"><Col><button className="btn nopadding mt-auto"><p className="fw-600 mb-0">Your Accounts</p></button></Col></Row>
                        {['Switch account', 'Add account', 'Convert to vendor'].map(option => {
                            return <Row><Col><button className="btn nopadding">{option}</button></Col></Row>
                        })}
                        <Row><Col><button className="btn nopadding mt-3"><p className="fw-600 mb-0">More Options</p></button></Col></Row>
                        {['See terms of service', 'See privacy policy'].map(option => {
                            return <Row><Col><button className="btn nopadding">{option}</button></Col></Row>
                        })}

                        <Row>
                            <Col className="mt-5"><button className="btn nopadding">Log Out</button></Col>
                        </Row>
                    </section>



                </Modal.Body>
            </Modal>
        </>
    );
};

export default SideNav