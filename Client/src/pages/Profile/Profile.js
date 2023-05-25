import React from "react";
import "./Profile.css";
import { Col, Container, Row } from "react-bootstrap";

const Profile = () => {

    return (
        <div>
            <Container className="my-4">
                <Row className="mt-3 content-border-l round-s">
                    <Col>
                        <div className="d-flex justify-content-evenly">
                            <button className={"btn-nav active p-3"}>
                                <p className="nopadding s-16 fw-500">Profile</p>
                            </button>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>

    );
};



export default Profile;