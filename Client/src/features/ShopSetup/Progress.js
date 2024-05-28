import React, { useState, useEffect } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./index.css";

function Progress() {
  const [step, setStep] = useState("BP");

  useEffect(() => {
    if (localStorage.getItem("step")) {
      setStep(localStorage.getItem("step"));
    }
  }, []);

  let percentMap = {
    BP: 0,
    BN: 25,
    BC: 50,
    BI: 75,
    BC2: 100,
  };

  function getPercent() {
    return percentMap[step];
  }

  {
    return (
      <ProgressBar
        percent={getPercent()}
        filledBackground="linear-gradient(to right, #d3d3d3cc, #d3d3d3cc)"
      >
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              <p
                style={{ color: "black", width: "300px", marginLeft: "-50px" }}
              >
                <br />
                <br />
                Business Preferences
              </p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              <p
                style={{ color: "black", width: "300px", marginLeft: "-50px" }}
              >
                <br />
                <br />
                Business Name
              </p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              <p
                style={{ color: "black", width: "300px", marginLeft: "-50px" }}
              >
                <br />
                <br />
                Business Category
              </p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              <p
                style={{ color: "black", width: "300px", marginLeft: "-50px" }}
              >
                <br />
                <br />
                Billing Information
              </p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              <p
                style={{ color: "black", width: "300px", marginLeft: "-50px" }}
              >
                <br />
                <br />
                Business Customization
              </p>
            </div>
          )}
        </Step>
      </ProgressBar>
    );
  }
}

export default Progress;
