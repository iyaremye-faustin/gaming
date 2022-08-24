import React from 'react';
import PropTypes from 'prop-types';
import InputLogin from '../../Auth/InputLogin';
import Button from '../../Auth/Button';
import { normalButton } from '../../../constants/Buttons';

const propTypes = {
  answer:PropTypes.string
};

const defaultProps = {
  answer:''
};

/**
 * Current typing answer 
 */

const WordAnswer = ({answer,customStyles}) => {
  return(
    <div className='card' style={customStyles}>
      <div className='card-body'>
        <InputLogin
          key={'answer'}
          handleChange={()=>{}} 
          name={'answer'}
          id={'answer'}
          type={'text'}
          required={true}
          placeholder={'Type here'}
        />
      </div>
      <div className='card-body'>
        <Button
          type={normalButton.type}
          name={'playword'}
          value={'START PLAYING'}
          id={'playword'}
          className={'btn btn-primary btn-sm rounded'}
        />
      </div>
    </div>
  );
}

WordAnswer.propTypes = propTypes;
WordAnswer.defaultProps = defaultProps;


export default WordAnswer;