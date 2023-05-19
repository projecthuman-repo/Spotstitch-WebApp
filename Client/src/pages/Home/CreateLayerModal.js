import React from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import SetupProgressBar from '../../components/SetupProgressBar/SetupProgressBar';

const CreateLayerModal = (props) => {
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
        <div className='text-center'>
          <h4>Create a new layer</h4>
          <p>
            Ready to patch in your own niche community? Fill out the form below
            to continue.
          </p>
        </div>
        <div className='p-5' style={{ border: '1px solid #B3B3B3' }}>
          <Form>
            <Row>
              <Col>
                <div class='mb-3'>
                  <label for='layerName' class='form-label'>
                    Layer Name
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='layerName'
                    placeholder='My layer'
                  />
                </div>
              </Col>
              <Col>
                <div class='mb-3'>
                  <label for='layerVisibility' class='form-label'>
                    Layer Visibility
                  </label>
                  <select
                    class='form-select'
                    id='layerVisibility'
                    aria-label='Default select example'
                  >
                    <option selected value={'Public'}>
                      Public
                    </option>
                    <option value={'Private'}>Private</option>
                  </select>
                </div>
              </Col>
              <Col>
                <div class='mb-3'>
                  <label for='layerCategory' class='form-label'>
                    Choose a category
                  </label>
                  <select
                    class='form-select'
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
                <div class='mb-3'>
                  <label for='layerDescription' class='form-label'>
                    Add Description
                  </label>
                  <textarea
                    type='text'
                    class='form-control'
                    id='layerDescription'
                    placeholder='This community is about...'
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div class='mb-3'>
                  <label for='layerRules' class='form-label'>
                    Set Rules
                  </label>
                  <textarea
                    type='text'
                    class='form-control'
                    id='layerRules'
                    placeholder='Rule # 1...'
                  />
                </div>
              </Col>
            </Row>
          </Form>
        </div>
        <button className='btn btn-shadow' onClick={props.onHide}>
          Next
        </button>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default CreateLayerModal;
