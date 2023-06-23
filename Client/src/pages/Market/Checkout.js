import { Col, Container, Row } from "react-bootstrap"

import './ShoppingCart.css'

function Checkout(){
    return <Container className="my-0">
        <Row>
            <Col lg={7}>t</Col>
            <Col lg={5} className="bg-checkout justify-content-center">
                <div>Order Summary</div>
                <div>Subtotal</div>
                <div>Delivery</div>
                <div className="underline">Estimated Tax</div>
                <div>Total</div>
                <button className="btn-checkout my-3 py-2">Confirm your order</button>
            </Col>
        </Row>
    </Container>
}

export default Checkout