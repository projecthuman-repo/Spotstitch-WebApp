import React, { useEffect, useState } from "react";
import "./AccountSetupA3.css";

import sslogo from '../../assets/sslogo.png';
import holderimg from "../../assets/holderimg.png";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterUserMutation } from "../../services/userApi";
import { registerData, reset } from "../../features/User/registerSlice";

const AccountSetup = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const registerForm = useSelector(state => state.register)
    const [registerUser, { isLoading: isUpdating, isError }] = useRegisterUserMutation()

    useEffect(() => {
        setFirstName(registerForm.firstName)
        setLastName(registerForm.lastName)
        setUsername(registerForm.username)
        setPhoneNumber(registerForm.phoneNumber)
        setState(registerForm.province)
        setCountry(registerForm.country)
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        // handle form submission here
        dispatch(registerData({
            username: event.target.username?.value,
            firstName: event.target.firstName?.value,
            lastName: event.target.lastName?.value, 
            phoneNumber: event.target.phoneNumber?.value,
            country: event.target.country?.value,
            province: event.target.province?.value,
            appId: "spotstitch"
        }))

        try {
            const res = await registerUser(registerForm)
            console.log("success", res)
            if (res.error) {
                throw new Error(res.error.data.error)
            }
            navigate("/emailverification")
        } catch (error) {
            console.log("rejected", error.message)
        } finally {
            dispatch(reset())
        }
    }

    return (
        <>
            <div className="boss">
                <div className="left">
                    <img className="holderimg" src={holderimg} alt="holderimg" />
                </div>


                <div className="right">
                    <div className="topspace"></div>
                    <img className="sslogo" src={sslogo} alt="sslogo" />
                    <div className="signuptitle">Account Information</div>
                    <div className="signupdescription">We're designing and creating an open ecosystem; so innovative ideas can turn into world changing action.</div>
                    <form className="formsignin" onSubmit={handleSubmit}>
                        
                        <input
                            className="email"
                            type="text"
                            placeholder="First Name"
                            id="firstName"
                            name="firstName"
                            required
                            value={firstName}
                            onChange={(event) => {
                                localStorage.setItem(event.target.name, event.target.value)
                                setFirstName(event.target.value)
                            }}
                        />
                        <br />
                        <input
                            className="email"
                            type="text"
                            placeholder="Last Name"
                            id="lastName"
                            name="lastName"
                            required
                            value={lastName}
                            onChange={(event) => {
                                localStorage.setItem(event.target.name, event.target.value)
                                setLastName(event.target.value)
                            }}
                        />
                        <br />
                        <input
                            className="email"
                            type="text"
                            placeholder="User Name"
                            id="username"
                            name="username"
                            required
                            value={username}
                            onChange={(event) => {
                                localStorage.setItem(event.target.name, event.target.value)
                                setUsername(event.target.value)
                            }}
                        />
                        <br />
                        <input
                            className="email"
                            type="tel"
                            placeholder="Phone Number"
                            id="phoneNumber"
                            name="phoneNumber"
                            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                            required
                            value={phoneNumber}
                            onChange={(event) => {
                                localStorage.setItem(event.target.name, event.target.value)
                                setPhoneNumber(event.target.value)
                            }}
                        />
                        <br />
                        <input
                            className="email"
                            type="text"
                            placeholder="Country"
                            id="country"
                            name="country"
                            required
                            value={country}
                            onChange={(event) => {
                                localStorage.setItem(event.target.name, event.target.value)
                                setCountry(event.target.value)}
                            }
                        />
                        <br />
                        <input
                            className="email"
                            type="text"
                            placeholder="State/Province"
                            id="province"
                            name="province"
                            required
                            value={state}
                            onChange={(event) => {
                                localStorage.setItem(event.target.name, event.target.value)
                                setState(event.target.value)
                            }}
                        />
                        <br /><br />
                        <input className="signup" type="submit" value="Get Started"></input>
                    </form>
                    <br /><br /><br />

                    <div className="policy2"><span className="bold">Privacy Policy</span> and <span className="bold">Terms of Service</span> apply.</div>


                    <div className="botspace"></div>

                </div>


            </div>
        </>
    )
}

export default AccountSetup