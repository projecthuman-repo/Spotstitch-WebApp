import React, { useState } from "react";
import "./UserSignUpA2.css";
import HumanCityLogo from '../../assets/HumanCityLogo.png';
import sslogo from '../../assets/sslogo.png';
import orline from '../../assets/orline.png';
import axios from 'axios'
import holderimg from "../../assets/holderimg.png";
import googlesignin from '../../assets/googlesignin.png';
import facesignin from '../../assets/facesignin.png';
import projectsignin from '../../assets/projectsignin.png';
import { Link, useNavigate } from "react-router-dom";

const UserSignUp = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleSubmit = (event) => {
        console.log("Clicked")
        event.preventDefault();
        // handle form submission here
        const newUser = {
            name: 'John Doe',
            email: email,
            password: password,
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
          };
          
          axios.post('http://localhost:5001/users', newUser)
            .then(response => {
                console.log("Created")
              console.log(response.data); // Handle the response data
              navigate('/accountsetup');

            })
            .catch(error => {
              console.error(error); // Handle any errors
              console.log("error")
            });
        
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
            <div className="signuptitle">Let's get you stitched in!</div>
            <div className="signupdescription">We're designing and creating an open ecosystem; so innovative ideas can turn into world changing action. </div>
            
            <form className="formsignin" onSubmit={handleSubmit}>
                <input 
                    className="email" 
                    type="text" 
                    placeholder="     Email" 
                    id="email" 
                    name="email" 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)} 
                />
                <br/>
                <input 
                    className="password" 
                    type="password" 
                    placeholder="     Password"
                    id="password" 
                    name="password" 
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)} 
                />
                <br/>
                <input 
                    className="password" 
                    type="password" 
                    placeholder="     Confirm Password" 
                    id="confirmpassword" 
                    name="confirmpassword" 
                    value={confirmPassword} 
                    onChange={(event) => setConfirmPassword(event.target.value)} 
                />
                <br/>
                <div className="checkarea">
                    <input 
                        className="checkboxpolicy" 
                        type="checkbox" 
                        checked={acceptedTerms} 
                        onChange={(event) => setAcceptedTerms(event.target.checked)} 
                    />
                    <div className="policy">I accept Spotstitch's <span className="bold">Privacy Policy</span> and <span className="bold">Terms of Service</span>.</div>
                </div>
                <br/>
                <Link to='/accountsetup'className="lacc"> <button onClick = {handleSubmit} className="signup" type="submit">Join Spotstitch</button></Link>  
                
            </form>
             <br/>
            <img className="lineor" src={orline}  alt="orline"/>
            <br/>
            <button className="googlebutton">
                <img src={googlesignin} alt="googlesignin" border="0" />
            </button>
            <br/>
            <button className="facebookbutton">
                <img src={facesignin} alt="facebooksignin" border="0" />
            </button>
            <br/>
            <button className="projectbutton">
                <img src={projectsignin} alt="projectsignin" border="0" />
            </button>
            <br/>
            <div className="policy2"><span className="bold">Privacy Policy</span> and <span className="bold">Terms of Service</span> apply.</div>
          

            <div className="botspace"></div>
            
        </div>


        </div>
        </>
    )
}

export default UserSignUp