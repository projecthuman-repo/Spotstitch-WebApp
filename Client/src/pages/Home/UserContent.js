import './home.css'
import { Col, Form, Row, Card, Table } from "react-bootstrap";
import { BsChat, BsHeart, BsSend, BsReply } from 'react-icons/bs'

function UserContent({ img, avatar, user, desc, body }) {
    return (
        <Card className="my-3 post rounded-lg border">
            <Card.Body className="shadow nopadding">
                <Row className='d-flex'>
                    <Col lg="7" className="rounded-lg">
                        <img src={img}></img>
                    </Col>
                    <Col lg="5">
                        <Row className='mx-2 my-3'>
                            <Col lg={2}><img className='avatar shadow' src={avatar} width={56} height={56}></img></Col>
                            <Col lg={10}>
                                <Row><Col><strong>{user}</strong></Col></Row>
                                <Row><Col>{desc}</Col></Row>
                            </Col>
                        </Row>
                        <Row className='mx-2'>
                            <Col>{body}</Col>
                        </Row>
                        <Row className='mx-2'>
                            <Col lg={1}><BsHeart size={22}/></Col>
                            <Col lg={1}><BsSend size={22} /></Col>
                            <Col lg={1}><BsReply size={22} className='flip'/></Col>
                        </Row>
                        <Row className='align-self-end'>
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
                                                <BsChat className='flip' size={20}/>
                                            </button>
                                        </span>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>)
}

export default UserContent