import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <h1>TEST</h1>
      </div>
    );
  }
}

export default App;
