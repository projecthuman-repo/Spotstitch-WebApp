import React, { useState } from "react";
import ProgressBar from "./progressBar";
import Vector from "../../assets/icons/Vector.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./BusinessCategoryA.8.8.css";
function BusinessCategory() {
  //back button
  //save and continue
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/BillingInformation");
  };
  const handleBack = (event) => {
    event.preventDefault();
    navigate("/BusinessName");
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
      <div class="progress-bar-container">
        <ProgressBar />
      </div>
      <div className="main-form">
        <div className="heading">
          <h1 className="heading-busiessname">Product Type</h1>
          <p className="small-description-busiessname">
            What types of products does your business provide?
          </p>
        </div>
        <div className="form-container-business-category">
          <div class="input-wrapper">
            <input
              className="text-input-business-category"
              placeholder="Search"
            />
            <img src={Vector} className="input-icon"></img>
          </div>
          <div className="categories-business-category">
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
        </div>

        <div className="btns-business-category">
          <button className="back-button-business-name" onClick={handleBack}>
            Back
          </button>
          <button
            className="save-continue-btn-business-name"
            onClick={handleSubmit}
          >
            Save & Continue
          </button>
        </div>
      </div>
      <hr className="bot-divider"></hr>
    </>
  );
}

export default BusinessCategory;
