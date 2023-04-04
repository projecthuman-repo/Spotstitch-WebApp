import React from "react";
import "./ProfileImageA5.css";
import holderimg from "../../assets/holderimg.png";
import sslogo from '../../assets/sslogo.png';
import photo from '../../assets/photo.png';

import { Link } from "react-router-dom";

const ProfileImage = () => {

    return (
        <>
        <div className="boss">
        <div className="left">
        <img className="holderimg" src={holderimg}  alt="holderimg"/>
        </div>


        <div className="right">
            <div className="topspace"></div><br/><br/>
            
            <img className="sslogo" src={sslogo}  alt="sslogo"/>
            <div className="signuptitle">Add a profile photo.</div>
            <br/>
            <div className="signupdescription">We're designing and creating an open ecosystem; so innovative ideas can turn into world changing action. </div>
            
           <br/>
            <img src={photo} alt='photo' className="photo"/>
            <br/><br/><br/>
            <div className="skipnextbox">
                <Link to='' className="linkskipbutton"><button className="skipbutton">Skip</button></Link>

                <Link to='' className="linknextbutton"><button className="nextbutton">Next</button></Link>

            </div>

            <br/><br/><br/>
            
            
            <div className="policy2"><span className="bold">Privacy Policy</span> and <span className="bold">Terms of Service</span> apply.</div>
          

            <div className="botspace"></div>
            
        </div>


        </div>
        </>
    )
}

export default ProfileImage