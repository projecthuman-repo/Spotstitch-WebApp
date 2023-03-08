import React from "react";
import './RefundsPolicy.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";

const RefundsPolicy = () => {

    const notify = () => toast.success("You have successfully agreed to our refund policy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    return (
        <div className="container">
    
        <div className="title">
            Wallet
        </div>
        <div className="body">
            <div className="leftbox">
            <Link to="/wallet" className="">Payment</Link>
            <Link to="/transaction" className="">Orders</Link>
            <Link to="/refunds" >Refunds & return</Link>
            <Link to="/refundspolicy" className="lboxpayment">Refunds Policy</Link>
        
            </div>

            <div className="rightbox">
                <div className="rboxtitle">Refunds & Return Policy</div>
                
    <div class="containerpolicy">
      <div class="policy-section">
        <h2>At Spotstich, we are dedicated to ensuring that our customers are completely satisfied with their purchases.</h2>
        <p>If for any reason you are not happy with your purchase, we are here to help.</p>
      </div>
      <div class="policy-section">
    <h2>Refunds:</h2>
    <p>- Requests for refunds must be made within 30 days of the purchase date.</p>
    <p>- Products must be in their original packaging and in new, unused condition to be eligible for a refund.</p>
    <p>- Refunds will be processed within 7-10 business days of receiving the returned product.</p>
    <p>- Refunds will be made to the original payment method.</p>
  </div>

  <div class="policy-section">
    <h2>Returns:</h2>
    <p>- Requests for returns must be made within 30 days of the purchase date.</p>
    <p>- Products must be in their original packaging and in new, unused condition to be eligible for a return.</p>
    <p>- The customer is responsible for the cost of return shipping.</p>
    <p>- Returns will be processed within 7-10 business days of receiving the returned product.</p>
  </div>

  <div class="policy-section">
    <h2>Exceptions:</h2>
    <p>- Custom or personalized products are not eligible for refund or return.</p>
    <p>- Products purchased on clearance or as a final sale are not eligible for refund or return.</p>
  </div>

  <div class="policy-section">
    <h2>Contact Us:</h2>
    <p>If you need to request a refund or return, please don't hesitate to contact our friendly customer service team at jamesrhules@gmail.com. We are here to help!</p>
    <p>At Spotstich, we are committed to providing our customers with the best possible shopping experience. If you have any questions or concerns, please don't hesitate to reach out to us.</p>
  </div>




    </div>

                    
                       
                  
                        <button className="agreebutton" onClick={notify}>I agree with the policy</button>
                        <ToastContainer position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                    
        
            </div>
        </div>


        <div className="footer"></div>
    </div>
    )


}

export default RefundsPolicy