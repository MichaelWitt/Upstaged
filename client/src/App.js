import React, { Component } from 'react';
import './App.css';
import QuestionTable from './components/QuestionTable.js'
import Score from './components/Score.js'
import Header from './components/Header.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Score />
        <QuestionTable />
      </div>
    );
  }
}

export default App;
