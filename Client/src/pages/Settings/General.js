import { Col, Container, Form, Row } from "react-bootstrap";

function General() {
    return <Container className="content-border-l round-s my-3 g-0">
        <Row className="border-bottom mx-0">
            <Col lg={8} className="fs-20 fw-500">General</Col>
            <Col lg={4}></Col>
        </Row>
        <Row>
            <Form>
                <Form.Check type="switch">

                </Form.Check>
            </Form>
            <Col lg={8}>
                <p>Messages</p>
                <p>Who's allowed to message you?</p>

            </Col>
            <Col lg={4}></Col>
        </Row>
        <Row>
            <Col lg={8}>Notifications</Col>
            <Col lg={4}></Col>
        </Row>
    </Container>
}

export default General