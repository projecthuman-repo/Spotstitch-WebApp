import { useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"

import './Wallet.css'

function Refunds() {
    const [inProgress, setInProgress] = useState(0)
    const [returns, setReturns] = useState(0)

    function search(e) {
        e.preventDefault()
    }

    return <Container className="content-border-l round-s my-3 g-0">
        <section className="border-bottom mx-0">
            <Row className="m-3">
                <Col lg={12} className="fs-20 fw-500">Refunds & Returns</Col>
            </Row>
        </section>
        <section>
            <div className="border-card m-4">
                <Row className="g-0">
                    <Col lg={2} className="m-3">
                        In Progress ({inProgress})
                    </Col>
                    <Col className="m-3">
                        Awaiting returns ({returns})
                    </Col>
                </Row>
                <Row className="underline g-0">
                    <Form>
                        <Row className="m-1 mb-5">
                            <Col lg={5}>
                                <Form.Control type="input" placeholder="Order Number" className="round-s p-2 m-1" />
                            </Col>
                            <Col lg={4}>
                                <Form.Control type="input" placeholder="Seller Name" className="round-s p-2 m-1" />
                            </Col>
                            <Col>
                                <button className="btn btn-order lighter px-5 float-end my-1" onClick={search}>Search</button>
                            </Col>
                        </Row>
                    </Form>
                </Row>
                <Row className="g-0 m-3">

                </Row>
            </div>

        </section>

    </Container>
}

export default Refunds