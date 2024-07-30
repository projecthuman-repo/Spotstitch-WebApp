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
                <Col lg={5} className='d-flex flex-column g-0 px-2'>

                    <Row className='mx-2 my-3'>
                        <Col lg={2} xs={5}><img className='avatar shadow' src={avatar} width={61} height={61}></img></Col>
                        <Col lg={9} xs={7} className='mx-2'>
                            <Row><Col><p className='nopadding fs-15 fw-500'>{user}</p></Col></Row>
                            <Row><Col><p className='nopadding fs-12 fw-400'>{desc}</p></Col></Row>
                        </Col>
                    </Row>

                    <Row className='mx-2 '>
                        <Col><p className='fs-12 fw-400'>{body}</p></Col>
                    </Row>

                    <Row className='mx-2 mt-auto'>
                        <Col lg={12}>
                            <button className='btn btn-outline-0 p-0 pe-2'><BsHeart size={22} /> </button>
                            <button className='btn btn-outline-0 px-2'><BsSend size={22} /> </button>
                            <button className='btn btn-outline-0 px-2'><BsReply size={22} className='flip' /></button>
                        </Col>
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

export default UserContent