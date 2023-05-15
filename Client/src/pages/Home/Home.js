import './home.css'
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Container, Form, Row, Card, InputGroup } from "react-bootstrap";
import Navigation from '../../components/Navigation'
import { HiOutlinePencil } from 'react-icons/hi'
import { BsCameraVideo, BsCloudUpload, BsEmojiSmile, BsImage } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'

import avatar from './avatar.png'
import imgPH from './image-placeholder.jpg'
function Home() {
  const user = useSelector((state) => state.user);
  const [tab, setTab] = useState(1)
  const isActive = true;
  const layerExamples = ["test", "Categories", "test"]
  const postExanples = ["", "", ""]
  const emotor = useRef();

  function tabOnChange(i) {
    setTab(i);
  }

  function contentOnChange(content) {
    console.log(content);
  }

  function myClean() {
    console.log("clean");
    emotor.current.onFocus();
  }
  return (
    <div>
      <Navigation />
      <Container className='my-4'>
        <Row>
          <Col lg="3">
            <Card className="my-3">
              <Card.Body>
                <Row className='my-2'>
                  <Col lg={3}>
                    <img src={avatar} width={56} height={56}></img>
                  </Col>
                  <Col lg={9}>
                    Username
                  </Col>
                </Row>

                <Row >
                  <Form>
                    <Form.Group>
                      <Form.Control className="lighter input" as="textarea" placeholder='Share your life!' rows={4}></Form.Control>

                      <Row className=''>
                        <Col lg={1}><BsImage size={28} /></Col>
                        <Col lg={1}><BsCameraVideo size={28} /></Col>
                        <Col lg={1}><GoLocation size={28} /></Col>
                        <Col lg={1}><BsCloudUpload size={28} /> </Col>
                        <Col lg={1}><BsEmojiSmile size={28} /></Col>
                      </Row>

                      <button className='btn light float-end'>Post</button>
                    </Form.Group>

                  </Form>
                </Row>

              </Card.Body>
            </Card>

            <Card className="my-3">
              <Card.Body >
                <div className="row p-2" style={{ display: "flex", "align-items": "center" }}>
                  <div className="col-lg-10 ">Layers </div>
                  <div className="col-lg-2">
                    <button className="btn text-left"><HiOutlinePencil /></button>
                  </div>
                  <hr></hr>
                  {
                    layerExamples.map((category) => {
                      return <button className="btn bg-light m-2 text-start w-75">{category}</button>
                    })
                  }
                </div>

              </Card.Body>
            </Card>
          </Col >

          <Col lg="9">
            <Card className="my-3">
              <Card.Body className='nopadding'>
                <div className="d-flex justify-content-evenly">
                  <button className={tab == 1 ? "btn btn-nav active p-3" : "btn btn-nav"} onClick={() => tabOnChange(1)}>For you</button>
                  <button className={tab == 2 ? "btn btn-nav active p-3" : "btn btn-nav"} onClick={() => tabOnChange(2)}>Following</button>
                </div>
              </Card.Body>
            </Card>
            {
              postExanples.map((post) => {
                return (
                  <Card className="my-3 post">
                    <Card.Body className="shadow nopadding">
                      <Row>
                        <Col lg="7" className="rounded">
                          <img src={imgPH}></img>
                        </Col>
                        <Col lg="5">
                          <Row className='mx-2 my-3'>
                            <Col lg={2}>
                              <img src={avatar} width={56} height={56}></img>
                            </Col>
                            <Col lg={10}>
                              Username
                            </Col>
                          </Row>
                          <Row className='mx-3'>
                            test
                          </Row>
                          <Row>
                            reaction
                          </Row>
                          <Row >
                            <Col lg={11} className='mx-2'>
                              <hr style={{color:"white"}}/>
                              <Form className="d-flex">
                                <div className="input-group">
                                  <input
                                    className="form-control border-0 comment"
                                    type="text"
                                    placeholder="Add a comment..."
                                  />
                                  <span className="input-group-append">
                                    <button className="btn border-0 comment" type="button">
                                      a
                                    </button>
                                  </span>
                                </div>
                              </Form>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                )
              })
            }
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default Home;