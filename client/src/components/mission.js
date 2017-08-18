import React from 'react';
import ReactDOM from 'react-dom';
import girlwithlumber from '../assets/img/GRIT_girl_with_lumber.jpg';

export default class Mission extends React.Component {
  render () {
    return (
      <div>
        <h1> ABOUT GRIT </h1>
        <img className="aboutImg" src={girlwithlumber} alt="girl working with table saw" />
        <p> Girls Representing in Trades, aims to empower middle and high school
        students who identify with womanhood by broadening their perspective of
        career options, strengthening their self-confidence, building their
        self-sufficiency and having fun! </p>
      </div>
    );
  }
};
