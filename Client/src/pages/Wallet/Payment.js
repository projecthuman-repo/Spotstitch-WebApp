import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"

import { mastercard, visa } from "../../assets/icons"
import './Wallet.css'
import AddCard from "./AddCard"

function Payment() {

    const [cards, setCards] = useState([
        { number: "1234 5678 9101 1121", type: mastercard },
        { number: "1234 5678 9101 1121", type: visa },
        { number: "1234 5678 9101 1121", type: mastercard }
    ])

    return <Container className="content-border-l round-s my-3 g-0">
        <section className="border-bottom mx-0">
            <Row className="m-3">
                <Col lg={12} className="fs-20 fw-500">Payment</Col>
            </Row>
        </section>
        <section>
            <Row className="m-3">
                <Col lg={6}>
                    <p>Cards</p>
                    {cards.map(card => {
                        return <Container className="border-card mt-2 mb-3 py-2" style={{minHeight:"90px", height: "180px"}}>
                            <Row>
                                <Col lg={9} xs={9}>{card.number}</Col>
                                <Col lg={3} xs={2} className="d-flex flex-column" style={{minHeight:"90px", height: "170px"}}>
                                    <img src={card.type} width={54} height={42}/>
                                    <button className="btn mt-auto btn-outline-0">...</button>
                                </Col>
                            </Row>
                        </Container>
                    })}
                </Col>
                <Col lg={3} className="d-flex flex-column">
                    <p>Add new payment method</p>
                    <AddCard />
                </Col>
            </Row>
        </section>
    </Container>
}

export default Payment