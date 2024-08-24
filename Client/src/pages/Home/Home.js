import "./home.css";
import React, { useRef, useState } from "react";
import {
  Col,
  Container,
  Form,
  Row,
  Card,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";

import { HiOutlinePencil } from "react-icons/hi";

import {
  BsCameraVideo,
  BsCloudUpload,
  BsEmojiSmile,
  BsImage,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import CreateLayerModal from "./CreateLayerModal";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import emoji from "../../assets/icons/Smiley face.svg";

import Text from "../../assets/icons/Text icon.svg";
import At from "../../assets/icons/@.svg";
import Line from "../../assets/icons/Line 246.svg";
import Video from "../../assets/icons/Video Icon.svg";
import Mic from "../../assets/icons/Mic Icon.svg";
import Share from "../../assets/icons/Share Icon.svg";
// import { share } from "../../assets/icons";

function Home({ vendor = false }) {
  const [filters, setFilters] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [popoverShow, setPopoverShow] = useState(false);

  const username = useSelector((state) => state.user.username);
  const avatar = useSelector((state) => state.user.picture);

  const popover = (
    <Popover id="popover-basic" className="mt-5">
      <Popover.Body>
        <p className="btn-layer py-3 px-1 m-0">Edit Layers</p>
        <hr className="m-0" />
        <p
          className="btn-layer py-3 px-1 m-0"
          onClick={() => {
            setModalShow(true);
            setPopoverShow(false);
          }}
        >
          Create new layer
        </p>
      </Popover.Body>
    </Popover>
  );

  const layerExamples = ["these", "are", "test", "layers", "replace later"];

  function editFilter(layerName) {
    const newFilters = [...filters];
    if (filters.includes(layerName))
      newFilters.splice(newFilters.indexOf(layerName), 1);
    else newFilters.push(layerName);
    setFilters(newFilters);
  }

  function tabOnChange(i) {
    setTab(i);
  }

  function addAttachment(e) {
    e.preventDefault();
  }

  function callApi(e) {
    e.preventDefault();
    console.log("inside call api method");

    fetch('http://localhost:8080/api/spotstitch/', { method: 'GET' })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log("API response:", data);
        data.forEach(item => {
          if (item.email) {
            alert(item.email); // Print the email field
          } else {
            console.error('Email field is missing in one of the response objects:', item);
          }
        });
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }



  return (
    <div>
      <Container className="my-4 ">
        <CreateLayerModal show={modalShow} onHide={() => setModalShow(false)} />
        <Row>
          <Col lg="3">
            <Card className="top-left-body-home">
              <Card.Body>
                <div className="Top-Contents-home">
                  <div className="avatar-home">
                    <img className="avatar" src={avatar}></img>
                    <div className="content-text-home">
                      <p className="user-name">{username}</p>
                      <p className="post-to">Post To: Vendor Account</p>
                    </div>
                  </div>
                </div>

                <Row>
                  <Form>
                    <Form.Group>
                      <Form.Control
                        className="Text-Input"
                        as="textarea"
                        placeholder="Share your life!"
                        rows={4}
                      />

                      <div className="icons-home">
                        <button className="icon" onClick={addAttachment}>
                          <img src={emoji} alt="Emoji" className="emoji" />
                        </button>
                        <button className="icon" onClick={addAttachment}>
                          <img src={Text} alt="text" className="text" />
                        </button>

                        <button className="icon" onClick={addAttachment}>
                          <img src={At} alt="At" className="at" />
                        </button>
                        <img src={Line}></img>
                        <button className="icon" onClick={addAttachment}>
                          <img src={Video} alt="Video" className="video" />
                        </button>
                        <button className="icon" onClick={addAttachment}>
                          <img src={Mic} alt="Mic" className="mic" />
                        </button>
                        <img src={Line}></img>
                        <button className="icon" onClick={addAttachment}>
                          <img src={Share} alt="share" className="share" />
                        </button>
                      </div>
                      {/* <button className="postButton float-end mt-4 round-l px-3 py-1 fw-400">
                        <p className="fs-15 nopadding">Post</p>
                      </button> */}
                      <button className="postButton">Post</button>
                    </Form.Group>
                  </Form>
                </Row>
              </Card.Body>
            </Card>

            <Card className="my-3 content-border-l round-s">
              <Card.Body>
                <div
                  className="row p-2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div className="col-lg-10 s-16 f-mid">
                    {vendor ? "Connections" : "Layers"}{" "}
                  </div>
                  <div className="col-lg-2">
                    <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={popover}
                      show={popoverShow}
                    >
                      <button
                        className="btn text-left"
                        onClick={() => setPopoverShow(!popoverShow)}
                      >
                        <HiOutlinePencil />
                      </button>
                    </OverlayTrigger>
                  </div>
                  <hr></hr>
                  {layerExamples.map((layer) => {
                    /* switch to api data here */
                    return (
                      <Row>
                        <Col>
                          <button
                            className={
                              filters.includes(layer) == true
                                ? "btn btn-outline-0 post m-2 text-start w-100 shadow"
                                : "btn btn-outline-0 bg-light m-2 text-start w-100"
                            }
                            // data-bs-toggle="button"
                            onClick={() => {
                              editFilter(layer);
                            }}
                          >
                            <p className="nopadding fs-16 fw-400">{layer}</p>
                          </button>
                        </Col>
                      </Row>
                    );
                  })}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Outlet />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
