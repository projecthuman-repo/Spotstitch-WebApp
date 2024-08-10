import { useState } from "react";

import holderimg from "../../assets/holderimg.png";
import "./AccountSetupA.9.2.css";
import { useNavigate } from "react-router-dom";
import sslogo from "../../assets/sslogo.png";
function AccountSetupPageTwo() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/AccountSetupPageThree");
  };
  const [hashtagDes, setHashtagDes] = useState("");
  const [hashtagKeyword, setHashtagKeyword] = useState("");
  const handlehashtagDesChange = (event) => {
    setHashtagDes(event.target.value);
  };
  const handlesetHashtagKeywordChange = (event) => {
    setHashtagKeyword(event.target.value);
  };
  return (
    <>
      <div className="main-form-AccountSetupPageOne">
        <div className="main-body-AccountSetupPageOne">
          <div className="left-account-setup">
            <img className="holderimg" src={holderimg} alt="holderimg" />
          </div>
          <div className="right-account-setup2">
            <h3 className="account-setup2-title">Generate your hashtags</h3>
            <p className="account-setup2-title-des">
              Let AI come up with hashtag suggestions for your store.
            </p>
            <div className="input-description-account-setup2">
              <label className="input-description-account-setup2-content">
                Description
                <textarea
                  type="text"
                  value={hashtagDes}
                  placeholder="type your description"
                  onChange={handlehashtagDesChange}
                ></textarea>
              </label>
            </div>
            <div className="input-description-account-setup2">
              <label className="input-description-account-setup2-content">
                Keywords
                <textarea
                  type="text"
                  value={hashtagKeyword}
                  placeholder="type your keywords"
                  onChange={handlesetHashtagKeywordChange}
                ></textarea>
              </label>
            </div>
          </div>
        </div>
        <div className="buttons-account-setup2">
          <button className="back-button-billing-info" onClick={handleSubmit}>
            Skip
          </button>
          <button
            className="save-continue-account-setup2"
            onClick={handleSubmit}
          >
            Generate hashtag
          </button>
        </div>
        <div
          style={{
            marginLeft: "auto",
            width: "fit-content",
            marginRight: "100px",
          }}
        >
          <img className="logo-account-setup" src={sslogo}></img>
        </div>
      </div>
    </>
  );
}

export default AccountSetupPageTwo;
