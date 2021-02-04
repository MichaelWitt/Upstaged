import React, { Component } from 'react';
import './App.css';
import AnswerForm from './components/AnswerForm.js'
import QuestionTable from './components/QuestionTable.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuestionTable />
        <AnswerForm />
      </div>
    );
  }
}

export default App;
