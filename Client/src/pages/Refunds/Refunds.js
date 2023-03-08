import React from "react";
import { useState } from "react";
import './Refunds.css';

import { Link, useNavigate } from "react-router-dom";

const Refunds = () => {
    const [orderNumber, setOrderNumber] = useState("");
    const [sellerName, setSellerName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Searching for OrderNumber: ${orderNumber} and SellerName: ${sellerName} `)
      }


    return (
        <div className="container">
    
        <div className="title">
            Wallet
        </div>
        <div className="body">
            <div className="leftbox">
            <Link to="/wallet" className="">Payment</Link>
            <Link to="/transaction" className="">Orders</Link>
            <Link to="/refunds" className="lboxpayment">Refunds & return</Link>
            <Link to="/refundspolicy">Refunds Policy</Link>
        
            </div>

            <div className="rightbox">
                <div className="rboxtitle">Refunds & Return</div>
                
                <div className="refundsbox">
                    <div className="status">
                        <div className="inprogress">In Progress (0)</div>
                        <div className="awaiting">Awaiting Returns (0)</div>
                    </div>

                    <div className="searchbox">
                        <form onSubmit={handleSubmit}>
                            
                            <input className="ordernumber" type="text" placeholder="    Order Number" 
                            value={orderNumber}
                            onChange={(e) => setOrderNumber(e.target.value)}
                            />
                            
                            <input className="sellername" type="text" placeholder="    Seller Name"
                            value={sellerName}
                            onChange={(e) => setSellerName(e.target.value)}
                            />
                            <input className="searchbutton" type="submit" value="Search"/>
                            
                        </form>
                    
                    <div className="line"></div>



                    </div>

                    


                </div>



  

                    
                       
                  
        
            </div>
        </div>


        <div className="footer"></div>
    </div>
    )


}

export default Refunds