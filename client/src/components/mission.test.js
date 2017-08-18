import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Mission from './mission';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Mission />, div);
});

it('returns <h1> ABOUT GRIT </h1>', () => {
  const mission = shallow(<Mission />);
  const header = <h1> ABOUT GRIT </h1>;
  expect(mission.contains(header)).toEqual(true);
});

it('returns <p> tags that include mission statement', ()=> {
  const mission = shallow(<Mission />);
  const statement = <p> Girls Representing in Trades, aims to empower middle and high school
    students who identify with womanhood by broadening their perspective of
    career options, strengthening their self-confidence, building their
    self-sufficiency and having fun! </p>;
  expect(mission.contains(statement)).toEqual(true);
});

it('returns an image of girl at table saw', ()=> {
  const mission = shallow(<Mission />);
  const img = <img src='../assets/img/girl_at_circular_table_saw.jpg' />
  expect(mission.contains(img)).toEqual(true);
})
