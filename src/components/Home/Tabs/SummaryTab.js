import React from 'react';
import DescriptionCard from '../Cards/DescriptionCard';
import ScoreCard from '../Cards/ScoreCard';
import StartWordTyping from '../Cards/StartWordTyping';
import StartPictureNaming from '../Cards/StartPictureNaming';

/**
 * Tab Summary of how the game is played 
 */
const SummaryTab = () => {
  const customStyles={
    marginTop:"5px",
  };
  return (
    <div className='tab-pane fade show active' id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
      <div className='row'>
        <div className='col-lg-8 col-md-8 col-sm-8'>
          <DescriptionCard customStyles={customStyles} description={'Testing description here'} />
          <ScoreCard customStyles={customStyles}/>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-4'>
          <StartWordTyping/>
          <StartPictureNaming/>
        </div>
      </div>
    </div>
  );
}

export default SummaryTab;