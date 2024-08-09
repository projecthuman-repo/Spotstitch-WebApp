import PageNav from "../../components/pageNav/PageNav";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Col, Row, Dropdown } from "react-bootstrap";
import { TfiEmail } from "react-icons/tfi";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import UserContent from "../Home/UserContent";
import { useGetAllPostsQuery } from "../../services/posts";
import { useViewUserProfileByIdMutation } from "../../services/userApi";
import filterIcon from "../../assets/icons/filter.svg";
const HomePosts = () => {
  const user = useSelector((state) => state.user);
  const [tab, setTab] = useState(1);

  // const [getPosts, { }] = useGetAllPostsQuery
  const [posts, setPosts] = useState([]);
  const [quickMessageClicked, setQuickMessageClicked] = useState(true);

  const [getUser, {}] = useViewUserProfileByIdMutation();

  const users = [
    {
      name: "User Name",
      message: "Last Message",
      date: "MM/DD/YY",
      profilePic: "photo.png",
    },
    {
      name: "Test User 1",
      message: "Last Message",
      date: "MM/DD/YY",
      profilePic: "photo.png",
    },
    {
      name: "Test User 2",
      message: "Last Message",
      date: "MM/DD/YY",
      profilePic: "photo.png",
    },
    {
      name: "User Name",
      message: "Last Message",
      date: "MM/DD/YY",
      profilePic: "photo.png",
    },
    {
      name: "User Name",
      message: "Last Message",
      date: "MM/DD/YY",
      profilePic: "photo.png",
    },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token"); // token reader
        if (!token) {
          throw new Error("No token found! User not authenticated.");
        }

        const response = await fetch("http://localhost:8080/v1/posts/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        console.log("Result:", result);

        if (result.status === "ok" && result.posts) {
          setPosts(result.posts);
        } else {
          console.error("Error fetching posts: Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);
  // //filters

  const [filters, setFilters] = useState([
    // { name: "Newest", function: (a, b) => new Date(b.date) - new Date(a.date) },
    // { name: "Oldest", function: (a, b) => new Date(a.date) - new Date(b.date) },
    { name: "Your post", function: (a) => a.userId === user.userId },
  ]);

  return (
    <Col lg="9">
      <Row>
        <PageNav options={["For you", "Following"]} tabFn={setTab} tab={tab} />
      </Row>
      <Row style={{ marginTop: "10px" }}>
        {filters.map((filter) => (
          <Dropdown key={filter.name} className="d-inline my-2">
            <Dropdown.Toggle
              variant="light"
              id={`dropdown-${filter.name}`}
              style={{ height: "40px" }}
            >
              <img src={filterIcon} alt="Filter" style={{ height: "20px" }} />{" "}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {/* Assuming you have options for each filter, map them here */}
              <Dropdown.Item onClick={() => filter.function(posts)}>
                {filter.name}
              </Dropdown.Item>
              {/* Add more options as needed */}
            </Dropdown.Menu>
          </Dropdown>
        ))}
      </Row>
      {/* <div
        className="d-flex justify-content-start"
        style={{
          width: "53px",
          borderColor: "#d9d9d9",
          border: "1px solid #d9d9d9",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <img
          src={filterIcon}
          className="btn"
          style={{ height: "40px" }}
          alt="Filter"
        />
      </div> */}
      {posts.length > 0 ? (
        posts.map((post) => (
          <UserContent
            // key={post._id}
            // img={post.image?.data || placeHolder}
            // avatar={post.picture || placeHolder}
            // user={post.username}
            // desc={post.userDescription}
            // body={post.description}
            post={post}
          />
        ))
      ) : (
        <p>No posts available</p>
      )}
      <div className="card quick-messages">
        <div className="card-header hover-pointer ps-2">
          <div className="d-flex">
            <div className="notification-dot" />
            <p className="m-0 fs-18">Messages</p>
            <span className="ms-auto">
              <TfiEmail className="me-3" size={25} />
              <HiOutlineChevronDoubleUp
                size={25}
                style={
                  !quickMessageClicked ? { transform: "rotate(180deg)" } : null
                }
                onClick={() => setQuickMessageClicked(!quickMessageClicked)}
              />
            </span>
          </div>
        </div>
        <div className="" hidden={quickMessageClicked}>
          {users.map((user, index) => (
            <div key={index} className={"row my-3 px-3 hover-pointer"}>
              <div className="d-flex">
                <div className="notification-dot" />
                <img
                  src={require("../../assets/" + user.profilePic)}
                  height={60}
                  alt="Profile"
                />
                <div className="d-flex flex-column ms-2">
                  <span className="my-auto">
                    <p className="m-0">{user.name}</p>
                    <p className="m-0">{user.message}</p>
                  </span>
                </div>
                <p className="ms-auto mb-0">{user.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Col>
  );
  // return (
  //   <Col lg="9">
  //     <PageNav options={["For you", "Following"]} tabFn={setTab} tab={tab} />
  //     <Row>
  //       <Col>
  //         {filters.map((filter) => (
  //           <button
  //             key={filter}
  //             className="btn light mx-2 my-2 px-4 fs-15 fw-500"
  //             onClick={() => {
  //               // Implement editFilter function here
  //             }}
  //           >
  //             {filter}
  //           </button>
  //         ))}
  //       </Col>
  //     </Row>
  //     {posts.length > 0 ? (
  //       posts.map((post) => (
  //         <UserContent
  //           key={post._id}
  //           img={post.image?.data || placeHolder}
  //           avatar={post.userDetails.picture || placeHolder}
  //           user={post.userDetails.username}
  //           desc={post.userDescription}
  //           body={post.description}
  //           postId={post._id}
  //         />
  //       ))
  //     ) : (
  //       <p>No posts available</p>
  //     )}
  //     <div className="card quick-messages">
  //       <div className="card-header hover-pointer ps-2">
  //         <div className="d-flex">
  //           <div className="notification-dot" />
  //           <p className="m-0 fs-18">Messages</p>
  //           <span className="ms-auto">
  //             <TfiEmail className="me-3" size={25} />
  //             <HiOutlineChevronDoubleUp
  //               size={25}
  //               style={
  //                 !quickMessageClicked ? { transform: "rotate(180deg)" } : null
  //               }
  //               onClick={() => setQuickMessageClicked(!quickMessageClicked)}
  //             />
  //           </span>
  //         </div>
  //       </div>
  //       <div className="" hidden={quickMessageClicked}>
  //         {users.map((user, index) => (
  //           <div key={index} className={"row my-3 px-3 hover-pointer"}>
  //             <div className="d-flex">
  //               <div className="notification-dot" />
  //               <img
  //                 src={require("../../assets/" + user.profilePic)}
  //                 height={60}
  //                 alt="Profile"
  //               />
  //               <div className="d-flex flex-column ms-2">
  //                 <span className="my-auto">
  //                   <p className="m-0">{user.name}</p>
  //                   <p className="m-0">{user.message}</p>
  //                 </span>
  //               </div>
  //               <p className="ms-auto mb-0">{user.date}</p>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </Col>
  // );
};

export default HomePosts;
