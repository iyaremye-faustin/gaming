import React from 'react';
import PropTypes from 'prop-types';
import CurrentWord from '../Cards/CurrentWord';
import WordAnswer from '../Cards/WordAnswer';
import ScoreCard from '../Cards/ScoreCard';
import PlayingScore from '../Cards/PlayingScore';
const propTypes = {};

const defaultProps = {};

/**
 * Wordplaying space Tab 
 */
const WordPlayingTab = () => {
  return (
  <div className="tab-pane fade" id="nav-word-typing" role="tabpanel" aria-labelledby="nav-waord-naming-tab">
    <div className='row'>
      <div className='col-lg-6'>
        <CurrentWord customStyles={{ marginTop:"10px" }} currentWord={''}/>
        <WordAnswer answer={''} customStyles={{ marginTop:"10px" }}/>
      </div>
      <div className='col-lg-6'>
        <PlayingScore />
        <ScoreCard customStyles={{ marginTop:"10px" }}/>
      </div>
    </div>
  </div>
  );
}

WordPlayingTab.propTypes = propTypes;
WordPlayingTab.defaultProps = defaultProps;

export default WordPlayingTab;