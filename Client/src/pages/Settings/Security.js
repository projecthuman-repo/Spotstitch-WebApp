import { Col, Container, Row, Form } from "react-bootstrap";

function Security() {
    const viewOptions = ['Anyone', 'Friends', 'Friends of friends']

    return <Container className="content-border-l round-s my-3 g-0">
        <section className="border-bottom mx-0">
            <Row className="m-3">
                <Col lg={12} className="fs-20 fw-500">Security</Col>
            </Row>
        </section>
        <section className="border-bottom mx-0">
            <Row className="m-3">
                <p>Login</p>
                <Row>
                    <Col lg={6}><span className="align-middle">Update email address</span></Col>
                    <Col lg={4}>
                        <Form>
                            <Form.Control type="input" className="round-s">

                            </Form.Control>

                        </Form>
                    </Col>
                    <Col lg={2}><button className="btn link px-5">Update</button></Col>
                </Row>

                <p>Change password</p>
                <Form>
                    <Row>
                        <Col lg={6}><span className="align-middle">Old password</span></Col>
                        <Col lg={4}>
                            <Form.Control type="input" className="round-s">

                            </Form.Control>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}><span className="align-middle">New password</span></Col>
                        <Col lg={4}>
                            <Form.Control type="input" className="round-s">

                            </Form.Control>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}><span className="align-middle">Confirm new password</span></Col>
                        <Col lg={4}>
                            <Form.Control type="input" className="round-s">

                            </Form.Control>
                        </Col>

                        <Col lg={2}><button className="btn link px-5">Update</button></Col>
                    </Row>




                </Form>
            </Row>
        </section>
        <section className="border-bottom mx-0">
            <Row className="m-3">
                <Col lg={12}>
                    <p className="fw-600 fs-16 my-0">Account Visibility</p>
                    <Row className="my-1"><Col lg={8}>Enable Private Account</Col><Col lg={4}><Form.Check type="switch"></Form.Check></Col></Row>
                    <p className="fw-600 fs-16 my-0">Who can see my profile?</p>
                    {viewOptions.map(setting => {
                        return <Row className="my-1"><Col lg={8}>{setting}</Col><Col lg={4}><Form.Check type="switch" id={setting}></Form.Check></Col></Row>

                    })}
                </Col>
            </Row>
        </section>


    </Container>
}

export default Security