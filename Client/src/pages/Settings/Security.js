//Client/src/pages/Settings/Security.js
import { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";

function Security() {
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const viewOptions = ['Anyone', 'Friends', 'Friends of friends']

    function updatePassword(e) {
        console.log(`${currentPassword}, ${newPassword}, ${confirm}`)
        if (newPassword != confirm) {
            return console.log('passwords do not match')
        }
    }

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
                        <Form.Control type="input" className="round-s"></Form.Control>
                    </Col>
                    <Col lg={2}><button className="btn link px-5">Update</button></Col>
                </Row>

                <p>Change password</p>
                <Row className="my-1">
                    <Col lg={6}><span className="align-middle">Old password</span></Col>
                    <Col lg={4}>
                        <Form.Control type="password" className="round-s" onChange={(e) => setCurrentPassword(e.target.value)}></Form.Control>
                    </Col>
                </Row>
                <Row className="my-1">
                    <Col lg={6}><span className="align-middle">New password</span></Col>
                    <Col lg={4}>
                        <Form.Control type="password" className="round-s" onChange={(e) => setNewPassword(e.target.value)}></Form.Control>
                    </Col>
                </Row>
                <Row className="my-1">
                    <Col lg={6}><span className="align-middle">Confirm new password</span></Col>
                    <Col lg={4}>
                        <Form.Control type="password" className="round-s" onChange={(e) => setConfirm(e.target.value)}></Form.Control>
                    </Col>

                    <Col lg={2}><button className="btn link px-5" onClick={updatePassword}>Update</button></Col>
                </Row>
            </Row>
        </section>

        <section className="border-bottom mx-0">
            <Row className="m-3">
                <Col lg={12}>
                    <p className="fw-600 fs-16 my-0">Account Visibility</p>
                    {['Enable Private Account'].map(setting => {
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
                    <p className="fw-600 fs-16 my-0">Who can see my profile?</p>
                    {viewOptions.map(setting => {
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

export default Security