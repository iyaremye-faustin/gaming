import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Auth/Button';
import { normalButton } from '../../../constants/Buttons';

const propTypes = {
  score:PropTypes.number
};

const defaultProps = {
  score:0,
};

/**
 * Current playing score
 */
const PlayingScore = ({score}) => {
  return (
    <div className='card' style={{ marginTop:"10px" }}>
      <div className='card-body'>
        <Button
          type={normalButton.type}
          name={'currentScore'}
          value={'SCORES'}
          id={'currentScore'}
          className={'btn btn-info btn-sm rounded'}
        />
      </div>
    </div>
  );
}

PlayingScore.propTypes = propTypes;
PlayingScore.defaultProps = defaultProps;

export default PlayingScore;