import React from 'react';

const EventHeader = (props) => {
  return (
    <div
      className='row g-0 justify-content-center align-content-center pb-3'
      style={{ backgroundColor: '#bcbcbc' }}
    >
      <div className='col-sm-6 col-lg-5 col-xxl-4 my-sm-5'>
        <h1>{props.eventTitle}</h1>
        <h4>{'Hosted by ' + props.eventCompany}</h4>
        <p className='me-5'>{props.eventDescription}</p>
      </div>
      <div className='col-sm-4 col-lg-3 col-xxl-2 ms-4 my-sm-5'>
        <div className='card border-0 ' style={{ borderRadius: '25px' }}>
          <div className='card-body'>
            <h5 className='card-title'>Date & Time</h5>
            <p className='card-text'>
              Feb 17 2023 at 1:30PM
              <br />
              All Star Stadium
            </p>
            <hr />
            <div className='text-center'>
              <a href='#' className='btn btn-secondary btn-lg'>
                Book Now
              </a>
              <p className='text-decoration-underline mt-1'>No Refunds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHeader;
