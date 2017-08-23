import React from 'react';
import ContactForm from './contactform.js';
import Styles from '../assets/stylesheets/contact.css';

export default class Contact extends React.Component {

  render () {
    return (
      <div className="contactContainer">
        <div className="contactHeader">
          <h1> GET INVOLVED </h1>
        </div>
        <div className="contactMain">
          <h3> 406.123.4567 </h3>
          <h4> ywcaofmissoula.org </h4>
          <ContactForm />
        </div>
      </div>
    );
  }
}
