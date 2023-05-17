import React, { useState, useEffect } from "react";
import "react-step-progress-bar/styles.css";
import Progress from "./Progress"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BusinessPreferences from "./Steps/BusinessPreferences"
import BusinessName from "./Steps/BusinessName"
import BusinessCategory from "./Steps/BusinessCategory"
import BillingInformation from "./Steps/BillingInformation"

function ShopSetup() {
    // getting current step from the state variable
    const [step, setStep] = useState("BP")

    useEffect(() => {
        if (localStorage.getItem("step")) {
            setStep(localStorage.getItem("step"))
        }
    }, []);

    return (
        <>
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={10}><Progress></Progress></Col>
                    <Col></Col>
                </Row>
                <br /><br /><br /><br />
                {/* Determines which step we are currently on and renders appropriately */}
                {step === "BP" && (
                    <BusinessPreferences />
                )}
                {step === "BN" && (
                    <BusinessName></BusinessName>
                )}
                {step === "BC" && (
                    <BusinessCategory></BusinessCategory>
                )}
                {step === "BI" && (
                    <BillingInformation></BillingInformation>
                )}
            </Container>
        </>
    );
}

export default ShopSetup;

