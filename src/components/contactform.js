import React from 'react';
import axios from 'axios';
import EmailConfirm from './EmailConfirm';
import { SubmitAni } from './Animations';
import '../assets/stylesheets/contactform.css';

export default class ContactForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        phone: '',
        selected: '',
        comment: '',
        emailSuccess: ''
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.confirmSend = this.confirmSend.bind(this);
    }

    checkForm() {
      let re = /(@\w+\.\w+)/;
      return (
        re.test(this.state.email) &&
        this.state.name.length > 1 &&
        this.state.selected.length > 1
      );
    }

    confirmSend(str) {
      SubmitAni();
      this.setState({
        name: '',
        email: '',
        phone: '',
        selected: '',
        comment: '',
        emailSuccess: str
      });
    }

    handleSubmit(event) {
      event.preventDefault();
      const that = this;
      if (this.checkForm()) {
        let noError = true;
        axios.post('https://shrouded-stream-81997.herokuapp.com/contact/', {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            participant: this.state.selected,
            comment: this.state.comment
          }).then((response) => {
            console.log(response);

          })
          .catch(function (error) {
            noError = false;
            that.confirmSend("Something went wrong... Please try again in a few hours.")
          });
          if (noError) {
            console.log('did it')
            that.confirmSend("Your email has been sent!");
          }
      } else {
        console.log("Please fill in all fields");
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
        <div className="SliderFormat">

          <div className="contactUs">
            <h4>Contact Us: </h4>
            <form className="ContactForm" onSubmit={this.handleSubmit}>
                  <input placeholder="Name" className='textField' name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
                  <input placeholder="Email" className='textField' name="email" type="text" value={this.state.email} onChange={this.handleInputChange} />
                  <input placeholder="Phone" className='textField' name="phone" type="text" value={this.state.phone} onChange={this.handleInputChange} />

                  <p>You would like to get involved as a...</p>
                  <div className="RadioBox">
                    <div>
                      <input className='radio' value="participant" name="selected" type="radio" checked={this.state.selected === "participant"}
                          onChange={this.handleInputChange} />
                          <p>Participant</p>
                    </div>
                    <div>
                      <input className='radio' value="mentor" name="selected" type="radio" checked={this.state.selected === "mentor"}
                          onChange={this.handleInputChange} />
                          <p>Mentor </p>
                    </div>
                    <div>
                      <input className='radio' value="instructor" name="selected" type="radio" checked={this.state.selected === "instructor"}
                          onChange={this.handleInputChange} />
                          <p>Instructor</p>
                    </div>
                  </div>
                  <textarea name="comment" type="text" value={this.state.comment} onChange={this.handleInputChange} />
                  <br />
                  <input type="submit" value="Click to Submit" />
              </form>
            </div>
                      <EmailConfirm message={this.state.emailSuccess}/>
          </div>
          );
        }
      }
