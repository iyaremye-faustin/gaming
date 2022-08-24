import React from 'react';
import Button from '../../Auth/Button';
import { normalButton } from '../../../constants/Buttons';
/**
 * Card with a button to go to picture naming page
 */
const StartPictureNaming = () => {
  return (
    <div className='card'>
      <div className='card-body bg-primary'>
        <Button
          type={normalButton.type}
          name={'picturenaming'}
          value={'PICTURE NAMING'}
          id={'picturenaming'}
          className={'btn btn-block btn-lg bg-primary text-white'}
        />
      </div>
    </div>
  );
}


export default StartPictureNaming;