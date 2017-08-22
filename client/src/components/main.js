import React from 'react';
import ReactDOM from 'react-dom';
import gritHeaderImg from '../assets/img/gritHeaderImg.jpg';
import ScrollMagic from 'scrollmagic';
import Styles from '../assets/stylesheets/main.css';
import {TimelineMax} from 'gsap';
// require('scrollmagic/plugins/debug.addIndicators.js');

export default class Main extends React.Component {

  componentDidMount () {
    this.controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
        }
    });
//get all sections
    var sections = this.refs;

        for (var key in sections) {
            var note = ReactDOM.findDOMNode(sections[key]);
	// create scene to pin and link animation
            new ScrollMagic.Scene({
                triggerElement: sections[key]
            })
              .setPin(sections[key])
              .addIndicators() // add indicators (requires plugin)
              .addTo(this.controller);
        }
    }

  render () {
    return (
      <div id="wrapper">
      <div id="content">
      <div className="scrollMagicPinSpacer">
      <section className="introBlock" ref="introTrigger">
        <section className="motionContainer" ref="introTrigger2">
          <section className="motion left" id="motionLeft" ref="image">
            <div className="contentContainer">
              <h1>GRIT</h1>
              <h2>GIRLS REPRESENTING IN TRADES</h2>
            </div>
            <div className="image" id="girlWithTableSaw">
            </div>
          </section>
          <section className="motion right" id="motionRight" ref="story">
            <a href="#"><button className="btn">Kendra&#39;s Story</button></a>
          </section>
        </section>
        </section>
      </div>
      </div>
      </div>
    );
  }
};
