import React, { Component } from 'react';
import './App.css';
import FooterNav from './components/Footer';
import Profile from './components/Profile';
import MainPage from './pages/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage />
        <Profile />
        <FooterNav/>
      </div>
    );
  }
}

export default App;
