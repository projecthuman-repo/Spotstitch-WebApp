import './home.css';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Col,
  Container,
  Form,
  Row,
  Card,
  Popover,
  OverlayTrigger,
} from 'react-bootstrap';
import Navigation from '../../components/Navigation/Navigation';
import { HiOutlinePencil } from 'react-icons/hi';
import {
  BsCameraVideo,
  BsCloudUpload,
  BsEmojiSmile,
  BsImage,
} from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';

import avatar from './avatar.png';
import placeHolder from '../../assets/holderimg.png';

import UserContent from './UserContent';
import VendorConnections from './VendorConnections';
import CreateLayerModal from './CreateLayerModal';

function Home({ vendor = false }) {
  const user = useSelector((state) => state.user);
  const [tab, setTab] = useState(1);
  const [filters, setFilters] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [popoverShow, setPopoverShow] = useState(false);

  const popover = (
    <Popover id='popover-basic' className='mt-5'>
      <Popover.Body>
        <p className='btn-layer py-3 px-1 m-0'>Edit Layers</p>
        <hr className='m-0' />
        <p
          className='btn-layer py-3 px-1 m-0'
          onClick={() => {
            setModalShow(true);
            setPopoverShow(false);
          }}
        >
          Create new layer
        </p>
      </Popover.Body>
    </Popover>
  );

  const layerExamples = ['these', 'are', 'test', 'layers', 'replace later'];
  const postExanples = ['', '', ''];

  const emotor = useRef();

  function editFilter(layerName) {
    const newFilters = [...filters];
    if (filters.includes(layerName))
      newFilters.splice(newFilters.indexOf(layerName), 1);
    else newFilters.push(layerName);
    setFilters(newFilters);
  }

  function tabOnChange(i) {
    setTab(i);
  }

  function addAttachment(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Navigation />

      <Container className='my-4 '>
        <CreateLayerModal show={modalShow} onHide={() => setModalShow(false)} />
        <Row>
          <Col lg='3'>
            <Card className='my-3 content-border-l round-s'>
              <Card.Body>
                <Row className='mb-3'>
                  <Col lg={3}>
                    <img
                      className='avatar shadow'
                      src={avatar}
                      width={56}
                      height={56}
                    ></img>
                  </Col>
                  <Col lg={9}>
                    <p className='nopadding s-15 f-500'>Username</p>
                  </Col>
                </Row>

                <Row>
                  <Form>
                    <Form.Group>
                      <Form.Control
                        className='lighter input'
                        as='textarea'
                        placeholder='Share your life!'
                        rows={4}
                      ></Form.Control>

                      <Row className='px-1'>
                        <span>
                          <button
                            className='btn nopadding'
                            onClick={addAttachment}
                          >
                            <BsImage size={20} />
                          </button>
                          <button
                            className='btn nopadding'
                            onClick={addAttachment}
                          >
                            <BsCameraVideo size={20} />
                          </button>
                          <button
                            className='btn nopadding'
                            onClick={addAttachment}
                          >
                            <GoLocation size={20} />
                          </button>
                          <button
                            className='btn nopadding'
                            onClick={addAttachment}
                          >
                            <BsCloudUpload size={20} />
                          </button>
                          <button
                            className='btn nopadding'
                            onClick={addAttachment}
                          >
                            <BsEmojiSmile size={20} />
                          </button>
                        </span>
                      </Row>

                      <button className='btn light float-end mt-4 round-l px-3 py-1 f-400'>
                        <p className='s15 nopadding'>Post</p>
                      </button>
                    </Form.Group>
                  </Form>
                </Row>
              </Card.Body>
            </Card>

            <Card className='my-3 content-border-l round-s'>
              <Card.Body>
                <div
                  className='row p-2'
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <div className='col-lg-10 s-16 f-mid'>
                    {vendor ? 'Connections' : 'Layers'}{' '}
                  </div>
                  <div className='col-lg-2'>
                    <OverlayTrigger
                      trigger='click'
                      placement='right'
                      overlay={popover}
                      show={popoverShow}
                    >
                      <button
                        className='btn text-left'
                        onClick={() => setPopoverShow(!popoverShow)}
                      >
                        <HiOutlinePencil />
                      </button>
                    </OverlayTrigger>
                  </div>
                  <hr></hr>
                  {layerExamples.map((layer, index) => {
                    /* switch to api data here */
                    return (
                      <Row key={index}>
                        <Col>
                          <button
                            className={
                              filters.includes(layer) == true
                                ? 'btn post m-2 text-start w-100 shadow'
                                : 'btn bg-light m-2 text-start w-100'
                            }
                            onClick={() => {
                              editFilter(layer);
                            }}
                          >
                            <p className='nopadding s16 f-400'>{layer}</p>
                          </button>
                        </Col>
                      </Row>
                    );
                  })}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg='9'>
            <Card className='mt-3 content-border-l round-s'>
              <Card.Body className='nopadding'>
                <div className='d-flex justify-content-evenly'>
                  <button
                    className={tab == 1 ? 'btn-nav active p-3' : 'btn-nav p-3'}
                    onClick={() => tabOnChange(1)}
                  >
                    <p className='nopadding s-16 f-500'>For you</p>
                  </button>
                  <button
                    className={tab == 2 ? 'btn-nav active p-3' : 'btn-nav p-3'}
                    onClick={() => tabOnChange(2)}
                  >
                    <p className='nopadding s-16 f-500'>Following</p>
                  </button>
                </div>
              </Card.Body>
            </Card>
            <Row>
              <Col>
                {filters.map((filter, index) => {
                  return (
                    <button
                      key={index}
                      className='btn light mx-2 my-2 s15 f-500'
                      onClick={() => {
                        editFilter(filter);
                      }}
                    >
                      {filter}
                    </button>
                  );
                })}
              </Col>
            </Row>
            {/* <VendorConnections /> test view */}
            {postExanples.map((post, index) => {
              /* switch to api data here */
              return (
                <UserContent
                  key={index}
                  img={placeHolder}
                  avatar={avatar}
                  user={'name'}
                  desc={'desc'}
                  body={'test'}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
