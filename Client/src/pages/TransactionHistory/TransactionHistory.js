import React from "react";
import './TransactionHistory.css';
import itemPicture from '../../assets/lawnmowercopy.jpeg';

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

const TransactionHistory = () => {

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
        <div className="TransactionHistoryContainer">

            <div className="titleTH">
                Wallet
            </div>
            <div className="bodyTH">
                <div className="leftboxTH">
                    <Link to="/wallet" className="">Payment</Link>
                    <Link to="/transaction" className="lboxpayment">Orders</Link>
                    <Link to="/refunds" className="">Refunds & return</Link>
                    <Link to="/refundspolicy" >Refunds Policy</Link>
                </div>

                <div className="leftboxsortTH">
                    <b className="lboxtitleTH" href="#">Sort By: </b>
                    <a className="lboxitemTH" href="#">Most recent </a>
                    <a className="lboxitemTH" href="#">Highest first </a>
                    <a className="lboxitemTH" href="#">Lowest first </a>

                </div>

                <div className="rightbox">
                    <div className="rboxtitleTH">Pending</div>
                    <button id="Transaction" className="transaction">
                        <div className="transactionDate">2/05/2023</div>
                        <div className="transactionRelationship">John Doe</div>
                        <div className="transactionAmount">-$14.58</div>
                        <img src={itemPicture} className="transactionImage" style={{width: 50, height: 50}} />
                    </button>
                    <div className="rboxtitleTH">Completed</div>
                    <div className="rboxbodyTH"></div>
                    <a className="rboxshowallTH">Show All</a>
                </div>

            </div>
            <div className="footer"></div>


        </div>


    )
}

export default TransactionHistory
