import React from "react";
//import './Wallet.css';

const Wallet = () => {
return (
    <div className="container">
    
        <div className="title">
            Wallet
        </div>
        <div className="body">
            <div className="leftbox">
            <a className="lboxpayment" href="#">Payment </a>
            <a href="#">Orders </a>
            <a href="#">Refunds & return</a>
        
            </div>

            <div className="rightbox">
                <div className="rboxtitle">Payment</div>
                <div className="rboxbody"></div>
            </div>
        </div>



    </div>


)
}

export default Wallet;
