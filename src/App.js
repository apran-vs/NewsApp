import './App.css';

import React, { useState } from 'react'
import NavBar from './Componets/NavBar';
import News from './Componets/News';
import AboutUs from './Componets/AboutUs';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <NavBar/>
        <LoadingBar
          height={3}
          color='#ffffff'
          progress={progress}
        />
        <Switch>
          <Route exact path="/" Component="<News/>"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route>
          <Route exact path="/business" Component="<News/>"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route>
          <Route exact path="/entertainment" Component="<News/>"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route>
          <Route exact path="/health" Component="<News/>"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route>
          <Route exact path="/science" Component="<News/>"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route>
          <Route exact path="/sports" Component="<News/>"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route>
          <Route exact path="/technology" Component="<News/>"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route>
          <Route exact path="/AboutUs" Component="<AboutUs/>"><AboutUs/></Route>
        </Switch>
      
    </Router>
    </div>
  )
}

export default App
