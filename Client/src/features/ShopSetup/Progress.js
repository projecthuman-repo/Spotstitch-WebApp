import React, { useState, useEffect } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./index.css"

// Overall Progress for Shop Setup
function Progress() {
    // state variable for current step
    const [step, setStep] = useState("BP")

    // current step will be retrieved from local storage
    useEffect(() => {
        if (localStorage.getItem("step")) {
            setStep(localStorage.getItem("step"))
        }
    }, []);

    // 0% = business preference, 25% = business name, etc
    let percentMap = {
        BP: 0,
        BN: 25,
        BC: 50,
        BI: 75,
        BC2: 100
    }

    // function to get the percent from the mapping
    function getPercent() {
        return percentMap[step]
    }

    {
        return (
            // Progress Bar from react-step-progress-bar library
            <ProgressBar percent={getPercent()} filledBackground="linear-gradient(to right, #d3d3d3cc, #d3d3d3cc)">
                {/* 5 Steps Below: */}
                <Step>
                    {({ accomplished, index }) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        >
                            <p style={{ color: "black", width: "300px", marginLeft: "-50px" }}>
                                <br /><br />Business Preferences
                            </p>
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished, index }) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        >
                            <p style={{ color: "black", width: "300px", marginLeft: "-50px" }}>
                                <br /><br />Business Name
                            </p>
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished, index }) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        >
                            <p style={{ color: "black", width: "300px", marginLeft: "-50px" }}>
                                <br /><br />Business Category
                            </p>
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished, index }) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        >
                            <p style={{ color: "black", width: "300px", marginLeft: "-50px" }}>
                                <br /><br />Billing Information
                            </p>
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished, index }) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        >
                            <p style={{ color: "black", width: "300px", marginLeft: "-50px" }}>
                                <br /><br />Business Customization
                            </p>
                        </div>
                    )}
                </Step>
            </ProgressBar >
        );
    }
}

export default Progress;