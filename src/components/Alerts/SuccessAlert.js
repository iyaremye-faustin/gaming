import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  message:PropTypes.string,
};

const defaultProps = {
  message:'Successfully Completed'
};

/**
 *Success Alert component 
 */

const SuccessAlert = ({message}) => {
  return (
    <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
      <span className="font-medium">{message}!</span>
    </div>
  )
}

SuccessAlert.propTypes = propTypes;
SuccessAlert.defaultProps = defaultProps;

export default SuccessAlert;