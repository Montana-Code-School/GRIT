import React from 'react';
import ReactDOM from 'react-dom';
import Flexbox from 'flexbox-react';
import gritHeaderImg from '../img/gritHeaderImg.jpg';

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <img className="headerImg" src={gritHeaderImg} alt="girl with welding mask" />
        <h1>GRIT</h1>
        <h2>GIRLS REPRESENTING IN TRADES</h2>
        <a href="#"><button className="btn">Kendra&#39;s Story</button></a>
      </div>
    );
  }
};
