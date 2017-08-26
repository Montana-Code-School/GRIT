import React from 'react';
import ReactDOM from 'react-dom';
import Flexbox from 'flexbox-react';
import Carousel from 'react-flex-carousel';
import "../assets/stylesheets/stats.css";
import Stripes from "../assets/img/stripes.png";

export default class Stats extends React.Component{
  render () {
    return (
      <div>
        <div className="statsLeft">
          <img src={Stripes} alt="black and yellow stripes" />
            <h1 className="pstyle"> GRIT </h1>
              <h2 className="pstyle"> GIRLS REPRESENTING IN TRADE </h2>
                <h3 className="pstyle"> Why Grit? </h3>
          <h1> POOR ENROLLMENT </h1>
            <p> Fewer than 5% of all students enrolled in high school technical
            programs are girls. </p>

            <p className="pstyle"> Swipe for More Job Stats </p>
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

        <h1> WOMEN&rsquo;S WAGES </h1>
          <p> The wage gap in the construction industry is suprisingly small. Women earn 91% of men&rsquo;s wages compared to the overall average of 82% across all professions. Jobs traditionally employed by men pay 20-30% more than jobs traditionally held by women. </p>

        <h1> THE CULPRITS </h1>
          <ul>
            <li> Widely-accepted stereotypes about women&rsquo;s physical inabilities. </li>
            <li> A tolerance for sexual innuendo, homophobia and outright sexual harassment in the workplace. </li>
            <li> Inadequate access to employment and training </li>
          </ul>

          <h1> WIDESPREAD TRADE SHORTAGES </h1>
            <p> Montana is facing an impending economic calamity if something isn&rsquo;t done to address an expected critical shortfall of workers. An estimated 16 million middle-skill jobs (jobs that require post-secondary education or certification that is not a bachelor&rsquo;s, or higher degree) will be created through 2024. </p>

          <h1> THE FUTURE IS FEMALE. AND TRADES. </h1>
            <p> "One solution to increasing labor participation is to get people in certain demographics - women, veterans and the disabled - to enter the workforce." Barb Wagner, the chief economist at the Montana Department of Labor and Industry. </p>
        </div>
        <div>
          <h3> GRIT GOALS </h3>
            <ul>
              <li> GRIT aims to engage, educate and empower girls to explore trade and skill based work as attainable and feasible careers.</li>
              <li> Use skilled trades to help girls identify strength and develop their confidence and leadership skills. </li>
              <li> Connect young girls with positive mentors in trade based fields. </li>
              <li> Connect adult women in the trades with one another and create a supportive network </li>
              <li> Challenge sterot and catalyze change in the trades cultures. </li>
            </ul>
        </div>
      </div>

    );
  }
};
