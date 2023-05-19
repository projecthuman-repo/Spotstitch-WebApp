import React from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { ProgressBar } from 'react-bootstrap';
import './setupProgressBar.css';

const SetupProgressBar = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='progress-circle-finished'>
        {/* <div className='checkmark-box w-100 h-100'> */}
        <IoCheckmarkSharp size={10} className='checkmark' />
        {/* </div> */}
      </div>
      <div className='progress-line'></div>
      <div className='progress-circle-current'></div>
      <div className='progress-line'></div>
      <div className='progress-circle-unfinished'></div>
      <div className='progress-line'></div>
      <div className='progress-circle-unfinished'></div>
    </div>
  );
};

export default SetupProgressBar;
