//Client/src/pages/Settings/General.js
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserProfileMutation } from "../../services/userApi";
import { useEffect } from "react";
import { setUserData } from "../../features/User/userSlice";

function General() {
    const messages = ['Send read receipts']
    const allowedMessages = ['Anyone', 'Friends', 'Friends of friends', 'Trade requests']
    const notifications = ['All', 'Messages', 'Comments on my posts', 'Replies to my Comment', 'Trade request', 'New events']
    const settings = useSelector(state => state.user.settings?.general)


    return <Container className="content-border-l round-s my-3 g-0">
        <section className="border-bottom mx-0">
            <Row className="m-3">
                <Col lg={12} className="fs-20 fw-500">General</Col>
            </Row>
        </section>
        <section className="border-bottom mx-0">
            <Row className="m-3">
                <Col lg={12}>
                    <p className="fw-600 fs-16 my-0">Messages</p>
                    {messages.map(setting => {
                        return <Row className="my-1">
                            <Col lg={9}>{setting}</Col>
                            <Col lg={1}>
                                <Form.Check name={setting} id={`${setting}_on`} type='radio' label={'On'} />
                            </Col>
                            <Col lg={1}>
                                <Form.Check name={setting} id={`${setting}_off`} type='radio' label={'Off'} />
                            </Col>
                        </Row>
                    })}
                </Col>

                <Col lg={12}>
                    <p className="fw-600 fs-16 my-0">Who's allowed to message you?</p>
                    {allowedMessages.map(setting => {
                        return <Row className="my-1">
                            <Col lg={9}>{setting}</Col>
                            <Col lg={1}>
                                <Form.Check name={setting} id={`${setting}_on`} type='radio' label={'On'} />
                            </Col>
                            <Col lg={1}>
                                <Form.Check name={setting} id={`${setting}_off`} type='radio' label={'Off'} />
                            </Col>
                        </Row>
                    })}
                </Col>
            </Row>
        </section>
        <section className="border-bottom mx-0">
            <Row className="m-3">
                <Col lg={12}>
                    <p className="fw-600 fs-16 my-0">Notifications</p>
                    {notifications.map(setting => {
                        return <Row className="my-1">
                            <Col lg={9}>{setting}</Col>
                            <Col lg={1}>
                                <Form.Check name={setting} id={`${setting}_on`} type='radio' label={'On'} />
                            </Col>
                            <Col lg={1}>
                                <Form.Check name={setting} id={`${setting}_off`} type='radio' label={'Off'} />
                            </Col>
                        </Row>
                    })}

                </Col>
            </Row>
        </section>
    </Container>
}

export default General