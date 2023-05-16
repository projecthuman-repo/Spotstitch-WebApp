import React from 'react';
import ListingCard from '../../components/listingCard/ListingCard';
import EventHeader from '../../components/eventHeader/EventHeader';
import './event.css';

const Events = () => {
  let eventTitle = 'Cultural Celebration';
  let eventCompany = 'Null Company';
  let eventDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  return (
    <div className='container-fluid g-0'>
      <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='3'
            aria-label='Slide 4'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='4'
            aria-label='Slide 5'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='5'
            aria-label='Slide 6'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <EventHeader
              eventTitle={eventTitle}
              eventCompany={eventCompany}
              eventDescription={eventDescription}
            />
          </div>
          <div className='carousel-item'>
            <EventHeader
              eventTitle={eventTitle}
              eventCompany={eventCompany}
              eventDescription={eventDescription}
            />
          </div>
          <div className='carousel-item'>
            <EventHeader
              eventTitle={eventTitle}
              eventCompany={eventCompany}
              eventDescription={eventDescription}
            />
          </div>
          <div className='carousel-item'>
            <EventHeader
              eventTitle={eventTitle}
              eventCompany={eventCompany}
              eventDescription={eventDescription}
            />
          </div>
          <div className='carousel-item'>
            <EventHeader
              eventTitle={eventTitle}
              eventCompany={eventCompany}
              eventDescription={eventDescription}
            />
          </div>
          <div className='carousel-item'>
            <EventHeader
              eventTitle={eventTitle}
              eventCompany={eventCompany}
              eventDescription={eventDescription}
            />
          </div>
        </div>
      </div>

      <div className='row g-0'>
        <div className='col-2'>
          <div className='border rounded p-2 mx-2 my-3'>
            <p>Events</p>
            <input type='text' className='form-control' />

            <p>Filters</p>
            <p>Toronto, Ontario . Within 20 Km</p>
            <hr />

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
              <label className='form-check-label'>$20 - $50</label>
            </div>
            <div className='form-check'>
              <input type='radio' className='form-check-input' />
              <label className='form-check-label'>$100 and Above</label>
            </div>
            <hr />

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
        <div className='col-10'>
          <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 g-0'>
            <div className='col'>
              <ListingCard />
            </div>
            <div className='col'>
              <ListingCard />
            </div>
            <div className='col'>
              <ListingCard />
            </div>
            <div className='col'>
              <ListingCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
