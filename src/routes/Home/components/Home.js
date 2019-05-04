import React, { Component } from 'react';

export default class Home extends Component {
  
  componentDidMount(){
    console.log(this.props.orders)
  }
  render() {
    return (
      <div> textInComponent </div>
    );
  }
}
