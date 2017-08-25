import React from 'react';
import ReactDOM from 'react-dom';

import Flexbox from 'flexbox-react';
import gritHeaderImg from '../assets/img/gritHeaderImg.jpg';
// import ScrollMagic from 'scrollmagic';

// import {TimelineMax} from 'gsap';
// require('scrollmagic/plugins/debug.addIndicators.js');

import  '../assets/stylesheets/main.css';


export default class Main extends React.Component {

//   componentDidMount () {
//     this.controller = new ScrollMagic.Controller({
//       globalSceneOptions: {
//         triggerHook: 'onLeave'
//         }
//     });
// //get all sections
//     var sections = this.refs;
//
//         for (var key in sections) {
//             var note = ReactDOM.findDOMNode(sections[key]);
// 	// create scene to pin and link animation
//             new ScrollMagic.Scene({
//                 triggerElement: sections[key]
//             })
//               .setPin(sections[key])
//               .addIndicators() // add indicators (requires plugin)
//               .addTo(this.controller);
//         }
//     }

  render () {
    return (
      <Flexbox className="introBlock" ref="introTrigger">
        <Flexbox className="motionContainer">
        <div>
          <Flexbox className="motionLeft">
            <div className="contentContainer">
              <h1>GRIT</h1>
              <h2>GIRLS REPRESENTING IN TRADES</h2>
            </div>
          </Flexbox>
          </div>
          <div>
          <Flexbox className="motionRight">
            <a href="#"><button className="btn">Kendra&#39;s Story</button></a>
          </Flexbox>
          </div>
        </Flexbox>
      </Flexbox>

    );
  }
};
