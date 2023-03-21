import React from "react";
import "./UserSignUpA2.css";
import HumanCityLogo from '../../assets/HumanCityLogo.png';
import sslogo from '../../assets/sslogo.png';
import orline from '../../assets/orline.png';
import JoinGoogle from '../../assets/JoinGoogle.png'
import JoinFacebook from '../../assets/JoinFacebook.png'

import GoogleButton from 'react-google-button';
import facebooksignin from '../../assets/facebooksignin.png'

import { Link } from "react-router-dom";

const UserSignUp = () => {

    return (
        <>
        <div className="boss">
        <div className="left">
        <img className="humanlogo" src={HumanCityLogo}  alt="humanlogo"/>
        </div>


        <div className="right">
            <div className="topspace"></div>
            <img className="sslogo" src={sslogo}  alt="sslogo"/>
            <div className="signuptitle">Let's get you stitched in!</div>
            <div className="signupdescription">We're designing and creating an open ecosystem; so innovative ideas can turn into world changing action. Our main operating goals are: to address human inequality, remediate social injustice and bridge the lack of access to human needs globally.</div>
            
            <input className="email" type="text" placeholder="    Email" id="email" name="email"></input>
            <br/>
            <input className="password" type="password" placeholder="    Password"id="password" name="password"></input>
            <br/>
            <input className="password" type="password" placeholder="    Confirm Password" id="confirmpassword" name="confirmpassword"></input>
            <br/>
            <div className="checkarea">
                <input className="checkboxpolicy" type="checkbox" />
                <div className="policy">I accept Spotstitch's <span className="bold">Privacy Policy</span> and <span className="bold">Terms of Service</span>.</div>
            </div>
            <br/>
                
            <Link to='/accountsetup'className="lacc"> <input className="signup" type="submit" value="Join Spotstitch"></input></Link>  
            <br/>
            <img className="lineor" src={orline}  alt="orline"/>
            <br/>
            <GoogleButton className="google"
                type="light" // can be light or dark 
            />
               
            <br/>
            <img className="signfacebook" src={facebooksignin}  alt="facebookSignIn"/>
            <br/>
            <div className="policy2"><span className="bold">Privacy Policy</span> and <span className="bold">Terms of Service</span> apply.</div>
          

            <div className="botspace"></div>
            
        </div>


        </div>
        </>
    )
}

export default UserSignUp