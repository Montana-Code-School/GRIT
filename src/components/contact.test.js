import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './contact';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactForm />, div);
});

test(submitForm )
