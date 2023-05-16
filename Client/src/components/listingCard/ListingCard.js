import React from 'react';

const ListingCard = () => {
  return (
    <div className='card my-3 mx-2 shadow' style={{ borderRadius: '25px' }}>
      <img
        src={require('../../assets/holderimg.png')}
        className='card-img-top '
        style={{ borderRadius: '25px 25px 0px 0px' }}
      />
      <div className='card-body'>
        <h5 className='card-title'>Listing Name</h5>
        <p className='card-text'>
          Description of the Event
          <br />
          Price: $$
        </p>
        <div className='row row-cols-auto g-0 mx-1'>
          <EventTag />
          <EventTag />
          <EventTag />
          <EventTag />
        </div>
      </div>
    </div>
  );
};

const EventTag = () => {
  return (
    <div className='col'>
      <div
        className='rounded-pill ps-3 pe-2 mt-2 mx-1'
        style={{ backgroundColor: '#bcbcbc' }}
      >
        Event Tag <span className='rounded-circle bg-white p-1 ms-4'>x</span>
      </div>
    </div>
  );
};

export default ListingCard;
