import React from 'react';
import ContactForm from './contactform.js';
import '../assets/stylesheets/contact.css';


export default class Contact extends React.Component {

  render () {
    return (
        <div className="contactMain contactContainer" >
          <h1 className="contactHeader"> GET INVOLVED </h1>
            <div className="contactContent">
              <h4> <a href="tel:406.543.6691">406.543.6691</a> <br/>
                <a href="http://ywcaofmissoula.org">ywcaofmissoula.org</a> </h4>
           <ContactForm />
            </div>
         </div>
    );
  }
}
