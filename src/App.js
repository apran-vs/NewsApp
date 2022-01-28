import './App.css';

import React, { Component } from 'react'
import NavBar from './Componets/NavBar';
import News from './Componets/News';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Switch
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/" Component="<News/>"><News key="general" pageSize={6} country="in" category="general"/></Route>
            <Route exact path="/business" Component="<News/>"><News key="business" pageSize={6} country="in" category="business"/></Route>
            <Route exact path="/entertainment" Component="<News/>"><News key="entertainment" pageSize={6} country="in" category="entertainment"/></Route>
            <Route exact path="/health" Component="<News/>"><News key="health" pageSize={6} country="in" category="health"/></Route>
            <Route exact path="/science" Component="<News/>"><News key="science" pageSize={6} country="in" category="science"/></Route>
            <Route exact path="/sports" Component="<News/>"><News key="sports" pageSize={6} country="in" category="sports"/></Route>
            <Route exact path="/technology" Component="<News/>"><News key="technology" pageSize={6} country="in" category="technology"/></Route>
          </Switch>
        
      </Router>
      </div>
    )
  }
}

export default App
