import React from 'react';
import InputLogin from '../../Auth/InputLogin';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

/**
 * typing input 
 */
const PictureAnswer = () => {
  return (
    <div className='card'>
      <div className='card-body' style={{ marginTop:"10px"}}>
        <input type="text" className="form-control" placeholder="Type here" id="pictureAanswer"  style={{ borderStyle:"none" }} />
      </div>
    </div>
  );
}

PictureAnswer.propTypes = propTypes;
PictureAnswer.defaultProps = defaultProps;

export default PictureAnswer;