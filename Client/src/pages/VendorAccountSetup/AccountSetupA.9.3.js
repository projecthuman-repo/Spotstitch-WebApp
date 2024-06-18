import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sslogo from "../../assets/sslogo.png";
import holderimg from "../../assets/holderimg.png";
import "./AccountSetupA.9.3.css";
import styled from "styled-components";
function AccountSetupPageThree() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };
  const handleBack = (event) => {
    event.preventDefault();
    navigate("/AccountSetupPageTwo");
  };

  const Category = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    gap: 10px;

    width: 132px;
    height: 44px;

    background: #d9d9d9;
    border: none; /* make it borderless */
    color: black; /* set text color to black */
    border-radius: 15px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;


    }
  `;
  const categories = [
    "[category]",
    "[category]",
    "[category]",
    "[category]",
    "[category]",
    "[category]",
    "[category]",
    "[category]",
    "[category]",
    "[category]",
  ];
  return (
    <>
      <div className="main-form-AccountSetupPageOne">
        <div className="main-body-AccountSetupPageOne">
          <div className="left-account-setup">
            <img className="holderimg" src={holderimg} alt="holderimg" />
          </div>

          <div className="right-account-setup3">
            <div className="Frame-2610822">
              <p className="title-des-setup3">We offer you these</p>
              <p className="title-title-setup3">Choose your Hashtag(s)</p>
            </div>
            <div className="categories-setup3">
              {categories.map((category, i) => {
                return (
                  <Category
                    key={i}
                    className=" category-btn"
                    data-bs-toggle="button"
                  >
                    {category}
                  </Category>
                );
              })}
            </div>
            <button className="more-ideas-setup3">more ideas</button>
            <div className="buttons-account-setup3">
              <button className="back-button-billing-info" onClick={handleBack}>
                Back
              </button>
              <button
                className="save-continue-account-setup3"
                onClick={handleSubmit}
              >
                Buy
              </button>
            </div>
            <img className="logo-account-setup" src={sslogo}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountSetupPageThree;
