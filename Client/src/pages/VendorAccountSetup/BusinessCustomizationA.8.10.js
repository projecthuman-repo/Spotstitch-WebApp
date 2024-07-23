import React, { useState } from "react";
import photo from "../../assets/User Picture.png";
import pencil from "../../assets/Pencil Icon.png";
import ProgressBar from "./progressBar";
import "./BusinessCustomizationA.8.10.css";
import { useNavigate } from "react-router-dom";
function BusinessCustomization() {
  const [uploadedProfileImage, setuploadedProfileImage] = useState(null);
  const [uploadedBackgroundImage, setUploadedBackgroundUpload] = useState(null);
  const [image, setImage] = useState();
  // const imageRef = useRef();
  const backgroundRef = React.useRef();
  const profileRef = React.useRef();

  const handleProfileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setuploadedProfileImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const handleBackgroundUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setUploadedBackgroundUpload(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    //this should navigate to A9
    navigate("/AccountSetupPageOne");
  };
  const handleBack = (event) => {
    event.preventDefault();
    navigate("/BillingInformation");
  };

  // const handleChangeImage = async () => {
  //   const file = imageRef.current.files[0];
  //   if (file) {
  //     const base64Image = await convertToBase64(file);
  //     setImage(base64Image);
  //   }
  // };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <>
      <div class="progress-bar-container">
        <ProgressBar />
      </div>
      <div className="main-form-business-customization">
        <div className="Heading-Business-Customization">
          <h1 className="Business-Customization">Business Customization</h1>
          <p className="small-description-Business-Customization">
            Show off your business with some pictures!
          </p>
        </div>
        <div
          className="body-content-business-customization"
          style={{
            backgroundImage: `url(${uploadedBackgroundImage})`,
            backgroundSize: "cover",
          }}
        >
          <input
            type="file"
            ref={backgroundRef}
            style={{ display: "none" }}
            onChange={handleBackgroundUpload}
            accept="image/*"
          />
          <img
            src={pencil}
            alt={"photo"}
            className="pencil-picture"
            onClick={() => backgroundRef.current.click()}
          />
          <input
            type="file"
            ref={profileRef}
            style={{ display: "none" }}
            onChange={handleProfileUpload}
            accept="image/*"
          />
          <img
            src={uploadedProfileImage || photo}
            alt={"photo"}
            className="user-picture"
            onClick={() => profileRef.current.click()}
            // style={{
            //   backgroundImage: uploadedProfileImage
            //     ? `url(${uploadedProfileImage})`
            //     : undefined,
            //   backgroundSize: "cover",
            //   backgroundColor: "transparent",
            // }}
          />
        </div>
        <div className="btns-business-customization">
          <button
            className="back-button-business-customization"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="save-continue-btn-business-customization"
            onClick={handleSubmit}
          >
            Save & Continue
          </button>
        </div>
      </div>
      <hr className="bot-line-b-custom"></hr>
    </>
  );
}

export default BusinessCustomization;
