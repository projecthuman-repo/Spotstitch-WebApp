import PageNav from "../../components/pageNav/PageNav";
import { useSelector } from "react-redux";
import React, {  useState, useRef } from "react";
import {
	Col,
	Row,
} from "react-bootstrap";
import placeHolder from "../../assets/holderimg.png";
import { TfiEmail } from "react-icons/tfi";
import { HiOutlinePencil, HiOutlineChevronDoubleUp } from "react-icons/hi";

import UserContent from "../Home/UserContent";

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

const HomePosts = () => {
    
    const user = useSelector((state) => state.user);
	const [tab, setTab] = useState(1);
	const [filters, setFilters] = useState([]);

    
	const layerExamples = ["these", "are", "test", "layers", "replace later"];
	const postExanples = ["", "", ""];
	const avatar = "";

	const [quickMessageClicked, setQuickMessageClicked] = useState(true);

	const emotor = useRef();

    return (
    <Col lg='9'>
    <PageNav
      options={['For you', 'Following']}
      tabFn={setTab}
      tab={tab}
    />
    <Row>
      <Col>
        {filters.map((filter) => {
          return (
            <button
              className='btn light mx-2 my-2 px-4 fs-15 fw-500'
              onClick={() => {
                editFilter(filter);
              }}
            >
              {filter}
            </button>
          );
        })}
      </Col>
    </Row>
    {/* <VendorConnections /> test view */}
            {postExanples.map((post) => {
                /* switch to api data here */
                return (
                    <UserContent
                        img={placeHolder}
                        avatar={avatar}
                        user={"User Name"}
                        desc={"User Description"}
                        body={`Lorem ipsum dolor sit amet consectetur. 
            Eget libero a convallis ut. Nunc fermentum et nunc commodo pulvinar lectus imperdiet vel tellus. 
            Dolor accumsan elit consectetur fringilla dignissim. Quis elit egestas vulputate nec etiam mauris vel vel. 
            Quisque amet sociis odio est neque.
            #posttag #posttag`}
                    />
                );
            })}
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
                                    !quickMessageClicked
                                        ? {
                                                transform:
                                                    "rotate(180deg)",
                                          }
                                        : null
                                }
                                onClick={() =>
                                    setQuickMessageClicked(
                                        !quickMessageClicked
                                    )
                                }
                            />
                        </span>
                    </div>
                </div>
                <div className="" hidden={quickMessageClicked}>
                    {users.map((user, index) => {
                        return (
                            <div
                                className={
                                    "row my-3 px-3 hover-pointer"
                                }
                            >
                                <div className="d-flex">
                                    <div className="notification-dot" />
                                    <img
                                        src={require("../../assets/" +
                                            user.profilePic)}
                                        height={60}
                                    />
                                    <div className="d-flex flex-column ms-2">
                                        <span className="my-auto">
                                            <p className="m-0">
                                                {user.name}
                                            </p>
                                            <p className="m-0">
                                                {user.message}
                                            </p>
                                        </span>
                                    </div>
                                    <p className="ms-auto mb-0">
                                        {user.date}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            </Col>
  )
}

export default HomePosts