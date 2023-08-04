import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = 'Jaydeep';
  render() {
    return (
      <div>
        Hello My class Based component App {this.c}
      </div>
    )
  }
}

