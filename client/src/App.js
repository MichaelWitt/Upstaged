import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import MainPage from './pages/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage />
        <Profile />
      </div>
    );
  }
}

export default App;
