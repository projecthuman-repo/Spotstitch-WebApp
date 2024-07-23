import React, { useEffect, useState } from 'react';
import { useImmer, useImmerReducer } from 'use-immer'
import PageNav from '../../components/pageNav/PageNav';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './messages.css';
import { MdOutlineSearch } from 'react-icons/md';
import { HiOutlinePhoto, HiOutlineFaceSmile } from 'react-icons/hi2';
import { BsSend } from 'react-icons/bs';
import ChatTile from './ChatTile';
import socket from '../../services/chat/socket';
import { sendMessage, createChat, connect, getChats, getChat } from '../../services/chat/chatApp'
import MessageHistory from './MessageHistory';
import chatReducer from './chatReducer';
import socketEvents from '../../services/chat/socketEvents';
import { useDispatch, useSelector } from 'react-redux';
import { chatCreated, updateChats, updateCurrentChat, messageRecieved } from '../../features/Chat/chatSlice';

const Messages = () => {
  const dummyChatHistory = [
    { _id: 1, content: 'Hello', author: 'User1' },
    { _id: 2, content: 'Hi', author: 'User2' },
  ];

  const dummyCurrentChat = { _id: 1, message: 'Hello', author: 'User1'};


  const [chatHistory, setChatHistory] = useState(dummyChatHistory);
  // const currentChat = useSelector(state => state.chat.currentChat)
  const [currentChat, setCurrentChat] = useState(dummyCurrentChat);
  // const chatHistory = useSelector(state => state.chat.chatHistory)
  const chatList = useSelector(state => state.chat.chatList)
  const [pending, setPending] = useState(false)
  const user = useSelector(state => state.user)
  const userId = useSelector(state => state.user.id)
  const dispatch = useDispatch()

  useEffect(async () => {
    async function onMessageRecieved(chatId, message) {
      dispatch(messageRecieved({ chatId: chatId, message: message }))
    }

    async function onChatCreated(chat) {
      dispatch(chatCreated({ chat: chat }))
    }

    async function onGetAllChats(chats) {
      dispatch(updateChats({ chats: chats }))
    }

    socket.on(socketEvents.messageSent, onMessageRecieved)
    socket.on(socketEvents.chatCreated, onChatCreated)
    socket.on(socketEvents.chatSentAll, onGetAllChats)

    await connect()
    await getChats()

    return () => {
      socket.off(socketEvents.messageSent, onMessageRecieved)
      socket.off(socketEvents.chatCreated, onChatCreated)
      socket.off(socketEvents.chatSentAll, onGetAllChats)
    };
  }, []);

  const onChatClick = async (chat, chatId, index) => {
    dispatch(updateCurrentChat({ chatId: chatId }))
  };

  const chatArray = () => {
    return Object.values(chatList)
  }

  const NewChat = () => {
    return (
      <div className='my-auto mx-auto px-5' style={{ width: '60%' }}>
        <h3>Select a message</h3>
        <p>Choose from your existing conversations or start a new one</p>
        <button className='btn btn-lg-gray bg-e6 px-5'>New Message</button>
      </div>
    );
  };

  const onMessage = async (event) => {
    event.preventDefault()
    const message = event.target.message.value
    if (!message) return
    event.target.reset()
    const res = await sendMessage(currentChat, message)
    console.log(res)
  }

  const onCreateChat = () => {

    console.log(user)
    console.log(user._id)
    var member1 = user._id || "1";
    var member2 = undefined || "2"; // Undefined is temp. Second member username

    createChat([member1])
  }

  return (
    <div className='container mt-5'>
      <Row>
        <PageNav options={['Messages']} />
      </Row>
      <Row className='mt-3 content-border-l round-s'>
        <Col lg='6' className='content-border-end'>
          <div className='px-5'>
            <div className='input-group search-field bg-e6 my-3'>
              <span className='input-group-text search-field bg-e6 border-0'>
                <MdOutlineSearch />
              </span>
              <Form.Control
                className='search-field bg-e6 border-0'
                type='search'
                placeholder='Search for direct messages...'
              />
            </div>
          </div>
          <div className='row m-2'>
            <button className='btn btn-outline-0 bg-e6' onClick={onCreateChat}>New Message</button>
          </div>
          {chatArray().length > 0 && chatArray().map((chat, index) => {
            return (
              <ChatTile
                key={chat._id}
                chat={chat.content}
                curr={currentChat}
                onChatClick={() => onChatClick(chat, chat._id, index)}
              />
            )
          })}
          {chatArray().length > 0 && chatArray().map((chat, index) => {
            return (
              <div
                className={
                  currentChat === chat._id
                    ? 'row my-3 bg-e6 px-5 hover-pointer'
                    : 'row my-3 px-5 hover-pointer'
                }
                onClick={() => onChatClick(chat, chat._id, index)}
                key={chat._id}
              >
                <div className='d-flex'>
                  <img
                    src={require('../../assets/photo.png')}
                    height={60}
                  />
                  <div className='d-flex flex-column ms-2'>
                    <span className='my-auto'>

                      <p className='m-0'>{chat.users}</p>
                      <p className='m-0'>{chat.history[-1]}</p>
                    </span>
                  </div>
                  <p className='ms-auto mb-0'>date</p>
                </div>
              </div>
            )
          })}

        </Col>
        <Col lg='6'>
          <Row className='h-100'>
            {!currentChat && <NewChat />}
            {currentChat &&
              <div className='d-flex flex-column'>
                {/* <MessageHistory history={chatHistory} key={currentChat} /> */}
                <MessageHistory history={chatHistory} />
                
                <div className='d-flex flex-column mt-auto py-3'>
                  <form className='input-group search-field bg-e6 my-3' onSubmit={onMessage}>
                    <span className='input-group-text search-field bg-e6 border-0'>
                      <HiOutlinePhoto />
                    </span>
                    <span className='input-group-text search-field bg-e6 border-0'>
                      <HiOutlineFaceSmile />
                    </span>
                    <Form.Control
                      name='message'
                      className='search-field bg-e6 border-0'
                      type='search'
                      placeholder='Send a message...'
                    />
                    <span className='input-group-text search-field bg-e6 border-0'>
                      <button type='submit' className='btn btn-outline-0 px-2'><BsSend /></button>
                    </span>
                  </form>
                </div>
              </div>
            }
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Messages;