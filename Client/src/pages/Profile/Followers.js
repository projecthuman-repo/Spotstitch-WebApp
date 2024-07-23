import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Modal, Row, Col, Container } from "react-bootstrap";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";

import "./profile.css";
import PageNav from "../../components/pageNav/PageNav";
import mockUsers from "./mockUsers.json";
function Followers({ text, startTab, numOfFollowers = 0 }) {
  const { id } = useParams();
  const userId = id ? parseInt(id.replace(":", ""), 10) : null;
  const user = useSelector((state) => state.user);
  const [tab, setTab] = useState(startTab);
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);

  const [users, setUsers] = useState(mockUsers);
  useEffect(() => {
    // This function will be called whenever the location changes
    const handleCloseOnNavigate = () => {
      setShow(false); // Close the modal
    };

    handleCloseOnNavigate();
  }, [location]); // Re-run the effect if the location changes

  const toggleFollow = (userId) => {
    if (id) return;
    users.forEach((user) => {
      if (user.id === userId) {
        user.isFollowing = !user.isFollowing;
      }
    });
    setUsers([...users]);
  };
  const handleDirect = (event, id) => {
    event.preventDefault();
    navigate(`/profile/:${id}`);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  function tabOnChange(i) {
    setTab(i);
  }

  return (
    <>
      <button className="btn border-0" onClick={handleShow}>
        <div>{text}</div>
        <div className="fs-32 text-start">{numOfFollowers}</div>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        className="modal content-border-l round-l"
        dialogClassName="modal-dialog"
        contentClassName="modal-content"
        aria-labelledby="modal"
        backdrop="static"
        size="lg"
      >
        <Modal.Header className="py-0 underline" closeButton>
          <Row className="w-100">
            <PageNav
              options={["Followers", "Following"]}
              tabFn={setTab}
              tab={tab}
              className="g-0"
            />
          </Row>
        </Modal.Header>
        <Modal.Body className="mt-0 pt-0 mx-3">
          {mockUsers.map((user) => {
            return (
              <Row className="my-4 px-2" key={user.id}>
                <Col lg={2} sm={2} xs={3}>
                  <img
                    className="float-end avatar"
                    src={""}
                    height={61}
                    width={61}
                  />
                </Col>
                <Col lg={7} sm={7} xs={9}>
                  <div
                    onClick={(e) =>
                      user.id ? handleDirect(e, user.id) : undefined
                    }
                  >
                    {user.username}
                  </div>
                  <div className="fs-11">{user.description}</div>
                </Col>
                <Col lg={2} sm={2} className="d-flex py-2">
                  {" "}
                  <button
                    className="btn"
                    onClick={() => (id ? undefined : toggleFollow(user.id))}
                    style={{
                      background: user.isFollowing ? "#E6E6E6" : "#90C766",
                      width: "109px",
                      height: "33.14px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#757575",
                    }}
                  >
                    {user.isFollowing ? "Unfollow" : "Follow"}
                  </button>
                </Col>
              </Row>
            );
          })}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Followers;
