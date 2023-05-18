import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { FaGooglePay } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const BookEvent = () => {
  const [event, setEvent] = useState({});
  const location = useLocation();

  useEffect(() => {
    setEvent(location.state.event);
  }, [location]);
  return (
    <div className='container-fluid g-0'>
      <div className='row g-0'>
        <div className='col-12 col-sm-6 col-md-7 d-flex d-sm-block justify-content-center'>
          <div className='mx-5 mx-sm-1 mx-md-5 mt-5'>
            <h4>Billing Address</h4>
            <div
              className='border border-2 rounded p-3'
              style={{ borderColor: '#C4C4C4' }}
            >
              <a>
                <div className='d-flex'>
                  <div className='d-block'>
                    <p>John Doe</p>
                    <p>123123</p>
                  </div>
                  <div className='ms-auto my-auto'>
                    <FiChevronRight size={25} />
                  </div>
                </div>
              </a>
              <hr style={{ color: '#B3B3B3' }} />
              <a>
                <div className='d-flex'>
                  <div className='d-block'>
                    <p>John Doe</p>
                    <p>123123</p>
                  </div>
                  <div className='ms-auto my-auto'>
                    <FiChevronRight size={25} />
                  </div>
                </div>
              </a>
            </div>
            <div className='mt-5'>
              <h4>Payment Method</h4>
              <div
                className='border border-2 rounded p-3'
                style={{ borderColor: '#C4C4C4' }}
              >
                <a>
                  <div className='d-flex'>
                    <div className='my-auto'>
                      <FaGooglePay size={75} />
                    </div>

                    <div className='d-block ms-3 my-auto'>
                      <h5>
                        Mastercard **** 4052 <br />
                        Exp 03/27
                      </h5>
                    </div>
                    <div className='ms-auto my-auto'>
                      <FiChevronRight size={25} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='col-12 col-sm-6 col-md-5 d-flex justify-content-center mt-5 mt-sm-0'
          style={{ backgroundColor: '#f3f3f3', minHeight: '100vh' }}
        >
          <div className='my-5 pt-5' style={{ width: '75%' }}>
            <h4>Order Summary</h4>
            <img
              src={require('../../assets/holderimg.png')}
              className='img-fluid'
              style={{ borderRadius: '25px' }}
            />
            <div className='mt-3'>
              <h5>{event.eventTitle}</h5>
              <h5 style={{ fontSize: '1.15rem' }}>{event.eventDate}</h5>
              <p>{event.eventTime}</p>
            </div>
            <div className='mt-4'>
              <h5 style={{ fontSize: '1.15rem' }}>{event.eventLocation}</h5>
              <p>{event.eventAddress}</p>
            </div>
            <div className='mt-5'>
              <div className='d-flex'>
                <p>Subtotal</p>
                <p className='ms-auto'>CA $15.00</p>
              </div>
              <div className='d-flex'>
                <p>Service Fee</p>
                <p className='ms-auto'>5.50</p>
              </div>
              <div className='d-flex'>
                <p>Estimated Tax</p>
                <p className='ms-auto'>CA $1.05</p>
              </div>

              <hr />
              <div className='d-flex'>
                <p className='fw-bold'>Total</p>
                <p className='ms-auto'>CA $21.55</p>
              </div>
            </div>
            <div className='d-grid text-center mx-1 mt-5'>
              <button
                className='btn py-2'
                style={{
                  backgroundColor: '#e1e1e1',
                  borderRadius: '10px',
                  boxShadow: '0px 2px #8e8e8e',
                }}
              >
                Confirm Your Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookEvent;
