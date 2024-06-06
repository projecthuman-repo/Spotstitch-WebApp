import React, { useRef, useState } from "react";
import "./ProfileImageA5.css";
import holderimg from "../../assets/holderimg.png";
import sslogo from "../../assets/sslogo.png";
import photo from "../../assets/photo.png";

import { Form, Link, useNavigate } from "react-router-dom";
import { useUpdatePictureMutation } from "../../services/userApi";

const ProfileImage = () => {
  const [image, setImage] = useState();
  const imageRef = useRef();
  const [updatePicture, {}] = useUpdatePictureMutation();
  const navigate = useNavigate();

  const convertToBase64 = async () => {
    const reader = new FileReader();
    reader.readAsDataURL(imageRef.current.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  function handleChangeImage() {
    imageRef.current.click();
  }

  async function nextPage() {
    navigate("/accounttype");
  }

  async function handleSubmit() {
    try {
      const res = await updatePicture({ picture: image });
      if (res.error) throw new Error(res.error.data.error.message);
      if (res.data?.status == "ok") {
        await dispatch(setUserData({ picture: image }));
      }
      nextPage();
    } catch (error) {
      console.log("rejected", error.message);
    }
  }

  return (
    <>
      <div className="boss">
        <div className="left">
          <img className="holderimg" src={holderimg} alt="holderimg" />
        </div>

        <div className="right">
          <div className="topspace"></div>
          <br />
          <br />

          <img className="sslogo" src={sslogo} alt="sslogo" />
          <div className="signuptitle">Add a profile photo.</div>
          <br />
          <div className="signupdescription">
            We're designing and creating an open ecosystem; so innovative ideas
            can turn into world changing action.{" "}
          </div>

          <br />

          <input
            hidden
            name="picture"
            type="file"
            ref={imageRef}
            accept=".png,.jpg,.jpeg,.webp"
            onChange={(e) => {
              console.log(e.target.files[0]);
              if (e.target.files[0]) {
                let buffer = e.target.files[0];
                convertToBase64();
              }
            }}
          />

          <img
            src={image || photo}
            alt={"photo"}
            className="photo avatar"
            onClick={() => {
              handleChangeImage();
            }}
          />
          <br />
          <br />
          <br />
          <div className="skipnextbox">
            <button
              className="skipbutton"
              onClick={() => {
                nextPage();
              }}
            >
              Skip
            </button>

            <button
              className="nextbutton"
              onClick={() => {
                handleSubmit();
              }}
            >
              Next
            </button>
          </div>

          <br />
          <br />
          <br />

          <div className="policy2">
            <span className="bold">Privacy Policy</span> and{" "}
            <span className="bold">Terms of Service</span> apply.
          </div>

          {/* <div className="botspace"></div> */}
        </div>
      </div>
    </>
  );
};

export default ProfileImage;
