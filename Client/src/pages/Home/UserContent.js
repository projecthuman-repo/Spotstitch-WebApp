import './home.css';
import { Col, Form, Row, Card, Container } from "react-bootstrap";
import { BsChat, BsHeart, BsSend, BsReply } from 'react-icons/bs';
import { useState } from 'react';

function callApi(comment, likes) {

    const id = '6661f2239fdc6067f10374db'; // ID of the object you are interested in

    fetch(`http://localhost:5000/api/spotstitch/${id}/comment`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            comment: comment,
            likes: likes
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log("API response:", data);

        // Check if data contains the nested data object
        if (data && data.data && data.data._id === id) {
            if (data.data.score) {
                alert(`The Reputation is: ${data.data.score}`); // Print the email field from the nested data object
            } else {
                console.error('Score field is missing in the nested response object:', data.data);
            }
        } else {
            console.error('Unexpected response format or ID mismatch:', data);
        }
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}

function UserContent({ img, avatar, user, desc, body }) {
    const [comment, setComment] = useState(''); // State for comment input
    const [likes, setLikes] = useState(0); // State for likes, you can adjust this as needed

    // Function to handle the button click
    const handleCommentButtonClick = () => {
        callApi(comment, 10); // Pass comment and likes to callApi
    };

    return (
        <Container className="shadow p-0 my-3 round-l content">
            <Row>
                <Col lg={7} className="round-l">
                    <div className='bg-white round-l'>
                        <img src={img} className="round-l img-fluid mx-auto d-block" alt="Content"/>
                    </div>
                </Col>
                <Col lg={5} className='d-flex flex-column g-0 px-2'>
                    <Row className='mx-2 my-3'>
                        <Col lg={2} xs={5}>
                            <img className='avatar shadow' src={avatar} width={61} height={61} alt="Avatar"/>
                        </Col>
                        <Col lg={9} xs={7} className='mx-2'>
                            <Row><Col><p className='nopadding fs-15 fw-500'>{user}</p></Col></Row>
                            <Row><Col><p className='nopadding fs-12 fw-400'>{desc}</p></Col></Row>
                        </Col>
                    </Row>
                    <Row className='mx-2'>
                        <Col><p className='fs-12 fw-400'>{body}</p></Col>
                    </Row>
                    <Row className='mx-2 mt-auto'>
                        <Col lg={12}>
                            <button className='btn btn-outline-0 p-0 pe-2'><BsHeart size={22} /></button>
                            <button className='btn btn-outline-0 px-2'><BsSend size={22} /></button>
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
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)} // Update comment state
                                    />
                                    <span className="input-group-append">
                                        <button 
                                            className="btn border-0 comment" 
                                            type="button"
                                            onClick={handleCommentButtonClick} // Use the onClick handler for the button
                                        >
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
    );
}

export default UserContent;
