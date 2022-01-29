import './App.css';

import React, { Component } from 'react'
import NavBar from './Componets/NavBar';
import News from './Componets/News';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export class App extends Component {
  pageSize = 6;

  state = {
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <LoadingBar
            height={3}
            color='#ffffff'
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/" Component="<News/>"><News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/></Route>
            <Route exact path="/business" Component="<News/>"><News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"/></Route>
            <Route exact path="/entertainment" Component="<News/>"><News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/></Route>
            <Route exact path="/health" Component="<News/>"><News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health"/></Route>
            <Route exact path="/science" Component="<News/>"><News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science"/></Route>
            <Route exact path="/sports" Component="<News/>"><News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports"/></Route>
            <Route exact path="/technology" Component="<News/>"><News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"/></Route>
          </Switch>
        
      </Router>
      </div>
    )
  }
}

export default App
