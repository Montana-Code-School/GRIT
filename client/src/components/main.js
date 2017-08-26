import React from 'react';
import ReactDOM from 'react-dom';
import Flexbox from 'flexbox-react';
import gritHeaderImg from '../assets/img/gritHeaderImg.jpg';
import  '../assets/stylesheets/main.css';



export default class Main extends React.Component {

  render () {
    return (

        <div className="headerImg">

            <div>
              <h1 className="grit">GRIT</h1>
              <h2>GIRLS REPRESENTING IN TRADES</h2>
            </div>

        </div>


    );
  }
};
