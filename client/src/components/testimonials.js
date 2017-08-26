import React from 'react';
import Carousel from 'react-flex-carousel';
import '../assets/stylesheets/testimonials.css';
import girlsBike from '../assets/img/GRIT_girls_bike.jpg';
import girlsChopsaw from '../assets/img/GRIT_girls_chopsaw.jpg';
import girlsWelding from '../assets/img/GRIT_girls_welding.jpg';
import girlsSaw from '../assets/img/GRIT_girls_circularsaw.jpg';
import girlsDrill from '../assets/img/GRIT_girls_drill.jpg';

export default class Testimonials extends React.Component {
  render () {
    return (
      <div className='testimonials'>
        <h1 className='orange'> GRIT STORIES </h1>
        <Carousel className="slider" autoplayInteval={4500} indicator={true} switcher={true}>
        	<div> <img src={girlsBike} alt='girls working on a bike'/></div>
        	<div> <img src={girlsChopsaw} alt='girls using chopsaw' /></div>
        	<div> <img src={girlsWelding} alt='girls welding' /></div>
          <div> <img src={girlsSaw} alt='girls using a circular saw' /></div>
          <div> <img src={girlsDrill} alt='girls using a drill' /></div>

        </Carousel>

      </div>
    );
  }
};
