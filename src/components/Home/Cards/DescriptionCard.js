import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  customStyles:PropTypes.object,
  description:PropTypes.string
};

const defaultProps = {
  customStyles:{},
  description:'Description'
};

/**
 * Game description/details card
 */
const DescriptionCard = ({customStyles,description}) => {
  return(
    <div className='card' style={customStyles}>
      <div className='card-body'>
        {description }
      </div>
    </div>
  );
}

DescriptionCard.propTypes = propTypes;
DescriptionCard.defaultProps = defaultProps;

export default DescriptionCard;