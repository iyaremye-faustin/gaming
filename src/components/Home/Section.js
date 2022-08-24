import React from 'react';
import PropTypes from 'prop-types';
import SummaryTab from './Tabs/SummaryTab';
import WordPlayingTab from './Tabs/WordPlayingTab';
import PictureNamingTab from './Tabs/PictureNamingTab';
const propTypes = {};

const defaultProps = {};

/**
 * playing sections to help user switching between available options
 */
const Section = () => {
  return(
    <div className='col-lg-12'>
      <nav>
        <div className="nav nav-tabs tabs-style" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" v-if="store.state.currentTabStatus.wordsGames==false && store.state.currentTabStatus.pictureGame==false">GAME SUMMARY</button>
          <button className="nav-link" id="nav-word-typing-tab" data-bs-toggle="tab" data-bs-target="#nav-word-typing" type="button" role="tab" aria-controls="nav-word-typing" aria-selected="false" v-if="store.state.currentTabStatus.wordsGames">Words Typing</button>
          <button className="nav-link" id="nav-picture-naming-tab" data-bs-toggle="tab" data-bs-target="#nav-picture-naming" type="button" role="tab" aria-controls="nav-picture-naming" aria-selected="false" v-if="store.state.currentTabStatus.pictureGame">Picture Naming</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <SummaryTab />
        <WordPlayingTab />
        <PictureNamingTab/>
      </div>
    </div>
  );
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;