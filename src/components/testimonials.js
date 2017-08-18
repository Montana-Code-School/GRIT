import React from 'react';
import ReactDOM from 'react-dom';
import Flexbox from 'flexbox-react';
import Carousel from 'react-flex-carousel';

export default class Testimonials extends React.Component {
  render () {
    return (
      <div>
        <h3>"Quote about how rewarding a career in trade is!!!!!!"</h3>
        <p>(Full Story)</p>
        <img></img>
        <Carousel className="slider" autoplayInteval={4500} indicator={true} switcher={true}>
            <div></div>
            <div></div>
            <div></div>
        </Carousel>
        <p> Swipe for More Stories </p>
      </div>
    );
  }
};
