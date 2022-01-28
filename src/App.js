import './App.css';

import React, { Component } from 'react'
import NavBar from './Componets/NavBar';
import News from './Componets/News';

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={6} country="in" category="health"/>
      </div>
    )
  }
}

export default App
