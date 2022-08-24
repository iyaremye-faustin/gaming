import React from 'react';
import ResetGame from '../Cards/ResetGame';
import PictureSection from '../Cards/PictureSection';
import PictureNameStart from '../Cards/PictureNameStart';
import PictureAnswer from '../Cards/PictureAnswer';
import ScoreCard from '../Cards/ScoreCard';
import PlayingScore from '../Cards/PlayingScore';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

/**
 * Picture naming gaming feature 
 */
const PictureNamingTab = () => {
  return (
    <div className='tab-pane fade' id="nav-picture-naming" role="tabpanel" aria-labelledby="nav-contact-tab">
      <div className='row'>
        <div className='col-lg-4 img-play-div' style={{ marginTop:"10px" }}>
          <PictureSection/>
        </div>
        <div className='col-lg-4'>
          <PictureAnswer/>
          <PictureNameStart/>
          <ResetGame/>
        </div>
        <div className='col-lg-4'>
          <ScoreCard/>
          <PlayingScore/>
        </div>
      </div>
    </div>
  );
}

PictureNamingTab.propTypes = propTypes;
PictureNamingTab.defaultProps = defaultProps;

export default PictureNamingTab;