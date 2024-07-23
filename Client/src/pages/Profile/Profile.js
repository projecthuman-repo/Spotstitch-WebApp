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

import { baseUrl } from "../../services/baseQuery.js";
import { useGetUserPostQuery } from "../../services/posts.js";

// import picture from "./image-placeholder.jpg"

const Profile = () => {
  const { id } = useParams();
  const userId = id ? parseInt(id.replace(":", ""), 10) : null;
  const user = useSelector((state) => state.user);
  const bio = useSelector((state) => state.user.biography);
  const username = useSelector((state) => state.user.username);
  const picture = useSelector((state) => state.user.picture);

  const banner = useSelector((state) => state.user.banner);
  const followers = useSelector((state) => state.user.followers);
  const following = useSelector((state) => state.user.following);
  const firstName = useSelector((state) => state.user.firstName) || "First";
  const lastName = useSelector((state) => state.user.lastName) || "Last";

  const [posts, setPosts] = useState([]);

  const [tab, setTab] = useState(0);

  const postExamples = ["", "", ""];
  function visitedUser(id) {
    return mockData.filter((item) => item.id === id);
  }

  const [getUserPosts, [{ }]] = useGetUserPostQuery()


  useEffect(() => {
    const fetchPosts = async () => {
        try {
            const token = localStorage.getItem('token'); // token reader
            if (!token) {
                throw new Error('No token found! User not authenticated.');
            }

            const response = await fetch(`${baseUrl}/posts/${username}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            console.log("response:!!!!!!!!", response)
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log("HERE----------------")

            const result = await response.json();

            console.log("Result:", result);

            if (result.status === 'ok' && result.posts) {
                setPosts(result.posts);

            } else {
                console.error('Error fetching posts: Invalid response format');
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };
    fetchPosts();
}, [username]);

  return (
    <div>
      <PageNav options={["Profile"]} tabFn={setTab} tab={tab} />

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
                  <div>
                    { bio }
                  </div>
                </div>
              </Col>
              <Col lg={5} className="mt-3 ">
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  {id ? <OtherUserProfile id={userId} /> : <AccountDetails />}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="" id="posts">
          <Col className="mx-5 mt-2">
          {posts.length > 0 ? (
                posts.map((post) => (
                    <UserContent
                        key={post._id}
                        img={post.image?.data || placeHolder}
                        avatar={picture || placeHolder}
                        user={username}
                        desc={post.userDescription}
                        body={post.description}
                    />
                ))
            ) : (
                <p>No posts available</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
