import "./home.css";
import { Col, Form, Row, Card, Container } from "react-bootstrap";
import { BsChat, BsHeart, BsSend, BsReply } from "react-icons/bs";
import emoji from "../../assets/icons/emoji 1.svg";
import addEmoji from "../../assets/icons/addEmoji.svg";
import like from "../../assets/icons/Like-emoji group.svg";
import Repost from "../../assets/icons/Re-post icon.png";
import iconReposted from "../../assets/icons/icon-reposted.png";
import React, { useState } from "react";
function UserContent({ img, avatar, user, desc, body }) {
  const threshold = 400;
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
        <Col lg={7} className="post-image-container">
          <img src={img}></img>
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

          <Row className="mx-2 ">
            <Col className="col-post-text-body">
              <p className="fs-12 fw-400">
                {displayText}
                {body.length > threshold && (
                  <span
                    onClick={toggleText}
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    {isExpanded ? " See Less" : "See More"}
                  </span>
                )}
              </p>
            </Col>
          </Row>
          <Row style={{ height: "150px" }}></Row>

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
