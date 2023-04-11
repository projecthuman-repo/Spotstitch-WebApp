import React from "react";
import "./AccountTypeSelection.css";
import holderimg from "../../assets/holderimg.png";



import { Link } from "react-router-dom";

const AccountTypeSelection = () => {

    return (
        <>
        <div className="boss">
        <div className="left">
        <img className="holderimg" src={holderimg}  alt="holderimg"/>
        </div>


        <div className="right">
            <div className="topspace"></div><div className="topspace"></div>

            <div className="welcometitle">Welcome to Spotstitch!</div>
            <br/><br/><br/>
            <div className="smalldescription">First, what type of account are you looking for at Spotstitch?</div>
            <br/><br/>
            <div className="accounttypebuttonbox">
                <Link to='/bioinput' className="linkacctypebutton"> <button className="accounttypebutton">Personal Account</button></Link>
                <br/>
                <Link to='/bioinput' className="linkacctypebutton">< button className="accounttypebutton">Vendor Account</button></Link>
            </div>
            <div className="botspace"></div>
            
        </div>


        </div>
        </>
    )
}

export default AccountTypeSelection