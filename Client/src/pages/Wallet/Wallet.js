import React from "react";
import './Wallet.css';
import lawnmowercopy from '../../assets/lawnmowercopy.jpeg';
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import { Link, useNavigate } from "react-router-dom";

import { BrowserRouter as Router, Switch, 
    Route, Redirect,} from "react-router-dom";



import { loadStripe } from "@stripe/stripe-js";


let stripePromise
// Defer Stripe Loading
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);

    }
    return stripePromise;
};

const Wallet = () => {

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
    <div className="container">
    
        <div className="title">
            Wallet
        </div>
        <div className="body">
            <div className="leftbox">
            <Link to="/wallet" className="lboxpayment">Payment</Link>
            <Link to="/transaction" className="">Orders</Link>
            <Link to="/refunds" className="">Refunds & return</Link>
        
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



    </div>


)
}

export default Wallet