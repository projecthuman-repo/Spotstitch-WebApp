import React, { useState } from 'react';
import ListingCard from '../../components/listingCard/ListingCard';
import EventHeader from '../../components/eventHeader/EventHeader';
import './event.css';
import { useNavigate } from 'react-router-dom';
import ItemCard from '../../components/listingCard/ItemCard';

const Events = () => {
  const [carouselTab, setCarouselTab] = useState(0);
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

  const carouselItems = ['', '', '', '', '']
  const priceFilters = ['All', '$0 - $20', '$20 - $50', '$50 - $100', '$100 and Above']
  const Categories = ['Category Name', 'Category Name', 'Category Name', 'Category Name', 'Category Name', 'Category Name']
  const eventListing = [event, event, event, event, event, event, event, event];
  return (
    <div className='container-fluid g-0'>
      <div
        id='carouselIndicators'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          {
            carouselItems.map((slide, index) => {
              return <button
                type='button'
                data-bs-target='#carouselIndicators'
                className={index == carouselTab ? 'active' : ''}
                data-bs-slide-to={`${index}`}
                aria-current={index == carouselTab ? 'true' : ''}
                aria-label={`Slide ${index + 1}`}
              ></button>
            })
          }
        </div>
        <div className='carousel-inner'>
          {
            carouselItems.map((item, index) => {
              return <div className={index == carouselTab ? 'carousel-item active' : 'carousel-item'}>
                <EventHeader event={event} page={'Events'} />
              </div>
            })
          }
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
              {
                priceFilters.map((price, index) => {
                  return <div className='form-check'>
                    <input type='radio' className='form-check-input' name='price' id={`priceFilter_${index}`} />
                    <label className='form-check-label'>{price}</label>
                  </div>
                })
              }
            </div>
            <div className='d-block d-lg-flex mt-2 mx-2 mx-sm-0 text-center'>
              <input type='text' className='form-control form-control-sm mx-1' placeholder='$' />
              <span className='my-auto'>-</span>{' '}
              <input type='text' className='form-control form-control-sm mx-1' placeholder='$' />
              <button className='btn btn-sm mt-2 my-lg-auto' style={{ backgroundColor: '#D9D9D9', }} >
                Go
              </button>
            </div>
            <hr style={{ color: '#757575' }} />

            <p>Categories</p>
            {
              Categories.map((category, index) => {
                return <div className='form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input round-label'
                    name={`${category}`}
                    id={`categoryFilter_${index}`}
                  />
                  <label className='form-check-label'>Category Name</label>
                </div>
              })
            }

          </div>
        </div>
        <div className='col-8 col-sm-9 col-md-10'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  row-cols-xxl-5 g-0'>
            {
              eventListing.map((e, index) => {
                return <div className='col'>
                  <ListingCard event={e} thisClicked={navigateToListing}/>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
