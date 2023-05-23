import React, { useEffect, useState } from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import SetupProgressBar from '../../components/SetupProgressBar/SetupProgressBar';
import { HiOutlinePencil } from 'react-icons/hi';
import './createLayerModal.css';

const CreateLayerModal = (props) => {
  const [currentScreen, setCurrentScreen] = useState();
  useEffect(() => {
    setCurrentScreen(
      <SetUpScreen props={props} setCurrentScreen={setCurrentScreen} />
    );
  }, []);
  return (
    <Modal
      {...props}
      size='xl'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body className='p-5'>
        <SetupProgressBar />

        <hr className='' />

        {currentScreen}
      </Modal.Body>
    </Modal>
  );
};

const SetUpScreen = ({ props, setCurrentScreen }) => {
  return (
    <>
      <div className='text-center'>
        <h4>Create a new layer</h4>
        <p>
          Ready to patch in your own niche community? Fill out the form below to
          continue.
        </p>
      </div>
      <div className='p-5' style={{ border: '1px solid #B3B3B3' }}>
        <Form>
          <Row>
            <Col>
              <div className='mb-3'>
                <label htmlFor='layerName' className='form-label'>
                  Layer Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='layerName'
                  placeholder='My layer'
                />
              </div>
            </Col>
            <Col>
              <div className='mb-3'>
                <label htmlFor='layerVisibility' className='form-label'>
                  Layer Visibility
                </label>
                <select
                  className='form-select'
                  id='layerVisibility'
                  aria-label='Default select example'
                >
                  <option value={'Public'}>Public</option>
                  <option value={'Private'}>Private</option>
                </select>
              </div>
            </Col>
            <Col>
              <div className='mb-3'>
                <label htmlFor='layerCategory' className='form-label'>
                  Choose a category
                </label>
                <select
                  className='form-select'
                  id='layerCategory'
                  aria-label='Default select example'
                  placeholder='Select Category'
                >
                  <option value={'Public'}>Public</option>
                  <option value={'Private'}>Private</option>
                </select>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='mb-3'>
                <label htmlFor='layerDescription' className='form-label'>
                  Add Description
                </label>
                <textarea
                  type='text'
                  className='form-control'
                  id='layerDescription'
                  placeholder='This community is about...'
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='mb-3'>
                <label htmlFor='layerRules' className='form-label'>
                  Set Rules
                </label>
                <textarea
                  type='text'
                  className='form-control'
                  id='layerRules'
                  placeholder='Rule # 1...'
                />
              </div>
            </Col>
          </Row>
        </Form>
      </div>
      <div className='d-grid'>
        <button
          className='btn btn-lg btn-shadow ms-auto mt-3'
          // onClick={props.onHide}
          onClick={() =>
            setCurrentScreen(<AddStyle setCurrentScreen={setCurrentScreen} />)
          }
          style={{ width: '15%' }}
        >
          Next
        </button>
      </div>
    </>
  );
};

const AddStyle = ({ setCurrentScreen }) => {
  return (
    <>
      <div className='text-center'>
        <h4>Add Style</h4>
        <p>
          Add some character to your new layer. Don't worry these can be changed
          later.
        </p>
      </div>
      <div className='d-flex p-4 my-5' style={{ backgroundColor: '#B3B3B3' }}>
        <div className='d-flex'>
          <img
            src={require('../../assets/photo.png')}
            className='rounded-circle'
            width={100}
          />
          <div className='mt-auto'>
            <button className='btn btn-sm bg-ssGray text-white ms-2'>
              Edit Profile Image
            </button>
          </div>
        </div>
        <div className='d-flex h-25 ms-auto'>
          <div className='mt-3'>
            <button className='btn btn-sm bg-ssGray text-white ms-2 px-3'>
              Edit Banner
            </button>
          </div>
          <span className='circle-icon mb-auto ms-3'>
            <HiOutlinePencil color='white' />
          </span>
        </div>
      </div>
      <div className='ms-auto d-grid'>
        <div className='d-flex ms-auto'>
          <p
            className='my-auto pt-3 me-5 text-decoration-underline'
            onClick={() =>
              setCurrentScreen(
                <SetUpScreen setCurrentScreen={setCurrentScreen} />
              )
            }
          >
            Back
          </p>
          <button
            className='btn btn-lg btn-shadow  mt-3 px-5'
            // onClick={props.onHide}
            onClick={() =>
              setCurrentScreen(
                <ReviewScreen setCurrentScreen={setCurrentScreen} />
              )
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

const ReviewScreen = ({ props, setCurrentScreen }) => {
  return (
    <>
      <div className='text-center'>
        <h4>Review Information</h4>
        <p>Review the information you provided below.</p>
      </div>
      <div className='p-5' style={{ border: '1px solid #B3B3B3' }}>
        <Form>
          <Row>
            <Col>
              <div className='mb-3'>
                <label htmlFor='layerName' className='form-label'>
                  Layer Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='layerName'
                  placeholder='My layer'
                  disabled
                />
              </div>
            </Col>
            <Col>
              <div className='mb-3'>
                <label htmlFor='layerVisibility' className='form-label'>
                  Layer Visibility
                </label>
                <select
                  className='form-select'
                  id='layerVisibility'
                  aria-label='Default select example'
                >
                  <option value={'Public'}>Public</option>
                  <option value={'Private'}>Private</option>
                </select>
              </div>
            </Col>
            <Col>
              <div className='mb-3'>
                <label htmlFor='layerCategory' className='form-label'>
                  Choose a category
                </label>
                <select
                  className='form-select'
                  id='layerCategory'
                  aria-label='Default select example'
                  placeholder='Select Category'
                >
                  <option value={'Public'}>Public</option>
                  <option value={'Private'}>Private</option>
                </select>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='mb-3'>
                <label htmlFor='layerDescription' className='form-label'>
                  Add Description
                </label>
                <textarea
                  type='text'
                  className='form-control'
                  id='layerDescription'
                  placeholder='This community is about...'
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='mb-3'>
                <label htmlFor='layerRules' className='form-label'>
                  Set Rules
                </label>
                <textarea
                  type='text'
                  className='form-control'
                  id='layerRules'
                  placeholder='Rule # 1...'
                />
              </div>
            </Col>
          </Row>
        </Form>
      </div>
      <div className='ms-auto d-grid'>
        <div className='d-flex ms-auto'>
          <p
            className='my-auto pt-3 me-5 text-decoration-underline'
            onClick={() =>
              setCurrentScreen(<AddStyle setCurrentScreen={setCurrentScreen} />)
            }
          >
            Back
          </p>
          <button
            className='btn btn-lg btn-shadow  mt-3 px-5'
            // onClick={props.onHide}
            onClick={() =>
              setCurrentScreen(
                <ReviewScreen setCurrentScreen={setCurrentScreen} />
              )
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateLayerModal;
