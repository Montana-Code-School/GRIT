import React from 'react';
import girlwithlumber from '../assets/img/GRIT_girl_with_lumber.jpg';
import '../assets/stylesheets/mission.css';
import ScrollAnimation from 'react-animate-on-scroll';


export default class Mission extends React.Component {
  render () {
    return (
      <div className="missionContainer">
        <h1 className='orange about'>ABOUT GRIT</h1>
        <ScrollAnimation animateIn="fadeInLeft">
          <div className='aboutText'>
          <div className="aboutImgHolder">
          </div>
          <div className="aboutTextHolder">
            <p> Girls Representing in Trades, aims to empower middle and high school
            students who identify with womanhood by broadening their perspective of
            career options, strengthening their self-confidence, building their
            self-sufficiency and having fun!
            </p>
          </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
};
