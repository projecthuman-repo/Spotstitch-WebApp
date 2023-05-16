import './home.css'
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Form, Row, Card } from "react-bootstrap";
import Navigation from '../../components/Navigation'
import { HiOutlinePencil } from 'react-icons/hi'
import { BsCameraVideo, BsCloudUpload, BsEmojiSmile, BsImage } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'

import avatar from './avatar.png'
import imgPH from './image-placeholder.jpg'
import UserContent from './UserContent';
function Home() {
  const user = useSelector((state) => state.user);
  const [tab, setTab] = useState(1);
  const [filters, setFilters] = useState([]);

  const layerExamples = ["these", "are", "test", "layers", "replace later"]
  const postExanples = ["", "", ""]
  const uTest = true;

  const emotor = useRef();

  function editFilter(layerName) {
    const newFilters = [...filters];
    if (filters.includes(layerName)) newFilters.splice(newFilters.indexOf(layerName), 1)
    else newFilters.push(layerName)
    setFilters(newFilters)
  }

  function tabOnChange(i) {
    setTab(i);
  }

  function myClean() {
    console.log("clean");
    emotor.current.onFocus();
  }

  return (
    <div>
      <Navigation />
      <Container className='my-4 '>
        <Row>
          <Col lg="3">
            <Card className="my-3 content-border">
              <Card.Body>
                <Row className='my-2'>
                  <Col lg={3}>
                    <img className='avatar shadow' src={avatar} width={56} height={56}></img>
                  </Col>
                  <Col lg={9}>
                    Username
                  </Col>
                </Row>

                <Row >
                  <Form>
                    <Form.Group>
                      <Form.Control className="lighter input" as="textarea" placeholder='Share your life!' rows={4}></Form.Control>

                      <Row className='px-1'>
                        <Col lg={1}><BsImage size={20} /></Col>
                        <Col lg={1}><BsCameraVideo size={20} /></Col>
                        <Col lg={1}><GoLocation size={20} /></Col>
                        <Col lg={1}><BsCloudUpload size={20} /> </Col>
                        <Col lg={1}><BsEmojiSmile size={20} /></Col>
                      </Row>

                      <button className='btn light float-end mt-4 rounded-pill px-3'>Post</button>
                    </Form.Group>

                  </Form>
                </Row>

              </Card.Body>
            </Card>

            <Card className="my-3 content-border">
              <Card.Body >
                <div className="row p-2" style={{ display: "flex", "align-items": "center" }}>
                  <div className="col-lg-10 ">{ uTest ? 'Layers' : 'Connections'} </div>
                  <div className="col-lg-2">
                    <button className="btn text-left"><HiOutlinePencil /></button>
                  </div>
                  <hr ></hr>
                  {
                    layerExamples.map((layer) => {
                      return <Row><Col>
                        <button
                          className={filters.includes(layer) == true ? "btn post m-2 text-start w-100 shadow" : "btn bg-light m-2 text-start w-100"}
                          onClick={() => { editFilter(layer) }}>
                          {layer}
                        </button>
                      </Col></Row>
                    })
                  }
                </div>

              </Card.Body>
            </Card>
          </Col >

          <Col lg="9">
            <Card className="my-3 content-border">
              <Card.Body className='nopadding'>
                <div className="d-flex justify-content-evenly">
                  <button className={tab == 1 ? "btn-nav active p-3" : "btn-nav p-3"} onClick={() => tabOnChange(1)}>For you</button>
                  <button className={tab == 2 ? "btn-nav active p-3" : "btn-nav p-3"} onClick={() => tabOnChange(2)}>Following</button>
                </div>
              </Card.Body>
            </Card>
            <Row>
              <Col>
                {
                  filters.map(filter => {
                    return <button className='btn light mx-2' onClick={() => { editFilter(filter) }}>{filter}</button>
                  })
                }
              </Col>
            </Row>
            {
              postExanples.map((post) => {
                return (
                  <UserContent img={imgPH} avatar={avatar} user={'name'} desc={'desc'} body={"test"} />
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