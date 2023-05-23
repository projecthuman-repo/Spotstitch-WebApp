import { Col, Container, Row, Form } from "react-bootstrap";

function Security() {
    return <Container className="content-border-l round-s my-3 g-0">
        <Row className="border-bottom mx-0">
            <Col lg={12} className="fs-20 fw-500">Security</Col>
        </Row>
        <Row className="border-bottom mx-0">
            <Row className="my-2">

                <Col lg={6}><span className="align-middle"></span></Col>
                <Col lg={4}>
                    <Form>
                        <Form.Control type="input" className="round-s">

                        </Form.Control>

                    </Form>
                </Col>
                <Col lg={2}><button className="btn link px-5">Update</button></Col>


                <Form>
                    <Col lg={6}><span className="align-middle"></span></Col>
                    <Col lg={4}>
                        <Form.Control type="input" className="round-s">

                        </Form.Control>
                        <Form.Control type="input" className="round-s">

                        </Form.Control>
                        <Form.Control type="input" className="round-s">

                        </Form.Control>
                    </Col>
                    <Col lg={2}><button className="btn link px-5">Update</button></Col>



                </Form>
            </Row>
        </Row>
    </Container>
}

export default Security