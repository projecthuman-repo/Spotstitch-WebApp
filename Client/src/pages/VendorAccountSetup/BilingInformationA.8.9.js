import { useState } from "react";
import ProgressBar from "./progressBar";
import "./BilingInformationA.8.9.css";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
function BilingInformation() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/BusinessCustomization");
  };
  const handleBack = (event) => {
    event.preventDefault();
    navigate("/BusinessCategory");
  };
  const [sellerType, setSellerType] = useState("");
  const handleSellerTypeChange = (event) => setSellerType(event.target.value);

  const [vendorFirstName, setVendorFirstName] = useState("");
  const handleVendorFirstNameChange = (event) =>
    setVendorFirstName(event.target.value);
  const [vendorLastName, setVendorLastName] = useState("");
  const handleVendorLastNameChange = (event) =>
    setVendorLastName(event.target.value);

  const [dobDay, setDobDay] = useState("");
  const handleDobDayChange = (event) => setDobDay(event.target.value);
  const [dobMonth, setDobMonth] = useState("");
  const handleDobMonthChange = (event) => setDobMonth(event.target.value);
  const [dobYear, setDobYear] = useState("");
  const handleDobYearChange = (event) => setDobYear(event.target.value);

  const [streetNumber, setStreetNumber] = useState("");
  const handleStreetNumberChange = (event) =>
    setStreetNumber(event.target.value);
  const [streetName, setStreetName] = useState("");
  const handleStreetNameChange = (event) => setStreetName(event.target.value);
  const [city, setCity] = useState("");
  const handleCityChange = (event) => setCity(event.target.value);
  const [state, setState] = useState("");
  const handleStateChange = (event) => setState(event.target.value);
  const [country, setCountry] = useState("");
  const handleCountryChange = (event) => setCountry(event.target.value);
  const [postalCode, setPostalCode] = useState("");
  const handlePostalCodeChange = (event) => setPostalCode(event.target.value);

  const [cardNumber, setCardNumber] = useState("");
  const handleCardNumberChange = (event) => setCardNumber(event.target.value);
  const [expDate, setExpDate] = useState("");
  const handleExpDateChange = (event) => setExpDate(event.target.value);
  const [cvv, setCvv] = useState("");
  const handleCvvChange = (event) => setCvv(event.target.value);
  const [cardholderName, setCardholderName] = useState("");
  const handleCardholderNameChange = (event) =>
    setCardholderName(event.target.value);

  return (
    <>
      <ProgressBar />
      <div className="body-billing-info">
        <div className="header-billing-info">
          <h1 className="page-title-billing-info">Billing Information</h1>
          <p className="small-description-billing-info">
            Input your billing information. This is how you'll get paid!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="main-form-content">
          <div className="Frame-2610814">
            <h3 className="form-element-header">Seller Type</h3>
            <p className="form-element-description">
              For tax purposes, what type of seller are you?
            </p>

            <div className="Frame-2610813">
              <label className="individual">
                Individual
                <input
                  type="radio"
                  name="sellerType"
                  value="Individual"
                  onChange={handleSellerTypeChange}
                ></input>
              </label>
              <label className="business">
                Business
                <input
                  type="radio"
                  name="sellerType"
                  value="Business"
                  onChange={handleSellerTypeChange}
                ></input>
              </label>
            </div>
          </div>
          <div className="Frame-2610815">
            <h3 className="form-element-header">Vendor Information</h3>
            <div className="Frame-2610812">
              <label className="vendor-first-name">
                First Name
                <input
                  type="text"
                  value={vendorFirstName}
                  onChange={handleVendorFirstNameChange}
                />
              </label>
              <label className="vendor-last-name">
                Last Name
                <input
                  type="text"
                  value={vendorLastName}
                  onChange={handleVendorLastNameChange}
                />
              </label>
            </div>
            <div className="Frame-2610811">
              <p className="DOB">Date of birth</p>
              <div style={{ display: " flex", gap: "10px" }}>
                <label className="DOB-D">
                  <select
                    name="day"
                    value={dobDay}
                    onChange={handleDobDayChange}
                  >
                    <option value="">Day</option>
                    {[...Array(31)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="DOB-M">
                  <select
                    name="month"
                    value={dobMonth}
                    onChange={handleDobMonthChange}
                  >
                    <option value="">Month</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="DOB-Y">
                  <select
                    name="year"
                    value={dobYear}
                    onChange={handleDobYearChange}
                    style={{ paddingRight: "25px" }}
                  >
                    <option value="">Year</option>
                    {[...Array(100)].map((_, i) => (
                      <option key={i} value={2022 - i}>
                        {2022 - i}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className="Frame-2610819">
            <h3 className="form-element-header">Tax Payer Address</h3>

            <div className="Frame-2610816">
              <label className="street-number">
                Number
                <input
                  type="text"
                  value={streetNumber}
                  onChange={handleStreetNumberChange}
                ></input>
              </label>
              <label className="street-name">
                Street Name
                <input
                  type="text"
                  value={streetName}
                  onChange={handleStreetNameChange}
                ></input>
              </label>
            </div>
            <div className="Frame-2610817">
              <label className="city-town">
                City/Town
                <input
                  type="text"
                  value={city}
                  onChange={handleCityChange}
                ></input>
              </label>
              <label className="state-province-region">
                State/Province/Region
                <input
                  type="text"
                  value={state}
                  onChange={handleStateChange}
                ></input>
              </label>
            </div>
            <div className="Frame-2610818">
              <label className="country">
                Country
                <input
                  type="text"
                  value={country}
                  onChange={handleCountryChange}
                ></input>
              </label>
              <label className="postal-code">
                Postal Code
                <input
                  type="text"
                  value={postalCode}
                  onChange={handlePostalCodeChange}
                ></input>
              </label>
            </div>
          </div>
          <div className="Frame-2610820">
            <h3 className="form-element-header">Add a Credit Card</h3>
            <div className="card-number-container">
              <label className="card-number">
                Card Number
                <input
                  type="text"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                ></input>
              </label>
            </div>
            <div className="expire-cvv">
              <label className="expirationDate">
                Expiration Date
                <input
                  type="text"
                  value={expDate}
                  onChange={handleExpDateChange}
                ></input>
              </label>
              <label className="cvv">
                CVV
                <input
                  type="text"
                  value={cvv}
                  onChange={handleCvvChange}
                ></input>
              </label>
            </div>

            <div className="name-on-card-container">
              <label className="name-on-card">
                Name on Card
                <input
                  type="text"
                  value={cardholderName}
                  onChange={handleCardholderNameChange}
                ></input>
              </label>
            </div>
          </div>
        </form>
        <div className="buttons-billing-info">
          <button className="back-button-billing-info" onClick={handleBack}>
            Back
          </button>
          <button
            className="save-continue-btn-billing-info"
            onClick={handleSubmit}
          >
            Save & Continue
          </button>
        </div>
      </div>
      <hr className="bot-line"></hr>
    </>
  );
}
export default BilingInformation;
