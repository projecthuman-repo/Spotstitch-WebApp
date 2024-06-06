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
    const socials = [
        { src: google, alt: "google" },
        { src: facebook, alt: "facebook" },
        { src: instagram, alt: "instagram" },
        { src: twitter, alt: "twitter" },
    ];

    return (
        <>
            <div className="boss">
                <div className="left">
                    <img className="holderimg" src={holderimg} alt="holderimg" />
                </div>

                <div className="right">
                    <div className="topspace" />

                    <div className="welcometitle1">Connect your social media</div>

                    <div className="smalldescription1">Link your accounts for a more immersive experience</div>

                    <div className="socialscontainer">
                        {socials.map((social, index) => (
                            <button key={index} className="social">
                                <img src={social.src} alt={social.alt} />
                            </button>
                        ))}
                    </div>

                    <div className="space1" />

                    <div className="skipnextbox">
                        <Link to='/categoryselection' className="linkskipbutton">
                            <button className="skipbutton">Skip</button>
                        </Link>

                        <Link to='/categoryselection' className="linknextbutton">
                            <button className="nextbutton">Next</button>
                        </Link>
                    </div>

                    <div className="botspace" />
                </div>
            </div>
        </>
    )
}

export default ConnectSocial