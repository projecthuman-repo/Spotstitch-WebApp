import React from "react";
import "./Start.css";
import holderimg from "../../assets/holderimg.png";
import sslogo from '../../assets/sslogo.png';
import orline from '../../assets/orline.png';
import googlesignin from '../../assets/googlesignin.png';
import facesignin from '../../assets/facesignin.png';
import projectsignin from '../../assets/projectsignin.png';
import { Link } from "react-router-dom";

const Start = () => {
  
    return (
        
        <div className="boss">
        <div className="left">
        <img className="holderimg" src={holderimg}  alt="holderimg"/>
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

            <button className="googlebutton">
                <img src={googlesignin} alt="googlesignin" border="0" />
            </button>
           
            <button className="facebookbutton">
                <img src={facesignin} alt="facebooksignin" border="0" />
            </button>

            <button className="projectbutton">
                <img src={projectsignin} alt="projectsignin" border="0" />
            </button>

           
            


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