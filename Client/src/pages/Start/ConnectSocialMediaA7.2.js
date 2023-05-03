import React from "react";
import "./ConnectSocialMedia.css";
import holderimg from "../../assets/holderimg.png";
import { useState } from "react";
import facebook from '../../assets/connectsocial/facebook.png'
import google from '../../assets/connectsocial/google.png'
import instagram from '../../assets/connectsocial/instagram.png'
import twitter from '../../assets/connectsocial/twitter.png'


import { Link } from "react-router-dom";

    const ConnectSocial = () => {
    
        
    

    return (
        <>
        <div className="boss">
        <div className="left">
        <img className="holderimg" src={holderimg}  alt="holderimg"/>
        </div>


        <div className="right">
            <div className="topspace"></div><div className="topspace"></div>

            <div className="welcometitle1">Connect your social media</div>
            <br/><br/><br/>
            <div className="smalldescription1">Link your accounts for a more immersive experience</div>
            <br/>
            <div className="socialscontainer">
                <button className="social">
                    <img src={google} alt="google"  />
                </button>
                <br/>
                <button className="social">
                    <img src={facebook} alt="facebook"  />
                </button>
                <br/>
                <button className="social">
                    <img src={instagram} alt="instagrm"  />
                </button>
                <br/>
                <button className="social">
                    <img src={twitter} alt="twitter"  />
                </button>
            </div>
        


          
     
            
            <div className="space1"/>
            <div className="skipnextbox1">
                <Link to='/categoryselection' className="linkskipbutton"><button className="skipbutton">Skip</button></Link>

                <Link to='/categoryselection' className="linknextbutton"><button className="nextbutton">Next</button></Link>

            </div>
            <div className="botspace"></div>
            
            
        </div>

        </div>
        </>
    )
}

export default ConnectSocial