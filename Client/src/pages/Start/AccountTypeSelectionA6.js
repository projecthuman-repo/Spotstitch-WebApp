import React from "react";
import "./AccountTypeSelection.css";
import holderimg from "../../assets/holderimg.png";



import { Link, useNavigate } from "react-router-dom";
import { useUpdateAccountTypeMutation } from "../../services/userApi";
import { useDispatch } from "react-redux";

const AccountTypeSelection = () => {

    const [updateAccountType, {}] = useUpdateAccountTypeMutation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleType = async (type) => {
        try {
            const res = await updateAccountType(type)
            if (res.error) throw new Error(res.error.data.error.message)
            console.log(res.data)
            //dispatch()
            if (type == 'vendor') navigate('/vendoraccountsetup')
            else navigate('/bioinput')
        } catch (error) {
            console.log("rejected", error.message)
        }
    }

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

                <button className="accounttypebutton" onClick={() => { handleType("personal") }}>Personal Account
                </button>
                <br/>
                < button className="accounttypebutton" onClick={() => { handleType("vendor") }}>Vendor Account</button>
            </div>
            <div className="botspace"></div>
            
        </div>


        </div>
        </>
    )
}

export default AccountTypeSelection