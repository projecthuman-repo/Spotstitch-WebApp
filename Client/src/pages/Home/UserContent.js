import './home.css'
import { Col, Form, Row, Card, Container } from "react-bootstrap";
import { BsChat, BsHeart, BsSend, BsReply } from 'react-icons/bs'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { baseUrl } from '../../services/baseQuery';
import { useCreateCommentMutation, useUpdatePostMutation } from '../../services/posts';

function UserContent({ img, avatar, user, desc, body, postId }) {

    const [comment, setComment] = useState('')
    const [editPost, setEdited] = useState('')

    const [addComment, {}] = useCreateCommentMutation()
    const [updatePost, {}] = useUpdatePostMutation()

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handlePostChange = (event) => {
        setEdited(event.target.value);
    };


    const handleCommentSubmit = async () => {
        try {
            const token = localStorage.getItem('token'); // token reader
            if (!token) {
                throw new Error('No token found! User not authenticated.');
            }

            console.log("COMMENT", comment)

            console.log("PASSING", { postId, comment })
            const response = await addComment({ postId, comment})

            console.log("REPSONSE COMMENTs", response)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            console.log("Result:", result);

            if (result.status === 'ok' && result.post) {
                setPosts(result.posts);

            } else {
                console.error('Error fetching posts: Invalid response format');
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }


    
    const handleUpdatePostSubmit = async () => {
        try {
            const token = localStorage.getItem('token'); // token reader
            if (!token) {
                throw new Error('No token found! User not authenticated.');
            }

            console.log("POST CONTENT", editPost)

            console.log("PASSING", { postId, comment })
            const response = await updatePost({ postId, comment})

            console.log("REPSONSE UPDATE", response)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            console.log("Result:", result);

            if (result.status === 'ok' && result.post) {
                setPosts(result.posts);

            } else {
                console.error('Error fetching posts: Invalid response format');
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }





    return (
        <Container className="shadow p-0 my-3 round-l content">
            <Row>
                <Col lg={7} className="round-l">
                    <div className='bg-white round-l'>
                        <img src={img} className="round-l img-fluid mx-auto d-block"></img>
                    </div>

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

                    <Row className='mb-3'>
                        <Col className='mx-4'>
                            <div className='my-2 overline'></div>
                            <Form>
                                <div className="input-group">
                                    <input
                                        className="form-control border-0 comment"
                                        type="text"
                                        placeholder="Add a comment..."
                                        onChange={handleCommentChange}
                                    />
                                    <span className="input-group-append">
                                        <button className="btn border-0 comment" type="button" onClick={handleCommentSubmit} >
                                            <BsChat className='flip' size={20} />
                                        </button>
                                    </span>
                                </div>
                            </Form>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}

export default UserContent;
