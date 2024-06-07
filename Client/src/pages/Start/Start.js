import React from "react";
import { useState, useEffect } from "react";
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
import { useGlobalContext } from '../../context/GlobalContext';

const Start = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginUser, { isLoading: isUpdating, isError }] = useLoginUserMutation();
    const [getUserProfile, { }] = useGetUserProfileMutation();
    const user = useSelector(state => state.user);
    const {
        sent, setSent,
        mainEmail, setMainEmail,
        accPassword, setAccPassword,
        switchUser, setSwitchUser
      } = useGlobalContext();
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (switchUser && sent != true) {
            setEmail(switchUser);
            setPassword(accPassword);
            console.log(switchUser, switchUser.length,"switch user")
            handleSwitch();
        }
    }, [switchUser]);



    function deepCopy(obj) {
        // Check if the value is an object or an array, and recursively copy it
        if (obj && typeof obj === 'object') {
            let copy = Array.isArray(obj) ? [] : {};
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    copy[key] = deepCopy(obj[key]);
                }
            }
            return copy;
        }
        // If not an object, return the value itself
        return obj;
    }

    async function submitForm(password,email){
        if (!password && !email) return
        // handle form submission here
        try {
            const secret = {
                username: email,
                password: password,
                mainmail: sent == true ? mainEmail : "",
            }
            if(sent == true)
                setSent(!sent);
            
            
            const res = await loginUser(secret)
            if (res.error) throw new Error(res.error.data.error)
            console.log("Ressponse: ",res)
            
            const token = res.data?.token
            if (!token) throw new Error("Token not found")

            // save login token for future access
            await dispatch(login({ token: token }))

            // get data from spotstitch database
            let userData = await getUserProfile()
            //userData.otherAccounts = res.data["otherAccounts"]
            //userData.user["otherAccounts"] = res.data["otherAccounts"]
            //userData.data.user.otherAccounts = res.data["otherAccounts"]
            // if(Object.isFrozen(userData.data.user)){
            //     userData.data.copyUser = {...userData.data.user}
            //     console.log(Object.isFrozen(userData.data.copyUser))
            // }
            userData = deepCopy(userData);
            console.log(Object.isFrozen(userData.data.user));
            console.log("RES_-------------", res)
            userData.data.user.id = res.data["banner"]
            userData.data.user.firstName = res.data["firstName"]
            userData.data.user.lastName = res.data["lastName"]
            userData.data.user.lastName = res.data["website"]
            userData.data.user.lastName = res.data["bio"]
            userData.data.user.otherAccounts = res.data["otherAccounts"]
            userData.data.user.displayName = res.data["displayName"]
            userData.data.user.bio = res.data["biography"]
            userData.data.user.website = res.data["website"]
            
            console.log(userData,"userData")
            if (userData.data?.status != "error") await dispatch(setUserData(userData.data?.user))
            else throw new Error(data.error)

            // navigate to home route
            navigate("/")
        } catch (error) {
            console.log("rejected", error.message)
        } 
    }

    function handleSwitch(){
        console.log(email, password,"handle switch")
        submitForm(accPassword,switchUser);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        submitForm(password,email);
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