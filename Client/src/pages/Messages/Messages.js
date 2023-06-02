import React, { useEffect, useState } from 'react';
import PageNav from '../../components/pageNav/PageNav';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './messages.css';
import { MdOutlineSearch } from 'react-icons/md';
import { HiOutlinePhoto, HiOutlineFaceSmile } from 'react-icons/hi2';
import { BsSend } from 'react-icons/bs';

const Messages = () => {
  const [rightScreen, setRightScreen] = useState([]);

  useEffect(() => {
    setRightScreen(<NewMessage />);
  }, []);

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

  const onMessageClick = (user) => {
    setRightScreen(<ClickedMessage user={user} />);
  };

  const NewMessage = () => {
    return (
      <div className='my-auto mx-auto px-5' style={{ width: '60%' }}>
        <h3>Select a message</h3>
        <p>Choose from your existing conversations or start a new one</p>
        <button className='btn btn-lg-gray px-5'>New Message</button>
      </div>
    );
  };

  const ClickedMessage = ({ user }) => {
    console.log(user.name);
    return (
      <div className='d-flex flex-column'>
        <div className='mb-auto text-center'>
          <h5 className='mt-3'>{user.name}</h5>
        </div>
        <div className='d-flex flex-column mt-auto'>
          <div className='d-flex ms-auto message-blob'>
            <p>{user.message}</p>
          </div>
          <p className='ms-auto mb-0 fs-14'>{user.date}</p>
          <div className='d-flex flex-column mt-auto'>
            <div className='input-group search-field my-3'>
              <span className='input-group-text search-field border-0'>
                <HiOutlinePhoto />
              </span>
              <span className='input-group-text search-field border-0'>
                <HiOutlineFaceSmile />
              </span>
              <Form.Control
                className='search-field border-0'
                type='search'
                placeholder='Send a message...'
              />
              <span className='input-group-text search-field border-0'>
                <BsSend />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Container>
        <Row>
          <PageNav options={['Messages']} />
        </Row>
        <Row className='mt-3 content-border-l round-s'>
          <Col lg='6' className='content-border-end px-5'>
            <div className='input-group search-field my-3'>
              <span className='input-group-text search-field border-0'>
                <MdOutlineSearch />
              </span>
              <Form.Control
                className='search-field border-0'
                type='search'
                placeholder='Search for direct messages...'
              />
            </div>

            {users.map((user, index) => {
              return (
                <div
                  className='d-flex my-3'
                  onClick={() => onMessageClick(user)}
                >
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
              );
            })}
          </Col>
          <Col lg='6'>
            <Row className='h-100'>{rightScreen}</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Messages;
