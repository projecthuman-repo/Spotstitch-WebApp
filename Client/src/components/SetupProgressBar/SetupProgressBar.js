import React from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { ProgressBar } from 'react-bootstrap';
import './setupProgressBar.css';

const SetupProgressBar = ({ step }) => {
  const Checkmark = () => {
    return <IoCheckmarkSharp color='black' />;
  };
  return (
    <>
      <div className='d-flex justify-content-center'>
        <div
          className={
            step === 1
              ? 'progress-circle-current text-center'
              : 'progress-circle-finished text-center'
          }
        >
          {step > 1 ? <Checkmark /> : ''}
        </div>
        <div className='progress-line' />
        <div
          className={
            step === 1
              ? 'progress-circle-unfinished text-center'
              : step === 2
              ? 'progress-circle-current text-center'
              : 'progress-circle-finished text-center'
          }
        >
          {step > 2 ? <Checkmark /> : ''}
        </div>
        <div className='progress-line' />
        <div
          className={
            step === 3
              ? 'progress-circle-current text-center'
              : step === 4
              ? 'progress-circle-finished text-center'
              : 'progress-circle-unfinished text-center'
          }
          // className='progress-circle-unfinished'
        >
          {step > 3 ? <Checkmark /> : ''}
        </div>
        <div className='progress-line' />
        <div
          className={
            step === 4
              ? 'progress-circle-current text-center'
              : 'progress-circle-unfinished text-center'
          }
        >
          {step > 4 ? <Checkmark /> : ''}
        </div>
      </div>
      <div className='d-flex justify-content-center text-center text-nowrap mx-sm-5 mt-2'>
        <div>
          <p>Set Up</p>
        </div>

        <div className='progress-gap' />
        <div>
          <p>Add Style</p>
        </div>

        <div className='progress-gap' />
        <div>
          <p>Review</p>
        </div>

        <div className='progress-gap' />
        <div>
          <p>Finish</p>
        </div>
      </div>
    </>
  );
};

export default SetupProgressBar;
