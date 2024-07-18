import "./home.css";
import {
  Col,
  Form,
  Row,
  Card,
  Container,
  OverlayTrigger,
  Popover,
  Tooltip,
  Modal,
} from "react-bootstrap";
import { BsChat } from "react-icons/bs";
import emoji from "../../assets/icons/emoji 1.svg";
import addEmoji from "../../assets/icons/addEmoji.svg";
import like from "../../assets/icons/Like-emoji group.svg";
import Repost from "../../assets/icons/Re-post icon.png";
import iconReposted from "../../assets/icons/icon-reposted.png";
import React, { useState } from "react";
import DetailedPost from "./detailedPost.js";
function UserContent({ img, avatar, user, desc, body }) {
  const threshold = 150;
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayText, setDisplayText] = useState("");

  // Effect to truncate text initially if it's longer than the threshold
  React.useEffect(() => {
    if (body.length > threshold) {
      setDisplayText(`${body.substring(0, threshold)}... `);
    } else {
      setDisplayText(body);
    }
  }, [body]);
  const [showModal, setShowModal] = useState(false);
  //   const detailedPostModal = (a, u, d, b) => (
  //     <Modal show={showModal} onHide={() => setShowModal(false)}>
  //       <Modal.Header closeButton>
  //         <Modal.Title>User Details</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         {/* Call detailedPost here or directly place the content */}
  //         {detailedPost(a, u, d, b)}
  //       </Modal.Body>
  //     </Modal>
  //   );

  const toggleText = () => {
    if (isExpanded) {
      setDisplayText(`${body.substring(0, threshold)}... `);
    } else {
      setDisplayText(body);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <Container className=" p-0 my-3 round-l">
      <Row className="post-row">
        <Col
          lg={7}
          className="post-image-container"
          style={{ height: "299px" }}
        >
          <img
            src={img}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          ></img>
        </Col>
        <Col
          lg={5}
          className="d-flex flex-column g-0 px-2"
          style={{ height: "auto" }}
        >
          <Row className="mx-2 my-3">
            <Col lg={2} xs={5}>
              <img
                className="avatar shadow"
                src={avatar}
                width={61}
                height={61}
              ></img>
            </Col>
            <Col lg={9} xs={7} className="mx-2">
              <Row>
                <Col>
                  <p className="nopadding fs-15 fw-500">{user}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="nopadding fs-12 fw-400">{desc}</p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mx-2">
            <Col className="col-post-text-body">
              <p className="fs-12 fw-400">
                {displayText}
                {body.length > threshold && (
                  <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => setShowModal(true)}
                  >
                    See More
                  </span>
                )}
              </p>
            </Col>
            {showModal && (
              <DetailedPost
                show={showModal}
                onHide={() => setShowModal(false)}
                avatar={avatar}
                user={user}
                desc={desc}
                body={body}
                img={img}
              />
            )}
          </Row>

          <Row className="mx-2 my-3 row-icons">
            <button
              className="btn btn-outline-0 pe-2"
              style={{
                /* thumbs up emoji group */

                width: "53px",
                height: "32px",
                display: "flex",
                /* Inside auto layout */
                flex: "none",
                order: 0,
                flexGrow: 0,
                borderRadius: "100px",
                background: "white",
                gap: "10px",
                alignContent: "center",
                padding: "5px",
              }}
            >
              <img src={emoji} className="icon-userContent" />
              {"5"}
            </button>
            <button className="btn btn-outline-0 px-2 icon-button-userContent">
              <img src={addEmoji}></img>{" "}
            </button>
            <button className="btn btn-outline-0 px-2 icon-button-userContent">
              <img src={like} style={{ width: "19px", height: "18px" }}></img>{" "}
            </button>
            <button className="btn btn-outline-0 px-2 icon-button-userContent">
              <img src={Repost}></img>{" "}
            </button>
          </Row>

          <Row className="mb-3">
            <Col className="mx-2">
              {/* <div className="my-2 overline"></div> */}
              <Form>
                <div className="input-group">
                  <input
                    className="form-control border-0 comment"
                    type="text"
                    placeholder="Add a comment..."
                  />
                  <span className="input-group-append">
                    <button className="btn border-0 comment" type="button">
                      <BsChat className="flip" size={20} />
                    </button>
                  </span>
                </div>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default UserContent;
