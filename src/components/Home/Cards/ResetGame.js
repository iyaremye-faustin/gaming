import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Auth/Button';
import { normalButton } from '../../../constants/Buttons';
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const ResetGame = () => {
  return (
    <div className='card' style={{ marginTop:"10px" }}>
      <div className='card-body'>
        <Button
          type={normalButton.type}
          name={'resetGame'}
          value={'RESET GAME'}
          id={'resetGame'}
          className={'btn btn-danger'}
        />
      </div>
    </div>
  );
}

ResetGame.propTypes = propTypes;
ResetGame.defaultProps = defaultProps;

export default ResetGame;