import './home.css'
import { Col, Form, Row, Card, Container } from "react-bootstrap";
import { BsChat, BsHeart, BsSend, BsReply } from 'react-icons/bs'

function UserContent({ img, avatar, user, desc, body }) {
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
                                    />
                                    <span className="input-group-append">
                                        <button className="btn border-0 comment" type="button">
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