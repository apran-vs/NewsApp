import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = 'Arpan';
  render() {
    return (
      <div>
        Hello, My first Class Based Component {this.c}
      </div>
    )
  }
}
