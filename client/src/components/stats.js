import React from 'react';
import ReactDOM from 'react-dom';
import Flexbox from 'flexbox-react';
import Carousel from 'react-flex-carousel';
import "../styles/stats.css";




export default class Stats extends React.Component{
  render () {
    return (
      <div>
        <h1 className="pstyle"> GRIT </h1>
          <h2 className="pstyle"> GIRLS REPRESENTING IN TRADE </h2>
            <h3 className="pstyle"> Why Grit? </h3>
            <img></img>

            <p className="pstyle"> Swipe for More Job Stats </p>
      </div>
    );
  }
};
