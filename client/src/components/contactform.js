import React from 'react';
import axios from 'axios';
import '../App.css';

export default class ContactForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        phone: '',
        participant: false,
        mentor: false,
        instructor: false
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
          instructor: this.state.instructor
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
        <form onSubmit={this.handleSubmit}>
        <label>
         Name:
         <input
           name="name"
           type="text"
           value={this.state.name}
           onChange={this.handleInputChange} />
         </label>
         <br/>
         <label>
          Email:
          <input
           name="email"
           type="text"
           value={this.state.email}
           onChange={this.handleInputChange} />
         </label>
          <br />
         <label>
         Phone:
          <input
          name="phone"
          type="text"
          value={this.state.phone}
          onChange={this.handleInputChange} />
        </label>

        How would you like to be involved:
        <label>
          Participant:
          <input
            name="participant"
            type="checkbox"
            checked={this.state.participant}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Mentor:
          <input
            name="mentor"
            type="checkbox"
            checked={this.state.mentor}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Instructor:
          <input
            name="instructor"
            type="checkbox"
            checked={this.state.instructor}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Click to Submit" />
        </form>
      );
    }
  }
