import './home.css'
import { Col, Form, Row, Card, Container } from "react-bootstrap";
import { BsChat, BsHeart, BsSend, BsReply } from 'react-icons/bs'

function UserContent({ img, avatar, user, desc, body }) {
    return (
        <Container className="shadow p-0 my-3 round-l content">
            <Row>
                <Col lg={7} className="round-l bg-black">
                    <img src={img} className="round-l img-fluid mx-auto d-block"></img>
                </Col>
                <Col sm={5}>
                    <Row className='mx-2 my-3'>
                        <Col sm={2}><img className='avatar shadow' src={avatar} width={61} height={61}></img></Col>
                        <Col sm={9} className='mx-2'>
                            <Row><Col><p className='nopadding s15 f-500'>{user}</p></Col></Row>
                            <Row><Col><p className='nopadding s12 f-400'>{desc}</p></Col></Row>
                        </Col>
                    </Row>
                    <Row className='mx-2 '>
                        <Col><p className='s12 f-400'>{body}</p></Col>
                    </Row>
                    <Row className='mx-2'>
                        <Col sm={1}><BsHeart size={22} /></Col>
                        <Col sm={1}><BsSend size={22} /></Col>
                        <Col sm={1}><BsReply size={22} className='flip' /></Col>
                    </Row>
                    <Row className='w-100 '>
                        <Col lg={11} className='mx-2 '>
                            <hr className='my-2 white' />
                            <Form className="d-flex">
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