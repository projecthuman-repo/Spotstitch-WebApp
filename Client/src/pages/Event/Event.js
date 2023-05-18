import React, { useEffect, useState } from 'react';
import EventHeader from '../../components/eventHeader/EventHeader';
import { BsInstagram, BsLinkedin, BsTwitter, BsFacebook } from 'react-icons/bs';
import ListingCard from '../../components/listingCard/ListingCard';
import { Link, useLocation } from 'react-router-dom';

const Event = () => {
  const [event, setEvent] = useState({});
  const [tags, setTags] = useState([]);
  const location = useLocation();
  // console.log(location.state.event);
  // const event = location.state.event;

  useEffect(() => {
    setEvent(location.state.event);
    setTags(
      location.state.event.eventTags.map((tag, index) => (
        <EventTag key={index} eventTag={tag} />
      ))
    );
  }, [location]);
  // setEvent(location.state.event);

  //   let event = {
  //     eventTitle: 'Cultural Celebration',
  //     eventCompany: 'Null Company',
  //     eventShortDescription:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     eventLongDescription:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     eventDate: 'Feb 17 2023',
  //     eventStartTime: '1:30PM',
  //     eventTime: '1:30PM - 6:00PM',
  //     eventLocation: 'All Star Stadium',
  //     eventAddress: '851 China Town Road, Vancouver BC V4S 9LC',
  //     eventEmail: 'nullCompany@gmail.com',
  //     eventTags: ['General Tag', 'General Tag', 'General Tag'],
  //   };
  return (
    <div className='container-fluid g-0'>
      <EventHeader event={event} />
      <div className='row g-0 my-5 justify-content-center'>
        <div className='col col-sm-7 col-xxl-6 text-center text-sm-start'>
          <div className='mx-3 mx-lg-5 px-5 px-sm-2 px-lg-3 px-xl-5 '>
            <h5>Description</h5>
            <p>{event.eventShortDescription}</p>
            <p>{event.eventLongDescription}</p>
            <h5>Hours</h5>
            <p>
              {event.eventDate}:{' '}
              <span className='fw-bold'>{event.eventTime}</span>
            </p>
            <h5>Questions</h5>
            <p>Contact host at {event.eventEmail} for further questions.</p>
            <h5>Share With Friends</h5>
            <div className='d-flex mt-3 mb-3 mb-sm-0 justify-content-center justify-content-sm-start'>
              <BsLinkedin size={30} />

              <BsInstagram className='ms-3' size={30} />

              <BsTwitter className='ms-3' size={30} />
              <BsFacebook className='ms-3' size={30} />
            </div>
          </div>
        </div>
        <div className='col col-sm-5 col-xxl-4'>
          <div className='mx-5 mx-sm-0 mx-lg-3 mx-xl-5 px-5 px-sm-1 px-lg-3 px-xl-5 '>
            <h5>Event Location</h5>
            <img
              src={require('../../assets/demoMap.png')}
              className='img-fluid'
              style={{ borderRadius: '25px' }}
            />
            <h5 className='mt-3'>{event.eventLocation}</h5>
            <p>{event.eventAddress}</p>
            <h5>Tags</h5>
            <div className='row row-cols-2'>{tags}</div>
          </div>
        </div>
      </div>
      <div
        className='row g-0 justify-content-center pb-4'
        style={{ backgroundColor: '#D9D9D9', color: '#666666' }}
      >
        <div className='col col-xxl-10 mt-5 '>
          <div className='mx-5 mx-sm-4 mx-lg-5 px-5 px-sm-0 px-lg-3 px-xl-5'>
            <h5>Other Events You May Like</h5>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-0'>
              <div className='col'>
                <ListingCard event={event} />
              </div>
              <div className='col'>
                <ListingCard event={event} />
              </div>
              <div className='col'>
                <ListingCard event={event} />
              </div>
              <div className='col'>
                <ListingCard event={event} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventTag = ({ eventTag }) => {
  return (
    <div className='col text-nowrap text-center'>
      <div
        className='rounded px-2 mt-2'
        style={{ backgroundColor: '#D9D9D9', fontSize: '90%' }}
      >
        {eventTag}
      </div>
    </div>
  );
};

export default Event;
