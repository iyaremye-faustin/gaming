import React from 'react';
import PropTypes from 'prop-types';
import { normalButton } from '../../../constants/Buttons';
import Button from '../../Auth/Button';
const propTypes = {};

const defaultProps = {};

/**
 * Card with a button to go to word typing page
 */
const StartWordTyping = ({}) => {
  return (
    <div className='card' style={{ marginTop:'5px' }}>
      <div className='card-body bg-primary'>
        <Button
          type={normalButton.type}
          name={'wordtyping'}
          value={'WORD TYPING'}
          id={'wordtyping'}
          className={'btn btn-block btn-lg bg-primary text-white'}
        />
      </div>
    </div>
  );
}

StartWordTyping.propTypes = propTypes;
StartWordTyping.defaultProps = defaultProps;

export default StartWordTyping;