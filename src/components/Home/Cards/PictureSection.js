import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const PictureSection = ({playImageName,playImageUrl}) => {
  return (
    <figure className='picture-img'>
      <figcaption>
        <h4 className="btn btn-warning text-white w-100 p-2 fs-4 fw-light">{playImageName }</h4>
      </figcaption>
      <img src="playImageUrl" alt="picture" className="img img-round img-fluid img-thumbnail float-start" style={{ width:"100%" }}></img>
    </figure>
  );
}

PictureSection.propTypes = propTypes;
PictureSection.defaultProps = defaultProps;

export default PictureSection;