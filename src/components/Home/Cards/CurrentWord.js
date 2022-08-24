import React from 'react';

import PropTypes from 'prop-types';

const propTypes = {
  currentWord:PropTypes.string
};

const defaultProps = {
  currentWord:'',
};

/**
 *The current playing word 
 */

const CurrentWord = ({customStyles,currentWord}) => {
  return (
    <div className='card' style={customStyles}>
      <div className='card-body'>
        <h4 className='btn btn-warning text-white w-100 p-3 fs-1 fw-light'>
          {currentWord}
        </h4>
      </div>
    </div>
  );
}

CurrentWord.propTypes = propTypes;
CurrentWord.defaultProps = defaultProps;

export default CurrentWord;