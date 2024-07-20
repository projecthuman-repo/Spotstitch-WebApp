import React, { useState, useEffect } from "react";
import "./profile.css";
import { useParams } from "react-router-dom";
import OtherUserProfile from "./OtherUserProfile.js";
import { Col, Container, Row } from "react-bootstrap";
import Followers from "./Followers";
import AccountDetails from "./AccountDetails";
import PageNav from "../../components/pageNav/PageNav";
import UserPosts from "./UserPosts";
import { useSelector } from "react-redux";
import mockData from "./mockUsers.json";
import { useNavigate } from "react-router-dom";
import homeIcon from "../../assets/icons/Group 9554.svg";
import line from "../../assets/icons/Line 246.svg";
import back from "../../assets/icons/Frame 2610919.svg";

const Profile = () => {
  const { id } = useParams();
  const userId = id ? parseInt(id.replace(":", ""), 10) : null;
  const user = useSelector((state) => state.user);
  const username = useSelector((state) => state.user.username);
  const picture = useSelector((state) => state.user.picture);
  const bio = useSelector((state) => state.user.bio);
  const navigate = useNavigate();
  const backProfile = (event) => {
    event.preventDefault();
    navigate("/profile");
  };
  const backHome = (event) => {
    event.preventDefault();
    navigate("/");
  };
  const banner = useSelector((state) => state.user.banner);
  const followers = useSelector((state) => state.user.followers);
  const following = useSelector((state) => state.user.following);
  const firstName = useSelector((state) => state.user.firstName) || "First";
  const lastName = useSelector((state) => state.user.lastName) || "Last";
  console.log(user.firstName);
  console.log(user);
  console.log("BIO-------", user.biography);

  const [tab, setTab] = useState(0);

  const postExamples = ["", "", ""];
  function visitedUser(id) {
    return mockData.filter((item) => item.id === id);
  }

  return (
    <>
      <div>
        <div>
          {userId ? (
            <div className="navOrbuttons">
              <img
                onClick={backHome}
                src={homeIcon}
                className="backhome"
                alt="backhome"
              ></img>
              <img src={line} alt="break" />
              <img
                src={back}
                onClick={backProfile}
                className="backprofile"
                alt="back to profile"
              />
            </div>
          ) : (
            <PageNav options={["Profile"]} tabFn={setTab} tab={tab} />
          )}
        </div>
        <Container className="mt-3 content-border-l round-s">
          <Row className="p-5 underline bg-profile">
            <Col lg={3}>
              <div>
                <img
                  src={picture}
                  className="avatar-main content-border-l"
                  height={235}
                  width={235}
                />
              </div>
              <div>
                {firstName} {lastName}
              </div>
              <div>@{userId ? visitedUser(userId)[0].username : username}</div>
            </Col>
            <Col>
              <Row className="h-50 d-none d-lg-block"></Row>
              <Row className="mt-2">
                <Col lg={7} xs={10}>
                  <div>
                    <Followers
                      text={"Following"}
                      startTab={0}
                      numOfFollowers={following || 0}
                    />
                    <Followers
                      text={"Followers"}
                      startTab={1}
                      numOfFollowers={followers || 0}
                    />
                    <a href="#posts" className="btn">
                      <div>Posts</div>
                      <div className="fs-32 text-start">0</div>
                    </a>
                    <div style={{ fontFamily: "Poppins" }}>
                      Lorem ipsum dolor sit amet consectetur. Dapibus mauris
                      scelerisque egestas scelerisque lectus pellentesque ante.
                      Porttitor congue sed vivamus vel vulputate aliquet.
                    </div>
                  </div>
                </Col>
                <Col lg={5} className="mt-3 ">
                  {id ? <OtherUserProfile id={userId} /> : <AccountDetails />}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="" id="posts">
            <Col className="mx-5 mt-2">
              {postExamples.map((post, index) => {
                const body = `Lorem ipsum dolor sit amet consectetur. Eget libero a convallis ut. Nunc fermentum et nunc commodo pulvinar lectus imperdiet vel tellus. Dolor accumsan elit consectetur fringilla dignissim. Quis elit egestas vulputate nec etiam mauris vel vel. Quisque amet sociis odio est neque.
                            #posttag #posttag`;
                return (
                  <UserPosts
                    img={require("./image-placeholder.jpg")}
                    avatar={""}
                    user={"name"}
                    desc={"desc"}
                    body={body}
                    key={`post_${index}`}
                  />
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Profile;
