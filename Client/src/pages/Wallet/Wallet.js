import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Col, Container, Row } from "react-bootstrap";
import PageNav from "../../components/pageNav/PageNav";
import PageSide from "../../components/pageNav/PageSide";
import Payment from "./Payment";
import Orders from "./Orders";
import Refunds from "./Refunds";

import './wallet.css';

let stripePromise
// Defer Stripe Loading
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);

    }
    return stripePromise;
};

const Wallet = () => {
    const sideTabs = ['Payment','Orders','Refunds & Returns']
    const [sideTab, setSideTab] = useState(0)
    const tabComponents = [<Payment />, <Orders />, <Refunds />]


    const item = {
        price: "price_1MbA29GiyeHuDZKsbhc6niv2",
        quantity: 1
    };

    const checkoutOptions = {
        lineItems: [item],
        mode: "payment",
        successUrl: "https://www.google.com/",
        cancelUrl: `https://www.bing.com/`,
    }

    const redirectToCheckout = async () => {
        console.log("redirectToCheckout")

        const stripe = await getStripe()
        const { error } = await stripe.redirectToCheckout(checkoutOptions)
        console.log("Stripe checkout error", error)
    }


    return (
        <Container className="mt-4">
            <PageNav options={['Wallet']} />
            <Row>
                <Col lg={3}>
                    <PageSide options={sideTabs} tabFn={setSideTab} tab={sideTab} />
                </Col>
                <Col lg={9}>
                    {tabComponents[sideTab]}
                </Col>
            </Row>
        </Container>
        

    )
}

export default Wallet


/*

<div className="container">
    
        <div className="title">
            Wallet
        </div>
        <div className="body">
            <div className="leftbox">
            <Link to="/wallet" className="lboxpayment">Payment</Link>
            <Link to="/transaction" className="">Orders</Link>
            <Link to="/refunds" className="">Refunds & return</Link>
            <Link to="/refundspolicy" >Refunds Policy</Link>
            
        
            </div>

            <div className="rightbox">
                <div className="rboxtitle">Payment</div>
                
                    
                        <h4 className="itemtitle">Lawn Mower</h4>
                        <img className="lawnmower" src={lawnmowercopy} alt="Lawn Mower" />
                        <div className="price">129 $</div>
                    
                    
                    <a className="checkoutlink" href="https://buy.stripe.com/test_7sI17GfGDcFa0MM9AA">
                        <button className="checkoutbutton" onClick={redirectToCheckout}>Checkout</button>
                    </a>
                    
        
            </div>
            
        </div>
        <div className="footer"></div>


    </div>


*/