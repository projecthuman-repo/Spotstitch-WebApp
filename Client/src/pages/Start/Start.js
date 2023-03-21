import React from "react";
import "./Start.css";
import HumanCityLogo from '../../assets/HumanCityLogo.png';
import sslogo from '../../assets/sslogo.png';
import orline from '../../assets/orline.png';
import GoogleButton from 'react-google-button';
import facebooksignin from '../../assets/facebooksignin.png'
import { Link } from "react-router-dom";

const Start = () => {
  
    return (
        
        <div className="boss">
        <div className="left">
        <img className="humanlogo" src={HumanCityLogo}  alt="humanlogo"/>
        </div>
        <div className="right">
            <div className="topspace"></div>
            <img className="sslogo" src={sslogo}  alt="sslogo"/>
            <div className="titlen">SPOTSTITCH</div>
            <div/>
            <input className="email" type="text" placeholder="    Email or Username" id="email" name="email"></input>
            <input className="password" type="password" placeholder="    Password"id="password" name="password"></input>
            <input className="signin" type="submit" value="Sign In"></input>
            
            <img className="lineor" src={orline}  alt="orline"/>

            <GoogleButton className="google"
                type="light" // can be light or dark
                onClick={() => { console.log('Google button clicked') }}
            />
            
            <img className="signfacebook" src={facebooksignin}  alt="facebookSignIn"/>

            <div className="needaccountbox">
               Need an account?
            </div>
            <Link to='/usersignup' className="createaccount">Create your account</Link>

            <div></div>
            <div></div>
            <div></div>
        </div>


        </div>
    )
}

export default Start