import React from 'react';
import ReactDOM from 'react-dom';
import girlwithlumber from '../assets/img/GRIT_girl_with_lumber.jpg';
import '../assets/stylesheets/mission.css';
import bike from '../assets/img/GRIT_bike.jpg';
import girlwithcircularsaw from '../assets/img/GRIT_girl_at_circular_table_saw.jpg';
import girlwithcar from '../assets/img/gritAboutImg.jpg';
import girlwithdrill from '../assets/img/GRIT_girls_drill.jpg';


export default class Mission extends React.Component {
  render () {
    return (

      <div className="missionContainer">
        <h1 className='orange about'> ABOUT GRIT </h1>

        <marquee><img className="aboutImg" src={girlwithlumber} alt="girl working with table saw" />
        <img className="aboutBike" src={bike} alt="girl working on bike"/>
        <img className = "aboutSaw" src={girlwithcircularsaw} alt="girl working with circular table saw"/>
        <img className = "aboutCar" src = {girlwithcar} alt="girl working on car"/>
        <img clssName = "aboutDrill" src = {girlwithdrill} alt = "work working with drill"/></marquee>
        <div className='aboutText'>
          <p> Girls Representing in Trades, aims to empower middle and high school
          students who identify with womanhood by broadening their perspective of
          career options, strengthening their self-confidence, building their
          self-sufficiency and having fun!
          </p>
        </div>
      </div>
    );
  }
};
