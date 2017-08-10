import React from 'react';

export default class ContactForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        phone: ''
      };

      this.handleInputChange = this.handleInputChange.bind(this);
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
        <form>
        <label>
         Name:
         <input
           name="name"
           type="text"
           checked={this.state.name}
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
        </form>
      );
    }
  }
