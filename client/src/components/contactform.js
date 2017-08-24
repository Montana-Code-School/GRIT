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
        selected: '',
        comment: '',
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    checkForm() {
      let re = /(@\w+\.\w+)/;
      return (
        re.test(this.state.email) &&
        this.state.name.length > 1 &&
        this.state.selected.length > 1
      );
    }

    confirmSend() {
      this.setState({
        name: '',
        email: '',
        phone: '',
        selected: '',
        comment: '',
      });

      console.log('You did it!')
    }

    handleSubmit(event) {
      event.preventDefault();
      if (this.checkForm()) {
        axios.post('http://localhost:8000/contact/', {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            participant: this.state.selected,
            comment: this.state.comment
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.confirmSend();
      } else {
        console.log("FIll out info better");
      }
    }





    handleInputChange(event) {
      const name = event.target.name;
      this.setState({
        [name]: event.target.value
      });
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
           Name:
           <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <br/>
         <label>
          Email:
            <input name="email" type="text" value={this.state.email} onChange={this.handleInputChange} />
         </label>
            <br />
         <label>
          Phone:
            <input name="phone" type="text" value={this.state.phone} onChange={this.handleInputChange} />
        </label>

        How would you like to be involved:
        <label>
          Participant:
          <input value="participant" name="selected" type="radio" checked={this.state.selected === "participant"}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Mentor:
          <input value="mentor" name="selected" type="radio" checked={this.state.selected === "mentor"}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Instructor:
          <input value="instructor" name="selected" type="radio" checked={this.state.selected === "instructor"}
            onChange={this.handleInputChange} />
        </label>
        <label>
         Additional Comments:
         <textarea name="comment" type="text" value={this.state.comment} onChange={this.handleInputChange} />
         </label>
        <input type="submit" value="Click to Submit" />
        </form>
      );
    }
  }
