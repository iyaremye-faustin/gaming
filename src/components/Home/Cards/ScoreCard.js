import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Auth/Button';
import { normalButton } from '../../../constants/Buttons';
const propTypes = {};

const defaultProps = {};

/**
 *Current score points 
 */
const ScoreCard = ({customStyles,}) => {
  return (
    <div className='card' style={customStyles}>
      <div className='card-body'>
        <Button
          type={normalButton.type}
          name={'scoreButton'}
          value={'TOTAL SCORES'}
          id={'scoreButton'}
          className={'btn btn-info btn-sm rounded'}
        />
        <Button
          type={normalButton.type}
          name={'scoreButtonInfo'}
          value={'MY TOTAL MARKS'}
          id={'scoreButtonInfo'}
          className={'btn btn-secondary btn-sm rounded'}
        />
      </div>
    </div>
  );
}

ScoreCard.propTypes = propTypes;
ScoreCard.defaultProps = defaultProps;

export default ScoreCard;