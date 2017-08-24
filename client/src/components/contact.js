import React from 'react';
import ContactForm from './contactform.js';
import '../assets/stylesheets/contact.css';

export default class Contact extends React.Component {

  render () {
    return (
      <div className="contactContainer">
        <div className="contactHeader">
          <h1> GET INVOLVED </h1>
        </div>
        <div className="contactMain">
          <div className="contactContent">
            <h4> <a href="tel:406.123.4567">406.123.4567</a> <br/>
           <a href="http://ywcaofmissoula.org">ywcaofmissoula.org</a> </h4>
           <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}
