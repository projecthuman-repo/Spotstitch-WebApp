import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RxHamburgerMenu } from 'react-icons/rx'
import { Modal, Row, Col, Container } from "react-bootstrap";
import NavSelection from "./NavSelection";
import { inventory, messages, profile, settings, wallet } from '../../assets/icons'


function SideNav() {
    const user = useSelector((state) => state.user);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    return (
        <>
            <button className="btn border-0" onClick={handleShow}><RxHamburgerMenu size={30}/></button>

            <Modal
                show={show}
                onHide={handleClose}
                className="modal right"
                dialogClassName="modal-dialog"
                contentClassName="modal-content"
                size="lg"
                aria-labelledby="right-side-modal"
            >
                <Modal.Header className="border-no pb-0" closeButton>

                </Modal.Header>
                <Modal.Body className="mt-0 pt-0">
                    <Container>
                        <Row>
                            <Col lg={2}><img className='avatar' src={''} height={88} width={88}></img></Col>
                            <Col lg={10}>
                                <p className="nopadding fs-16 fw-500 my-1">user</p>
                                <p className="nopadding fs-15 fw-300 my-1">account type</p>
                                <p className="nopadding fs-15 fw-400">email</p>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col lg={2} className="text-center">
                                <span>5</span>
                                <p>Following</p>
                            </Col>
                            <Col lg={2} className="text-center">
                                <span>5</span>
                                <p>Followers</p>
                            </Col>
                            <Col lg={2} className="text-center">
                                <span>5</span>
                                <p>Layers</p>
                            </Col>
                        </Row>
                        <Row>
                            <NavSelection icon={profile} text={'Profile'} />
                            <NavSelection icon={messages} text={'Messages'} />
                            <NavSelection icon={inventory} text={'Inventory'} />
                            <NavSelection icon={wallet} text={'Wallet'} />
                            <NavSelection icon={settings} text={'Settings'} link="/settings" />
                        </Row>
                        <Row><Col><button className="btn nopadding"><p className="fw-600 mb-0">Your Accounts</p></button></Col></Row>
                        <Row><Col><button className="btn nopadding">Switch account</button></Col></Row>
                        <Row><Col><button className="btn nopadding">Add account</button></Col></Row>
                        <Row><Col><button className="btn nopadding">Covert to vendor</button></Col></Row>
                        <Row><Col><button className="btn nopadding mt-3"><p className="fw-600 mb-0">More Options</p></button></Col></Row>
                        <Row><Col><button className="btn nopadding">See terms of service</button></Col></Row>
                        <Row><Col><button className="btn nopadding">See privacy policy</button></Col></Row>

                        <Row>
                            <Col className="mt-5"><button className="btn nopadding">Log Out</button></Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default SideNav