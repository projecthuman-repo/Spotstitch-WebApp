import { Col, Container, Form, Row } from "react-bootstrap";

function General() {
    const messages = ['Send read receipts']
    const allowedMessages = ['Anyone', 'Friends', 'Friends of friends', 'Trade requests']
    const notifications = ['All', 'Messages', 'Comments on my posts', 'Replies to my Comment', 'Trade request', 'New events']
    

    return <Container className="content-border-l round-s my-3 g-0">
        <Row className="border-bottom mx-0">
            <Col lg={12} className="fs-20 fw-500">General</Col>
        </Row>
        <Row className="border-bottom mx-0">
            <Col lg={12}>
                <p>Messages</p>
                {messages.map(setting => {
                    return <Row><Col lg={8}>{setting}</Col><Col lg={4}><Form.Check type="switch" id={setting}></Form.Check></Col></Row>

                })}
            </Col>

            <Col lg={12}>
                <p>Who's allowed to message you?</p>
                {allowedMessages.map(setting => {
                    return <Row><Col lg={8}>{setting}</Col><Col lg={4}><Form.Check type="switch"></Form.Check></Col></Row>
                })}
            </Col>
        </Row>
        <Row className="mx-0">
            <Col lg={12}>
                <p>Notifications</p>
                {notifications.map(setting => {
                    return <Row><Col lg={8}>{setting}</Col><Col lg={4}><Form.Check type="switch"></Form.Check></Col></Row>
                })}

            </Col>
        </Row>
    </Container>
}

export default General