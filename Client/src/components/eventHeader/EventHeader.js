import React, { useEffect, useState } from 'react';
import { TiChevronLeftOutline } from 'react-icons/ti';
import { useLocation, useNavigate } from 'react-router-dom';
import './eventHeader.css';

const EventHeader = (props) => {
  const [backButton, setBackButton] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate('/events');
  };

  const navigateBookEvent = () => {
    navigate('/events-bookevent', { state: { event: props.event } });
  };

  const updateBackButton = () => {
    if (location.pathname === '/events') {
      setBackButton(null);
    } else if (location.pathname === '/events-event') {
      setBackButton(
        <div className='d-flex mt-3 backButton' onClick={navigateBack}>
          <TiChevronLeftOutline className='ms-2' size={40} />
          <h5 className='my-auto'>Back</h5>
        </div>
      );
    }
  };

  useEffect(() => {
    updateBackButton();
  }, [location]);

  return (
    <div
      className={`row g-0 justify-content-center pb-5  ${
        location.pathname === '/events' ? 'pt-5' : null
      }`}
      style={{ backgroundColor: '#D9D9D9', color: '#666666' }}
    >
      {backButton}

      <div
        className='col col-sm-7 col-xxl-6 my-3  text-center text-sm-start '
        style={{ color: '#5b5b5b' }}
      >
        <div className='mx-3 ms-lg-5 px-5 px-sm-2 px-lg-3 px-xl-5 mt-2'>
          <h1 style={{ fontSize: '64px' }}>{props.event.eventTitle}</h1>
          <h4 style={{ fontSize: '36px' }}>
            {'Hosted by ' + props.event.eventCompany}
          </h4>
          <p style={{ fontSize: '20px' }}>
            {props.event.eventShortDescription}
          </p>
        </div>
      </div>
      <div className='col col-sm-5 col-xxl-4 mb-3 px-md-3'>
        <div className='mx-5 mx-sm-0 mx-lg-3 mx-xl-5 px-5 px-sm-1 px-lg-3 px-xl-5 mt-4'>
          <div className='card border-0' style={{ borderRadius: '25px' }}>
            <div className='card-body'>
              <h5 className='card-title'>Date & Time</h5>
              <p className='card-text'>
                {props.event.eventDate} at {props.event.eventStartTime}
                <br />
                {props.event.eventLocation}
              </p>
              <hr />
              <div className='d-grid text-center '>
                <button
                  onClick={navigateBookEvent}
                  className='btn btn-secondary btn-lg   py-1'
                  style={{
                    backgroundColor: '#666666',
                    color: 'white',
                    borderRadius: '8px',
                  }}
                >
                  <span className=' text-nowrap' style={{ fontSize: '36px' }}>
                    Book Now
                  </span>
                </button>
                <p className='text-decoration-underline mt-3'>No Refunds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHeader;
