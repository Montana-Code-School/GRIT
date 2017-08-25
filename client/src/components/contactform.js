import React from 'react';
import axios from 'axios';
import '../assets/stylesheets/contactform.css';

export default class ContactForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        phone: '',
        participant: false,
        mentor: false,
        instructor: false,
        comment: '',
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

      axios.post('http://localhost:8000/contact/', {
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          participant: this.state.participant,
          mentor: this.state.mentor,
          instructor: this.state.instructor,
          comment: this.state.comment
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        event.preventDefault();
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    render() {
      return (
        <div className="contactUs">
        <h4>Contact Us: </h4>
        <form onSubmit={this.handleSubmit}>
        <label className="label">
         Name:
         <input className="text"
           name="name"
           type="text"
           value={this.state.name}
           onChange={this.handleInputChange} />
         </label>
         <br/>
         <label className="label">
          Email:
          <input className="text"
           name="email"
           type="text"
           value={this.state.email}
           onChange={this.handleInputChange} />
         </label>
          <br />
         <label className="label">
         Phone:
          <input className="text"
          name="phone"
          type="text"
          value={this.state.phone}
          onChange={this.handleInputChange} />
        </label>

        <p>I&#39;m interested in being a(n):</p>
        <label className="label">
          Participant
          <input className="checkbox"
            name="participant"
            type="checkbox"
            checked={this.state.participant}
            onChange={this.handleInputChange} />
        </label><br/>
        <label className="label">
          Mentor
          <input className="checkbox"
            name="mentor"
            type="checkbox"
            checked={this.state.mentor}
            onChange={this.handleInputChange} />
        </label><br/>
        <label className="label">
          Instructor
          <input className="checkbox"
            name="instructor"
            type="checkbox"
            checked={this.state.instructor}
            onChange={this.handleInputChange} />
        </label><br/><br/>
        <label className="label">
         Additional Comments:
         <textarea className="textarea"
           name="comment"
           type="text"
           value={this.state.comment}
           onChange={this.handleInputChange} />
         </label><br/>
        <input className="submit" type="submit" value="Click to Submit" />
        </form>
        </div>
      );
    }
  }
