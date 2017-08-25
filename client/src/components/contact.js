import React from 'react';
import ContactForm from './contactform.js';




export default class Contact extends React.Component {
 /* Sets the default state of this component.*/


 /* Form submission callback.*/

 /*Submits form data to the web server.*/

  render () {
    return (
      <div>
        <h1 className='orange'> GET INVOLVED </h1>
        <h3> 406.123.4567 </h3>
        <h4> ywcaofmissoula.org </h4>
        <ContactForm />
      </div>
    );
  }
}
