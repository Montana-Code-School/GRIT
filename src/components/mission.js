import React from 'react';
import girlwithlumber from '../assets/img/GRIT_girl_with_lumber.jpg';
import '../assets/stylesheets/mission.css';
import ScrollAnimation from 'react-animate-on-scroll';


export default class Mission extends React.Component {
  render () {
    return (
      <div className="missionContainer">
        <h1 className='orange about'>ABOUT GRIT</h1>
          <div className='aboutText'>
            <div className="aboutImgHolder">
            <ScrollAnimation animateIn="fade">
              <img className="leftImg" src={girlwithlumber} />
            </ScrollAnimation>
            </div>
            <div className="aboutTextHolder">
            <ScrollAnimation animateIn="fade">
              <p> Girls Representing in Trades aims to <strong>empower</strong> middle and high school
              students who identify with <strong>womanhood</strong> by broadening their perspective of
              career options, strengthening their <strong>self-confidence</strong>, building their
              <strong> self-sufficiency</strong> and having fun!
              </p>
            </ScrollAnimation>
            </div>
          </div>
      </div>
    );
  }
};
