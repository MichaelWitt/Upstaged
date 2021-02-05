import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import FooterNav from './components/Footer';
import Profile from './components/Profile';
import Quizzes from "./components/Quizzes/Quizzes"
import MainPage from './pages/MainPage';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Profile />
        <FooterNav/>
        <Switch>
        <Route exact path={"/Profile"}>
          <Profile />
          <h1>TEST</h1>
        </Route>
        <Route exact path={"/Quizzes"}>
          <Quizzes />
        </Route>
        </Switch>

      </div>
    </Router>
    );
  }
}

export default App;
