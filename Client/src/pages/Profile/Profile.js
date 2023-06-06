import React, { useState } from "react";
import "./profile.css";
import { Col, Container, Row } from "react-bootstrap";
import Followers from "./Followers";
import AccountDetails from "./AccountDetails";
import PageNav from '../../components/pageNav/PageNav'
import UserPosts from "./UserPosts";

const Profile = () => {

    const [tab, setTab] = useState(0)

    const postExanples = ["", "", ""]

    return (
        <div>
            <PageNav options={['Profile']} tabFn={setTab} tab={tab} />

            <Container className="mt-3 content-border-l round-s">
                <Row className="p-5 underline bg-profile">
                    <Col lg={3}>
                        <div>
                            <img src="" className="avatar content-border-l" height={235} width={235} />
                        </div>
                        <div>
                            User name
                        </div>
                        <div>@AccountName</div>


                    </Col>
                    <Col>
                        <Row className="h-50 d-none d-sm-none d-md-none d-lg-block d-sm-block d-xm-block"></Row>
                        <Row className="mt-2">
                            <Col lg={10} xs={10}>
                                <div>
                                    <Followers text={'Following'} startTab={0} />
                                    <Followers text={'Followers'} startTab={1} />
                                    <a href="#posts" className="btn">
                                        <div>Posts</div>
                                        <div className="fs-32 text-start">0</div>
                                    </a>
                                    <div>Lorem ipsum dolor sit amet consectetur.
                                        Dapibus mauris scelerisque egestas scelerisque lectus pellentesque ante.
                                        Porttitor congue sed vivamus vel vulputate aliquet.</div>
                                </div>

                            </Col>
                            <Col lg={2} className="mt-3"><AccountDetails /></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="" id="posts">
                    <Col className="mx-5 mt-2">
                        {postExanples.map(post => {
                            const body = `Lorem ipsum dolor sit amet consectetur. Eget libero a convallis ut. Nunc fermentum et nunc commodo pulvinar lectus imperdiet vel tellus. Dolor accumsan elit consectetur fringilla dignissim. Quis elit egestas vulputate nec etiam mauris vel vel. Quisque amet sociis odio est neque.
                            #posttag #posttag`
                            return <UserPosts
                                img={require('./image-placeholder.jpg')}
                                avatar={""}
                                user={'name'}
                                desc={'desc'}
                                body={body} />
                        })}
                    </Col>
                </Row>
            </Container>
        </div>

    );
};



export default Profile;