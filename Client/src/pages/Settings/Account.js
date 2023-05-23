import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

function Account() {
    const userDetails = ['Name', 'Username', 'Bio']
    const links = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'Google']
    const [isLinked, setIsLinked] = useState([]);
    const [name, setName] = useState('')

    function onLink(newLink) {
        const linked = [...isLinked]
        if (linked.includes(newLink)) linked.splice(linked.indexOf(newLink), 1)
        else linked.push(newLink)
        setIsLinked(linked)
    }


    return <Container className="content-border-l round-s my-3 g-0">
        <section className="border-bottom mx-0">
            <Row className="m-3">
                <Col lg={12} className="fs-20 fw-500">Account</Col>
            </Row>
        </section>

        <section className="border-bottom mx-0">
            <Row className="m-3">
                <Row>
                    <Col lg={2}><img className='avatar' src={''} height={92} width={92}></img></Col>
                    <Col lg={10}>
                        <p className="nopadding fs-16 fw-500 my-1">User name</p>
                        <p className="nopadding fs-15 fw-400"><button className="btn btn-link nopadding">Change profile photo</button></p>
                    </Col>
                </Row>
                {userDetails.map(section => {
                    return <Row className="my-2">
                        <Col lg={6}><span className="align-middle">{section}</span></Col>
                        <Col lg={4}>
                            <Form>
                                <Form.Control type="input" className="round-s">

                                </Form.Control>

                            </Form>
                        </Col>
                        <Col lg={2}><button className="btn link w-100">Update</button></Col>
                    </Row>
                })}
            </Row>
        </section>
        
        <section className="border-bottom mx-0">
            <Row className="m-3">
                <Col lg={12} className="my-2">Link Accounts</Col>
                {links.map(link => {
                    return <Row className="my-2">
                        <Col lg={10}><span className="align-middle">{link}</span></Col>
                        <Col lg={2}>
                            <button className="btn link w-100" onClick={() => { onLink(link) }}>
                                {!isLinked.includes(link) ? "Link" : "Unlink"}
                            </button>
                        </Col>
                    </Row>

                })}
                <Col lg={12} className="fs-20 fw-500"></Col>
            </Row>
        </section>



    </Container>
}

export default Account