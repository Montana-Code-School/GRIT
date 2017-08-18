import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.js';
import Mission from './components/mission.js';
import Stats from './components/stats.js';
import Testimonials from './components/testimonials.js';
import Contact from './components/contact.js';

class Grit extends React.Component {
  render() {
    return (
      <div>
        <Main />
        <Mission />
        <Stats />
        <Testimonials />
        <Contact />
      </div>
    );
  }
}

ReactDOM.render(
  <Grit/>,
  document.querySelector('#root'));
