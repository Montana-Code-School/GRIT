import React from 'react';
import ReactDOM from 'react-dom';
import Flexbox from 'flexbox-react';
import Carousel from 'react-flex-carousel';
import "../assets/stylesheets/stats.css";




export default class Stats extends React.Component{
  render () {
    return (
      <div>
        <h1 className="pstyle"> GRIT </h1>
          <h2 className="pstyle"> GIRLS REPRESENTING IN TRADE </h2>
            <h3 className="pstyle"> Why Grit? </h3>
        <div>
          <h1> POOR ENROLLMENT </h1>
            <p> Fewer than 5% of all students enrolled in high school technical
            programs are girls. </p>
        </div>
        <div>
            <p className="pstyle"> Swipe for More Job Stats </p>
      </div>
      <div>
        <h1> UNDERREPRESENTED </h1>
          <p> In 2014, women made up 46.9% of workforce. Of that: </p>
          <ul>
            <li> 0.5% were roofers </li>
            <li> 1.4% were automative service technicians and mechanics </li>
            <li> 1.7% were carpenters </li>
            <li> 2.4% were electricians </li>
            <li> 4.8% were welders </li>
            <li> 5.7% were firefighters </li>
          </ul>
      </div>
      <div>
        <h1> WOMEN&rsquo;S WAGES </h1>
          <p> The wage gap in the construction industry is suprisingly small. </p>

      </div>
    </div>
    );
  }
};
