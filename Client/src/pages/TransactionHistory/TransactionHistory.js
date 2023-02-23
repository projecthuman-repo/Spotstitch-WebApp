import React from "react";
import './TransactionHistory.css';

const TransactionHistory = () => {
    return (
        <div className="TransactionHistoryContainer">
            <a className="Wallet">Back to Wallet (or wherever)</a>
            <div className="titleTH">
                Transaction History
            </div>
            <div className="bodyTH">
                <div className="leftboxTH">
                    <b className="lboxtitle" href="#">Sort By: </b>
                    <a className="lboxitem" href="#">Most recent </a>
                    <a className="lboxitem" href="#">Highest first </a>
                    <a className="lboxitem" href="#">Lowest first </a>
                    <a className="lboxitem" href="#">Placeholder </a>
                    <a className="lboxitem" href="#">Placeholder </a>

                </div>

                <div className="rightboxTH">
                    <div className="rboxtitleTH">Pending</div>
                    <div className="rboxtitleTH">Completed</div>
                    <div className="rboxbodyTH"></div>
                    <a className="rboxshowallTH">Show All</a>
                </div>
            </div>



        </div>


    )
}

export default TransactionHistory;