import React from "react";
import { useState } from "react";
import "./Start.css";
import holderimg from "../../assets/holderimg.png";
import sslogo from '../../assets/sslogo.png';
import orline from '../../assets/orline.png';
import googlesignin from '../../assets/googlesignin.png';
import facesignin from '../../assets/facesignin.png';
import projectsignin from '../../assets/projectsignin.png';
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../services/loginApi";
import { useDispatch, useSelector } from "react-redux";
import { login, setUserData } from "../../features/User/userSlice";
import { useGetUserProfileMutation } from "../../services/userApi";

const Start = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginUser, { isLoading: isUpdating, isError }] = useLoginUserMutation();
    const [getUserProfile, { }] = useGetUserProfileMutation();
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!password && !email) return
        // handle form submission here
        try {
            const secret = {
                username: email,
                password: password
            }
            const res = await loginUser(secret)
            if (res.error) throw new Error(res.error.data.error)
            
            const token = res.data?.token
            if (!token) throw new Error("Token not found")

            // save login token for future access
            await dispatch(login({ token: token }))

            // get data from spotstitch database
            const data = await getUserProfile()
            console.log(data.data)
            if (data.data?.status != "error") await dispatch(setUserData(data.data.user))
            else throw new Error(data.error)

            // navigate to home route
            navigate("/")
        } catch (error) {
            console.log("rejected", error.message)
        } 
    }

    return (

        <div className="boss">
            <div className="left">
                <img className="holderimg" src={holderimg} alt="holderimg" />
            </div>
            <div className="right">
                <div className="topspace"></div>
                <img className="sslogo" src={sslogo} alt="sslogo" />
                <div className="titlen">SPOTSTITCH</div>
                <div />

                <form className="formsignin" onSubmit={handleSubmit}>

                    <input 
                    className="email" 
                    type="text" 
                    placeholder="     Email or Username" 
                    id="email" 
                    name="email" 
                    onChange={(event) => setEmail(event.target.value)} />

                    <input 
                    className="password" 
                    type="password" 
                    placeholder="     Password" 
                    id="password" 
                    name="password" 
                    onChange={(event) => setPassword(event.target.value)}/>

                    <input className="signin" type="submit" value="Sign In" />
                </form>

                <img className="lineor" src={orline} alt="orline" />

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