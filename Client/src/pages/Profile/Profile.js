import React, { useState } from "react";
import "./Profile.css";
import { Col, Container, Row } from "react-bootstrap";
import Followers from "./Followers";
import AccountDetails from "./AccountDetails";
import PageNav from '../../components/pageNav/PageNav'

const Profile = () => {

    const [tab, setTab] = useState(0)


    return (
        <div>
            <PageNav options={['Profile']} tabFn={setTab} tab={tab}/>
            
            <Container className="mt-3 content-border-l round-s">
                <Row className="p-5 underline bg-profile">
                    <Col>
                        <img src="" className="avatar content-border-l" height={235} width={235} />
                    </Col>
                    <Col>
                        <Followers />
                        <AccountDetails />
                    </Col>
                </Row>
                <Row className="">
                    <Col>
                        test
                    </Col>
                </Row>
            </Container>
        </div>

    );
};



export default Profile;