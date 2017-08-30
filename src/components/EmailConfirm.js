import React, { Component } from 'react';

export default class EmailConfirm extends Component {
  render() {
    return(
      <div className="EmailConfirm">
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}
