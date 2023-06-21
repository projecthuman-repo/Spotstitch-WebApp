import React, { useEffect } from "react";
import './ShoppingCart.css';


import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Recommendation from "./Recommendation";


const Market = () => {
    const numItems = 0
    const price = 0

    return (
        <Container className="my-4">
            <Row>
                <Col lg={8}>
                    <div className="content-border-s round-s">
                        <div className="underline px-4 py-3">
                            <div className="fs-18 fw-600">Shopping Cart</div>
                        </div>
                        <div className="px-3 py-3">
                        <div className="fs-18 fw-600">Items</div>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="content-border-s round-s py-3 px-4">
                        <div className="fs-18 fw-600">Summary ({numItems} items): ${price}</div>
                        <div><button className="btn-checkout my-3 py-2 w-100">Proceed to Checkout</button></div>
                        
                    </div>


                    <Recommendation />
                </Col>
            </Row>
        </Container>
    )


}

export default Market