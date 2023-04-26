import React, { useState } from "react";
import "./AccountSetupA3.css";

import sslogo from '../../assets/sslogo.png';
import holderimg from "../../assets/holderimg.png";

import { Link } from "react-router-dom";

const AccountSetup = () => {

    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission here
    }

    return (
        <>
        <div className="boss">
        <div className="left">
        <img className="holderimg" src={holderimg}  alt="holderimg"/>
        </div>


        <div className="right">
            <div className="topspace"></div>
            <img className="sslogo" src={sslogo}  alt="sslogo"/>
            <div className="signuptitle">Account Information</div>
            <div className="signupdescription">We're designing and creating an open ecosystem; so innovative ideas can turn into world changing action.</div>
            <form className="formsignin" onSubmit={handleSubmit}>
                <input 
                    className="email" 
                    type="text" 
                    placeholder="Full Name" 
                    id="fname" 
                    name="fname" 
                    value={fullName} 
                    onChange={(event) => setFullName(event.target.value)} 
                />
                <br/>
                <input 
                    className="email" 
                    type="text" 
                    placeholder="User Name" 
                    id="username" 
                    name="username" 
                    value={username} 
                    onChange={(event) => setUsername(event.target.value)} 
                />
                <br/>
                <input 
                    className="email" 
                    type="tel" 
                    placeholder="Phone Number" 
                    id="phone" 
                    name="phone" 
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                    required 
                    value={phoneNumber} 
                    onChange={(event) => setPhoneNumber(event.target.value)} 
                />
                <br/>
                <input 
                    className="email" 
                    type="text" 
                    placeholder="Country" 
                    id="Country" 
                    name="Country" 
                    value={country} 
                    onChange={(event) => setCountry(event.target.value)} 
                />
                <br/>
                <input 
                    className="email" 
                    type="text" 
                    placeholder="State/Province" 
                    id="State/Province" 
                    name="State/Province" 
                    value={state} 
                    onChange={(event) => setState(event.target.value)} 
                />
             <br/><br/>
            <Link to='/emailverification'className="lacc"> <input className="signup" type="submit" value="Get Started"></input></Link> 
            </form>
            <br/><br/><br/>
            
            <div className="policy2"><span className="bold">Privacy Policy</span> and <span className="bold">Terms of Service</span> apply.</div>
          

            <div className="botspace"></div>
            
        </div>


        </div>
        </>
    )
}

export default AccountSetup