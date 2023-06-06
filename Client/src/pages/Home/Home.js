
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
import { HiOutlinePencil, HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { TfiEmail } from 'react-icons/tfi';

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
import PageNav from '../../components/pageNav/PageNav';

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
  const avatar = ''
  
  const [quickMessageClicked, setQuickMessageClicked] = useState(true);

  const users = [
    {
      name: 'User Name',
      message: 'Last Message',
      date: 'MM/DD/YY',
      profilePic: 'photo.png',
    },
    {
      name: 'Test User 1',
      message: 'Last Message',
      date: 'MM/DD/YY',
      profilePic: 'photo.png',
    },
    {
      name: 'Test User 2',
      message: 'Last Message',
      date: 'MM/DD/YY',
      profilePic: 'photo.png',
    },
    {
      name: 'User Name',
      message: 'Last Message',
      date: 'MM/DD/YY',
      profilePic: 'photo.png',
    },
    {
      name: 'User Name',
      message: 'Last Message',
      date: 'MM/DD/YY',
      profilePic: 'photo.png',
    },
  ];


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
                    <p className=' s-15 fw-500'>Username</p>
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
                      <button className='btn light float-end mt-4 round-l px-3 py-1 fw-400'>
                        <p className='fs-15 nopadding'>Post</p>
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
                  {
                    layerExamples.map((layer) => { /* switch to api data here */
                      return <Row><Col>
                        <button
                          className={filters.includes(layer) == true ? 
                            "btn btn-outline-0 post m-2 text-start w-100 shadow" : 
                            "btn btn-outline-0 bg-light m-2 text-start w-100"}
                          onClick={() => { editFilter(layer) }}>
                          <p className='nopadding fs-16 fw-400'>
                            {layer}
                          </p>

                        </button>
                      </Col></Row>
                    })
                  }
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
          </Col>

          <Col lg='9'>
            <PageNav
              options={['For you', 'Following']}
              tabFn={setTab}
              tab={tab}
            />
            <Row>
              <Col>
                {filters.map((filter) => {
                  return (
                    <button
                      className='btn light mx-2 my-2 px-4 fs-15 fw-500'
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
            {
              postExanples.map((post) => { /* switch to api data here */
                return (
                  <UserContent
                    img={placeHolder}
                    avatar={avatar}
                    user={'User Name'}
                    desc={'User Description'}
                    body={`Lorem ipsum dolor sit amet consectetur. Eget libero a convallis ut. Nunc fermentum et nunc commodo pulvinar lectus imperdiet vel tellus. Dolor accumsan elit consectetur fringilla dignissim. Quis elit egestas vulputate nec etiam mauris vel vel. Quisque amet sociis odio est neque.
                    #posttag #posttag`} />
                )
              })
            }
            <div className='card quick-messages'>
              <div class='card-header hover-pointer ps-2'>
                <div className='d-flex'>
                  <div className='notification-dot' />
                  <p className='m-0 fs-18'>Messages</p>
                  <span className='ms-auto'>
                    <TfiEmail className='me-3' size={25} />
                    <HiOutlineChevronDoubleUp
                      size={25}
                      style={
                        !quickMessageClicked
                          ? { transform: 'rotate(180deg)' }
                          : null
                      }
                      onClick={() =>
                        setQuickMessageClicked(!quickMessageClicked)
                      }
                    />
                  </span>
                </div>
              </div>
              <div class='' hidden={quickMessageClicked}>
                {users.map((user, index) => {
                  return (
                    <div className={'row my-3 px-3 hover-pointer'}>
                      <div className='d-flex'>
                        <div className='notification-dot' />
                        <img
                          src={require('../../assets/' + user.profilePic)}
                          height={60}
                        />
                        <div className='d-flex flex-column ms-2'>
                          <span className='my-auto'>
                            <p className='m-0'>{user.name}</p>
                            <p className='m-0'>{user.message}</p>
                          </span>
                        </div>
                        <p className='ms-auto mb-0'>{user.date}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
