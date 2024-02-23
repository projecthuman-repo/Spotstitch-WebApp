import PageNav from "../../components/pageNav/PageNav";
import { useSelector } from "react-redux";
import React, {  useState, useRef } from "react";
import {
	Col,
	Row,
} from "react-bootstrap";
import placeHolder from "../../assets/holderimg.png";

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

const NotifcationsPage = () => {
    
	const [tab, setTab] = useState(1);
	const [filters, setFilters] = useState([]);

    
	const layerExamples = ["these", "are", "test", "layers", "replace later"];
	const postExanples = ["", "", ""];
	const avatar = "";


    return (
    <Col lg='9'>
    <PageNav
      options={['Notifications']}
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
            </Col>
  )
}

export default NotifcationsPage