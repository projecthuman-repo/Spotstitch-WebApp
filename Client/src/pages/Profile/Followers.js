import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Modal, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom"

import './profile.css'
import PageNav from "../../components/pageNav/PageNav";

function Followers({ text, startTab, numOfFollowers = 0 }) {
    const user = useSelector((state) => state.user);
    const following = useSelector((state) => state.user.following); // Use this for following (Look in mongoDB/Schema/User.js for fields)
    const followers = useSelector((state) => state.user.followers); // Use this for followers

    const [tab, setTab] = useState(startTab);

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
            <button className="btn border-0" onClick={handleShow}>
                <div>{text}</div>
                <div className="fs-32 text-start">{numOfFollowers}</div>
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                className="modal content-border-l round-l"
                dialogClassName="modal-dialog"
                contentClassName="modal-content"
                aria-labelledby="modal"
                backdrop="static"
                size="lg"
            >
                <Modal.Header className="py-0 underline" closeButton>
                    <Row className="w-100">
                        <PageNav options={['Followers', 'Following']} tabFn={setTab} tab={tab} className="g-0"/>
                    </Row>

                </Modal.Header>
                <Modal.Body className="mt-0 pt-0 mx-3">

                    {/* Placeholders below */}

                    {['12', '23', '232'].map((user) => {
                        return <Row className="my-4 px-2" key={`user_${user}`}>
                            <Col lg={2} sm={2} xs={3}><img className="float-end avatar" src={''} height={61} width={61}/></Col>
                            <Col lg={7} sm={7} xs={9}>
                                <div>Username</div>
                                <div className="fs-12">Name</div>
                                <div className="fs-11">Lorem ipsum dolor sit amet consectetur. 
                                    Dapibus mauris scelerisque egestas scelerisque lectus pellentesque ante. 
                                    Porttitor congue sed vivamus vel vulputate aliquet.</div>
                            </Col>
                            <Col lg={2} sm={2} className="d-flex py-2"><button className="btn btn-follower px-3 m-2 m-auto">Following</button></Col>
                        </Row>
                    })}

                </Modal.Body>


            </Modal>
        </>
    )
}

export default Followers