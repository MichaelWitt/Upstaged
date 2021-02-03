import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Quiz from "./components/Quiz/Quiz"

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
        <Route exact path={"/Profile"}>
          <Profile />
          <h1>TEST</h1>
        </Route>
        <Route exact path={"/Quiz"}>
          <Quiz />
        </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
