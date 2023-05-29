import './profile.css'
import { Col, Form, Row, Card, Container } from "react-bootstrap";


function UserPosts({ img, avatar, user, desc, body }) {
    return (
        <Container className="shadow g-0 my-3 round-l content">
            <Row>
                <Col lg={7} className="round-l bg-white border">
                        <img src={img} className="round-l img-fluid mx-auto d-block"></img>
                </Col>
                <Col sm={5}>
                    <Row className='mx-2 my-3'>
                        <Col sm={2}><img className='avatar shadow' src={avatar} width={61} height={61}></img></Col>
                        <Col sm={9} className='mx-2'>
                            <Row><Col><p className='nopadding fs-15 fw-500'>{user}</p></Col></Row>
                            <Row><Col><p className='nopadding fs-12 fw-400'>{desc}</p></Col></Row>
                        </Col>
                    </Row>
                    <Row className='mx-2 '>
                        <Col><p className='fs-12 fw-400'>{body}</p></Col>
                    </Row>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default UserPosts