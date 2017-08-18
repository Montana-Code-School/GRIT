import React from 'react';
// import Flexbox from 'flexbox-react';
import girlAtSaw from '../assets/img/girl_at_circular_table_saw.jpg';

export default class Mission extends React.Component {
  render () {
    return (
      <div>
        <h1> ABOUT GRIT </h1>
        <h3> Girls Representing in Trades, aims to empower middle and high school
        students who identify with womanhood by broadening their perspective of
        career options, strengthening their self-confidence, building their
        self-sufficiency and having fun! </h3>
        <img src={girlAtSaw} alt="girl at circular table saw" />
      </div>
    );
  }
}
