import React, { useEffect, useState } from "react";
import "./AccountSetupA3.css";

import sslogo from "../../assets/sslogo.png";
import holderimg from "../../assets/holderimg.png";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterUserMutation } from "../../services/loginApi";
import { registerData, reset } from "../../features/User/registerSlice";
import { useRegisterSpotstitchMutation } from "../../services/userApi";

const AccountSetup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerForm = useSelector((state) => state.register);
  const [registerUser, { isLoading: isUpdating, isError }] =
    useRegisterUserMutation();
  const [registerSpotstitch, {}] = useRegisterSpotstitchMutation();

  const selectCountries = ["Canada"];
  const selectProvinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
  ];

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setUsername(localStorage.getItem("username"));
    setPhoneNumber(localStorage.getItem("phoneNumber"));
    setState(localStorage.getItem("province"));
    setCountry(localStorage.getItem("country"));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // handle form submission here
    await dispatch(
      registerData({
        username: event.target.username?.value,
        firstName: event.target.firstName?.value,
        lastName: event.target.lastName?.value,
        phoneNumber: event.target.phoneNumber?.value,
        country: event.target.country?.value,
        province: event.target.province?.value,
        appId: "spotstitch",
      })
    );

    try {
      const registerServerResponse = await registerUser(registerForm);
      console.log("success", registerServerResponse.data);
      if (registerServerResponse.error) {
        throw new Error(registerServerResponse.error.data.error);
      }
      const spotstitchServerResponse = await registerSpotstitch(registerForm);
      console.log(spotstitchServerResponse.data);
      dispatch(reset());
      //localStorage.clear()

      navigate("/emailverification");
    } catch (error) {
      console.log("rejected", error.message);
    }
  };

  return (
    <>
      <div className="boss">
        <div className="left">
          <img className="holderimg" src={holderimg} alt="holderimg" />
        </div>

        <div className="right">
          <div className="topspace"></div>
          <img className="sslogo" src={sslogo} alt="sslogo" />
          <div className="signuptitle">Account Information</div>
          <div className="signupdescription">
            We're designing and creating an open ecosystem; so innovative ideas
            can turn into world changing action.
          </div>
          <form className="formsignin" onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder="First Name"
              id="firstName"
              name="firstName"
              required
              value={firstName}
              onChange={(event) => {
                localStorage.setItem(event.target.name, event.target.value);
                setFirstName(event.target.value);
              }}
            />
            <br />
            <input
              className="form-control"
              type="text"
              placeholder="Last Name"
              id="lastName"
              name="lastName"
              required
              value={lastName}
              onChange={(event) => {
                localStorage.setItem(event.target.name, event.target.value);
                setLastName(event.target.value);
              }}
            />
            <br />
            <input
              className="form-control"
              type="text"
              placeholder="User Name"
              id="username"
              name="username"
              required
              value={username}
              onChange={(event) => {
                localStorage.setItem(event.target.name, event.target.value);
                setUsername(event.target.value);
              }}
            />
            <br />
            <input
              className="form-control"
              type="tel"
              placeholder="Phone Number"
              id="phoneNumber"
              name="phoneNumber"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              required
              value={phoneNumber}
              onChange={(event) => {
                localStorage.setItem(event.target.name, event.target.value);
                setPhoneNumber(event.target.value);
              }}
            />
            <br />
            <select
              className="form-control"
              id="country"
              name="country"
              required
              onChange={(event) => {
                localStorage.setItem(event.target.name, event.target.value);
                setCountry(event.target.value);
              }}
            >
              <option value="" disabled selected>
                Country
              </option>
              {selectCountries.map((country) => {
                return <option value={country}>{country}</option>;
              })}
            </select>
            <br />
            <select
              className="form-control"
              id="province"
              name="province"
              required
              onChange={(event) => {
                localStorage.setItem(event.target.name, event.target.value);
                setState(event.target.value);
              }}
            >
              <option value="" disabled selected>
                State/Province
              </option>
              {selectProvinces.map((province) => {
                return <option value={province}>{province}</option>;
              })}
            </select>
            <br />
            <br />
            <input
              className="signup"
              type="submit"
              value="Get Started"
            ></input>
          </form>
          <br />
          <br />
          <br />

          <div className="policy2">
            <span className="bold">Privacy Policy</span> and{" "}
            <span className="bold">Terms of Service</span> apply.
          </div>

          <div className="botspace"></div>
        </div>
      </div>
    </>
  );
};

export default AccountSetup;
