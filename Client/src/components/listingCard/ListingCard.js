import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './listingCard.css';

const ListingCard = (props) => {
  const [event, setEvent] = useState({});
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // console.log(props.event);
    setEvent(props.event);
    if (props.event.eventTags) {
      setTags(
        props.event.eventTags.map((tag, index) => (
          <EventTag key={index} eventTag={tag} />
        ))
      );
    }
  }, [props.event]);
  return (
    <div
      className='card my-3 mx-2 shadow listingCard'
      style={{ borderRadius: '25px' }}
      onClick={() => props.thisClicked(event)}
    >
      <img
        src={require('../../assets/holderimg.png')}
        className='card-img-top '
        style={{ borderRadius: '25px 25px 0px 0px', height: '13vh' }}
      />
      <div className='card-body' style={{ fontSize: 'smaller' }}>
        <h5 className='card-title fs-6'>{event.eventTitle}</h5>
        <p className='card-text mb-1'>
          {event.eventShortDescription}
          <br />
          Price: {event.eventPrice}
        </p>
        <div className='row row-cols-2 g-0'>
          {/* {props.event.eventTags.map((tag, index) => (
            <EventTag key={index} eventTag={tag} />
          ))} */}
          {tags.length > 0 ? tags : null}
        </div>
      </div>
    </div>
  );
};

const EventTag = ({ eventTag }) => {
  return (
    <div className='col text-nowrap text-center mt-1'>
      <div
        className='rounded-pill px-2'
        style={{ backgroundColor: '#D9D9D9', fontSize: '90%' }}
      >
        {eventTag}{' '}
        <AiOutlineClose
          className='ms-2 me-1'
          style={{ backgroundColor: 'white', borderRadius: '25px' }}
        />
      </div>
    </div>
  );
};

export default ListingCard;
