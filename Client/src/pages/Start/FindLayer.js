import React from "react";
import "./FindLayer.css";
import holderimg from "../../assets/holderimg.png";
import { useState } from "react";


import { Link } from "react-router-dom";

    const FindLayer = () => {

  
    

    return (
        <>
        <div className="boss">
        <div className="left">
        <img className="holderimg" src={holderimg}  alt="holderimg"/>
        </div>


        <div className="right">
            <div className="topspace"></div><div className="topspace"></div>

            <div className="welcometitle1">Find your layer at Spotstitch!</div>
            <br/><br/><br/>
            <div className="smalldescription1">Layers are small communities with like-minded people. You can participate in group activities and projects here.</div>
            <br/><br/>
            <div className="layerjoinbox">
              <button className="layerjoin">
                  <span class="textl">Layer Category</span>
                  <span class="textr">Join</span>
              </button>
              <button className="layerjoin">
                  <span class="textl">Layer Category</span>
                  <span class="textr">Join</span>
              </button>
              <button className="layerjoin">
                  <span class="textl">Layer Category</span>
                  <span class="textr">Join</span>
              </button>
              <button className="layerjoin">
                  <span class="textl">Layer Category</span>
                  <span class="textr">Join</span>
              </button>
              <button className="layerjoin">
                  <span class="textl">Layer Category</span>
                  <span class="textr">Join</span>
              </button>
            </div>
          
     
            
            <div className="space1"/>
            <div className="skipnextbox">
                <Link to='/vendoraccountsetup' className="linkskipbutton"><button className="skipbutton">Skip</button></Link>

                <Link to='/vendoraccountsetup' className="linknextbutton"><button className="nextbutton">Next</button></Link>

            </div>
            <div className="botspace"></div>
            
            
        </div>

        </div>
        </>
    )
}

export default FindLayer