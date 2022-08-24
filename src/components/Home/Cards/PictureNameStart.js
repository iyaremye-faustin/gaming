import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Auth/Button';
import { normalButton } from '../../../constants/Buttons';

const propTypes = {};

const defaultProps = {};

/**
 * start picture naming button  
 */
const PictureNameStart = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <Button
          type={normalButton.type}
          name={'startpictures'}
          value={'START'}
          id={'startpictures'}
          className={'btn btn-primary'}
        />
      </div>
    </div>
  );
}

PictureNameStart.propTypes = propTypes;
PictureNameStart.defaultProps = defaultProps;
// #endregion

export default PictureNameStart;