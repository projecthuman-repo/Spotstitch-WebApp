import React from 'react';
import { MdOutlineAddAPhoto, MdOutlinePlayCircleOutline } from 'react-icons/md';

const CreateEvent = () => {
  return (
    <div className='container-fluid g-0'>
      <div
        className='border border-2 rounded m-2 m-md-3 p-2 p-md-3'
        style={{ borderColor: '#C4C4C4' }}
      >
        <h5>Create Event</h5>
        <p>Add some photos and details about your event.</p>

        <div
          className='row g-0 border border-2 rounded m-2 m-md-3 p-3 p-md-4'
          style={{ borderColor: '#C4C4C4' }}
        >
          <h5>Photos</h5>
          <div className='col-12 col-xl-6 col-xxl-5 me-xxl-5'>
            <p>Add as many photos as you can so buyers can see every detail.</p>
            <div className='row row-cols-2 row-cols-sm-3 g-0'>
              <div className='col'>
                <MediaSquare
                  text={'Add Photo'}
                  icon={<MdOutlineAddAPhoto size={50} />}
                />
              </div>
              <div className='col'>
                <MediaSquare
                  text={'Add Photo'}
                  icon={<MdOutlineAddAPhoto size={50} />}
                />
              </div>
              <div className='col'>
                <MediaSquare
                  text={'Add Photo'}
                  icon={<MdOutlineAddAPhoto size={50} />}
                />
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-6'>
            <p>Adjust Thumbnail</p>
            <div className='d-flex'>
              <div className='flex-shrink-0'>
                <MediaSquare
                  text={'Add Photo'}
                  icon={<MdOutlineAddAPhoto size={50} />}
                />
              </div>
              <div className='flex-grow-1 ms-3'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className='row g-0 border border-2 rounded m-2 m-md-3 p-3 p-md-4'
          style={{ borderColor: '#C4C4C4' }}
        >
          <h5>Videos</h5>
          <div className='col-12 col-xl-7'>
            <p>Bring your event to life with a 5 to 15 second video.</p>
            <div className='d-flex'>
              <div className='flex-shrink-0'>
                <MediaSquare
                  text={'Add Video'}
                  icon={<MdOutlinePlayCircleOutline size={50} />}
                />
              </div>
              <div className='flex-grow-1 ms-3'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className='row g-0 border border-2 rounded m-2 m-md-3 p-3 p-md-4'
          style={{ borderColor: '#C4C4C4' }}
        >
          <h5>Event Detail</h5>

          <p>Tell the world all about your event and why they'll love it.</p>
          <form>
            <div className='row row-cols-2'>
              <div class='mb-3'>
                <label for='eventTitle' class='form-label'>
                  Title
                </label>
                <input type='text' class='form-control' id='eventTitle' />
              </div>

              <div class='mb-3'>
                <label for='eventLocation' class='form-label'>
                  Event Location
                </label>
                <input type='text' class='form-control' id='eventLocation' />
              </div>

              <div class='mb-3'>
                <label for='eventDate' class='form-label'>
                  Event Date
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='eventDate'
                  placeholder='MM/DD/YY'
                />
              </div>

              <div class='mb-3'>
                <label for='eventTime' class='form-label'>
                  Event Time
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='eventTime'
                  placeholder='Start Time-End Time'
                />
              </div>

              <div class='mb-3'>
                <label for='eventTitle' class='form-label'>
                  Event Tags
                </label>
                <div id='eventTagsHelp' class='form-text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do.
                </div>
                <input type='text' class='form-control' id='eventTitle' />
              </div>

              <div class='mb-3'>
                <label for='eventPrice' class='form-label'>
                  Event Price
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='eventPrice'
                  placeholder='$'
                />
              </div>

              <div class='mb-3'>
                <label for='eventDescription' class='form-label'>
                  Event Description
                </label>
                <textarea
                  type='text'
                  class='form-control'
                  id='eventDescription'
                />
              </div>

              <div class='mb-3'>
                <label for='eventDescription' class='form-label'>
                  Event Type
                </label>
                <div className='d-flex'>
                  <div className='form-check'>
                    <input
                      type='radio'
                      className='form-check-input'
                      name='type'
                      value='In-Person'
                    />
                    <label className='form-check-label'>In-Person</label>
                  </div>
                  <div className='form-check ms-2 ms-sm-5'>
                    <input
                      type='radio'
                      className='form-check-input'
                      name='type'
                      value='Onlinne'
                    />
                    <label className='form-check-label'>Online</label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className='d-flex justify-content-center justify-content-md-end'>
          <p className='text-decoration-underline my-auto mx-3'>Save</p>
          <button className='btn btn-shadow py-2 px-4'>Publish</button>
        </div>
      </div>
    </div>
  );
};

const MediaSquare = ({ text, icon }) => {
  return (
    <div
      className='d-flex rounded justify-content-center align-items-center me-3 mb-3'
      style={{
        backgroundColor: '#C4C4C4',
        width: '175px',
        height: '175px',
      }}
    >
      <div className='flex-column '>
        {icon}
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CreateEvent;
