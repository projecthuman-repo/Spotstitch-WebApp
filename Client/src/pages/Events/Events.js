import React from 'react';
import ListingCard from '../../components/listingCard/ListingCard';
import EventHeader from '../../components/eventHeader/EventHeader';
import './event.css';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const navigate = useNavigate();
  const navigateToListing = (eventClicked) => {
    navigate('/events-event', { state: { event: eventClicked } });
  };
  let event = {
    eventTitle: 'Cultural Celebration',
    eventCompany: 'Null Company',
    eventShortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    eventLongDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    eventDate: 'Feb 17 2023',
    eventStartTime: '1:30PM',
    eventTime: '1:30PM - 6:00PM',
    eventLocation: 'All Star Stadium',
    eventAddress: '851 China Town Road, Vancouver BC V4S 9LC',
    eventEmail: 'nullCompany@gmail.com',
    eventPrice: '$$',
    eventTags: ['General Tag', 'General Tag', 'General Tag', 'General Tag'],
  };
  let event1 = {
    eventTitle: 'Basketball Event',
    eventCompany: 'Null Company',
    eventShortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    eventLongDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    eventDate: 'Feb 17 2023',
    eventStartTime: '1:30PM',
    eventTime: '1:30PM - 6:00PM',
    eventLocation: 'All Star Stadium',
    eventAddress: '851 China Town Road, Vancouver BC V4S 9LC',
    eventEmail: 'nullCompany@gmail.com',
    eventPrice: '$',
    eventTags: ['General Tag', 'General Tag', 'General Tag'],
  };

  return (
    <div className='container-fluid g-0'>
      <div
        id='carouselIndicators'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselIndicators'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselIndicators'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselIndicators'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselIndicators'
            data-bs-slide-to='3'
            aria-label='Slide 4'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselIndicators'
            data-bs-slide-to='4'
            aria-label='Slide 5'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselIndicators'
            data-bs-slide-to='5'
            aria-label='Slide 6'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <EventHeader event={event} page={'Events'} />
          </div>
          <div className='carousel-item'>
            <EventHeader event={event1} page={'Events'} />
          </div>
          <div className='carousel-item'>
            <EventHeader event={event} page={'Events'} />
          </div>
          <div className='carousel-item'>
            <EventHeader event={event} page={'Events'} />
          </div>
          <div className='carousel-item'>
            <EventHeader event={event} page={'Events'} />
          </div>
          <div className='carousel-item'>
            <EventHeader event={event} page={'Events'} />
          </div>
        </div>
      </div>

      <div className='row g-0'>
        <div className='col-4 col-sm-3 col-md-2'>
          <div
            className='border border-2 rounded p-2 mx-2 my-3'
            style={{ borderColor: '#C4C4C4' }}
          >
            <p>Events</p>
            <input type='text' className='form-control' />

            <p>Filters</p>
            <p>Toronto, Ontario . Within 20 Km</p>
            <hr style={{ color: '#757575' }} />

            <div className='text-nowrap'>
              <p>Price Range</p>
              <div className='form-check'>
                <input type='radio' className='form-check-input' />
                <label className='form-check-label'>All</label>
              </div>
              <div className='form-check'>
                <input type='radio' className='form-check-input' />
                <label className='form-check-label'>$0 - $20</label>
              </div>
              <div className='form-check'>
                <input type='radio' className='form-check-input' />
                <label className='form-check-label'>$20 - $50</label>
              </div>
              <div className='form-check'>
                <input type='radio' className='form-check-input' />
                <label className='form-check-label'>$50 - $100</label>
              </div>
            </div>
            <div className='form-check'>
              <input type='radio' className='form-check-input' />
              <label className='form-check-label'>$100 and Above</label>
            </div>
            <div className='d-block d-lg-flex mt-2 mx-2 mx-sm-0 text-center'>
              <input
                type='text'
                className='form-control form-control-sm mx-1'
                placeholder='$'
              />
              <span className='my-auto'>-</span>{' '}
              <input
                type='text'
                className='form-control form-control-sm mx-1'
                placeholder='$'
              />
              <button
                className='btn btn-sm mt-2 my-lg-auto'
                style={{
                  backgroundColor: '#D9D9D9',
                }}
              >
                Go
              </button>
            </div>
            <hr style={{ color: '#757575' }} />

            <p>Categories</p>
            <div className='form-check'>
              <input type='radio' className='form-check-input' />
              <label className='form-check-label'>Category Name</label>
            </div>
            <div className='form-check'>
              <input type='radio' className='form-check-input' />
              <label className='form-check-label'>Category Name</label>
            </div>
            <div className='form-check'>
              <input type='radio' className='form-check-input' />
              <label className='form-check-label'>Category Name</label>
            </div>
            <div className='form-check'>
              <input type='radio' className='form-check-input' />
              <label className='form-check-label'>Category Name</label>
            </div>
            <div className='form-check'>
              <input type='radio' className='form-check-input' />
              <label className='form-check-label'>Category Name</label>
            </div>
            <div className='form-check'>
              <input type='radio' className='form-check-input' />
              <label className='form-check-label'>Category Name</label>
            </div>
            <div className='form-check'>
              <input type='radio' className='form-check-input' />
              <label className='form-check-label'>Category Name</label>
            </div>
          </div>
        </div>
        <div className='col-8 col-sm-9 col-md-10'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  row-cols-xxl-5 g-0'>
            <div className='col'>
              <ListingCard event={event} thisClicked={navigateToListing} />
            </div>
            <div className='col'>
              <ListingCard event={event1} thisClicked={navigateToListing} />
            </div>
            <div className='col'>
              <ListingCard event={event} thisClicked={navigateToListing} />
            </div>
            <div className='col'>
              <ListingCard event={event} thisClicked={navigateToListing} />
            </div>
            <div className='col'>
              <ListingCard event={event} thisClicked={navigateToListing} />
            </div>
            <div className='col'>
              <ListingCard event={event} thisClicked={navigateToListing} />
            </div>
            <div className='col'>
              <ListingCard event={event} thisClicked={navigateToListing} />
            </div>
            <div className='col'>
              <ListingCard event={event} thisClicked={navigateToListing} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
