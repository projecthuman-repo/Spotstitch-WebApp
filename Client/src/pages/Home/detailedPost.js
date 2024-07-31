import { React, useState } from "react";
import { Modal, Row, Col, CloseButton } from "react-bootstrap";
import "./detailedPost.css";
import { BsChat } from "react-icons/bs";
import emoji from "../../assets/icons/emoji 1.svg";
import addEmoji from "../../assets/icons/addEmoji.svg";
import like from "../../assets/icons/Like-emoji group.svg";
import Repost from "../../assets/icons/Re-post icon.png";
import { useSelector } from "react-redux";
function DetailedPost({ show, onHide, avatar, user, desc, body, img }) {
  const userId = useSelector((state) => state.user.userId);

  return (
    <Modal size="xl" className="m-0 p-0" centered show={show} onHide={onHide}>
      <Modal.Body
        className="d-flex flex-column justify-content-center align-items-center p-sm-5"
        style={{ minHeight: "calc(80vh - 2rem)" }} // Adjust the 2rem based on your modal's padding or header/footer height
      >
        <Row style={{ width: "100%" }}>
          <Col lg={5} className="image-left">
            <img src={img}></img>
          </Col>
          <Col lg={7} className="content-right">
            <Row className="top-content my-3">
              <Col lg={2} xs={5}>
                <img className="avatar shadow" src={avatar}></img>
              </Col>
              <Col lg={9} xs={7} className="name-des-detailedpost">
                <Row className="name-detailedpost">{user}</Row>
                <Row lg={2} className="desc-detailedpost">
                  {desc}
                </Row>
              </Col>

              <Col
                lg={2}
                className="close-button"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "100%",
                  justifyContent: "flex-end",
                }}
              >
                <CloseButton onClick={onHide} />
              </Col>
            </Row>
            <Row className="content-detailedpost my-3">
              <p>{body}</p>
            </Row>
            <Row
              className="mx-2 my-3 row-icons d-flex"
              style={{
                padding: "10px",
                height: "50px",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <button
                className="btn btn-outline-0 pe-2"
                style={{
                  /* thumbs up emoji group */

                  width: "60px",
                  height: "32px",
                  display: "flex",
                  /* Inside auto layout */
                  flex: "none",
                  order: 0,
                  flexGrow: 0,
                  borderRadius: "100px",
                  background: "white",
                  gap: "5px",
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
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default DetailedPost;
