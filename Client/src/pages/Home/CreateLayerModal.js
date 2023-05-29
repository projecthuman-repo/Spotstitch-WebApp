import React, { useEffect, useState } from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import SetupProgressBar from '../../components/SetupProgressBar/SetupProgressBar';
import { HiOutlinePencil } from 'react-icons/hi';
import './createLayerModal.css';

const CreateLayerModal = (props) => {
  const [currentScreen, setCurrentScreen] = useState();
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    setCurrentScreen(
      <SetUpScreen props={props} setCurrentScreen={setCurrentScreen} />
    );
  }, []);

  const saveLayer = () => {
    props.onHide();
    setCurrentStep(1);
    setCurrentScreen(<SetUpScreen />);
  };

  const SetUpScreen = () => {
    return (
      <>
        <Row className='mt-3 mb-0'>
          <div className='mx-auto w-50 text-center'>
            <h4>Create a new layer</h4>
            <p>
              Ready to patch in your own niche community? Fill out the form
              below to continue.
            </p>
          </div>
        </Row>
        <Row className='my-auto'>
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
        </Row>
        <Row className='mt-auto'>
          <div className='d-grid mt-auto'>
            <button
              className='btn btn-lg btn-shadow ms-auto mt-3'
              // onClick={props.onHide}
              onClick={() => {
                setCurrentScreen(<AddStyle />);
                setCurrentStep(2);
              }}
              style={{ width: '15%' }}
            >
              Next
            </button>
          </div>
        </Row>
      </>
    );
  };

  const AddStyle = () => {
    return (
      <>
        <Row className='mt-3 mb-0'>
          <div className='mx-auto text-center w-50'>
            <h4>Add Style</h4>
            <p>
              Add some character to your new layer. Don't worry these can be
              changed later.
            </p>
          </div>
        </Row>
        <Row className='mt-5'>
          <div
            className='d-flex p-4 py-5 rounded-top'
            style={{ backgroundColor: '#B3B3B3' }}
          >
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
          <div className='d-flex mt-3 rounded-top mx-auto'>
            <div
              className='p-4 py-4 mx-3'
              style={{ backgroundColor: '#e9ecef', width: '20%' }}
            ></div>
            <div
              className='p-4 py-4'
              style={{ backgroundColor: '#e9ecef', width: '75%' }}
            ></div>
          </div>
        </Row>
        <Row className='mt-auto'>
          <div className='ms-auto d-grid'>
            <div className='d-flex ms-auto'>
              <p
                className='my-auto pt-3 me-5 text-decoration-underline'
                onClick={() => {
                  setCurrentScreen(<SetUpScreen />);
                  setCurrentStep(1);
                }}
              >
                Back
              </p>
              <button
                className='btn btn-lg btn-shadow  mt-3 px-5'
                onClick={() => {
                  setCurrentScreen(<ReviewScreen />);
                  setCurrentStep(3);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </Row>
      </>
    );
  };

  const ReviewScreen = () => {
    return (
      <>
        <Row className='mt-3 mb-0'>
          <div className='text-center'>
            <h4>Review Information</h4>
            <p>Review the information you provided below.</p>
          </div>
        </Row>
        <Row className='my-auto'>
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
                      disabled
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
                      disabled
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
                      disabled
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
                      disabled
                    />
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Row>
        <Row className='mt-auto'>
          <div className='ms-auto d-grid'>
            <div className='d-flex ms-auto'>
              <p
                className='my-auto pt-3 me-5 text-decoration-underline'
                onClick={() => {
                  setCurrentScreen(<AddStyle />);
                  setCurrentStep(2);
                }}
              >
                Back
              </p>
              <button
                className='btn btn-lg btn-shadow  mt-3 px-5'
                // onClick={props.onHide}
                onClick={() => {
                  setCurrentScreen(<NewLayerCreatedScreen />);
                  setCurrentStep(4);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </Row>
      </>
    );
  };

  const NewLayerCreatedScreen = () => {
    return (
      <>
        <Row className='my-auto'>
          <div className='row text-center'>
            <h1>New layer created!</h1>
            <p>
              Your all setup. New layer will be available on your home page.
              Explore and find your stitch.
            </p>
          </div>
        </Row>
        <Row className='mt-auto'>
          <div className='ms-auto d-grid'>
            <div className='d-flex ms-auto'>
              <p
                className='my-auto pt-3 me-5 text-decoration-underline'
                onClick={() => {
                  setCurrentScreen(<ReviewScreen />);
                  setCurrentStep(3);
                }}
              >
                Back
              </p>
              <button
                className='btn btn-lg btn-shadow  mt-3 px-5'
                // onClick={props.onHide}
                onClick={saveLayer}
              >
                Next
              </button>
            </div>
          </div>
        </Row>
      </>
    );
  };

  return (
    <Modal
      {...props}
      size='xl'
      // aria-labelledby='contained-modal-title-vcenter m-0'
      className='m-0 p-0'
      centered
    >
      <Modal.Body
        className='d-flex flex-column p-sm-5'
        style={{ height: '75vh' }}
      >
        <SetupProgressBar step={currentStep} />

        <hr />

        {currentScreen}
      </Modal.Body>
    </Modal>
  );
};

export default CreateLayerModal;
