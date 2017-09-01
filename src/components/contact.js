import React from 'react';
import ContactForm from './contactform.js';
import '../assets/stylesheets/contact.css';
import Guts from '../assets/img/guts.png';


export default class Contact extends React.Component {

  render () {
    return (
        <div className="contactMain contactContainer" >
          <h1 className="contactHeader orange"> GET INVOLVED </h1>
            <div className="contactContent">
              <div className="contactFlex">
                <img src={Guts} alt = "GUTS Logo" />
                <h4> <a href="tel:406.543.6691">406.543.6691</a> <br/>
                <a href="http://ywcaofmissoula.org">ywcaofmissoula.org</a> </h4>
                <br/>
              </div>

              <ContactForm />

            </div>
         </div>
    );
  }
}
