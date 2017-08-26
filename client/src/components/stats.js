import React from 'react';
import ReactDOM from 'react-dom';
import Flexbox from 'flexbox-react';
import Carousel from 'react-flex-carousel';
import "../assets/stylesheets/stats.css";
import GRITinfographic from "../assets/img/GRIT_Infographic_transparent.png";
// import Stripes from "../assets/img/stripes.png";

export default class Stats extends React.Component{
  render () {
    return (
      <div className="statsLeft stripes">
          <img className="gritLogo" src={GRITinfographic} />
            <ul>
              <li> GRIT aims to engage, educate and empower girls to explore trade and skill based work as attainable and feasible careers.</li><br/>
              <li> Use skilled trades to help girls identify strength and develop their confidence and leadership skills. </li><br/>
              <li> Connect young girls with positive mentors in trade based fields. </li><br/>
              <li> Connect adult women in the trades with one another and create a supportive network. </li><br/>
              <li> Challenge sterotypes and catalyze change in the trades cultures. </li><br/>
            </ul>
        </div>
    );
  }
};
