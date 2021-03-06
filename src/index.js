import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.js';
import Mission from './components/mission.js';
import Stats from './components/stats.js';
import Testimonials from './components/testimonials.js';
import Contact from './components/contact.js';
import StatsShow from './components/statsShow.js';
import './assets/stylesheets/index.css';

class Grit extends React.Component {
  render() {
    return (
      <div>
        <Main />
        <Mission />
        <div className="statsMainContainer">
          <h1 className='orange stats'> STATISTICS </h1>
            <div className="flexWrapper">
              <StatsShow />
              <Stats />

            </div>
          </div>
        <Testimonials />
        <Contact />
      </div>
    );
  }
}

ReactDOM.render(
  <Grit/>,
  document.querySelector('#root'));
