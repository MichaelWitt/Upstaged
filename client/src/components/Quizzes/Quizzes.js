import React from "react"
import Quiz from 'react-quiz-component';
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from "react-router-dom";
import Hamilton from "./Hamilton"

const hamiltonData = require("./HamiltonData.json")
const wickedData = require("./WickedData.json")
const dreamgirlsData = require("./DreamgirlsData.json")
const rentData = require("./RentData.json")
const heathersData = require("./HeathersData.json")
const lesMisData = require("./LesMisData.json")
const evanHansenData = require("./EvanHansenData.json")
const sweeneyToddData = require("./SweeneyToddData.json")
const hadestownData = require("./HadestownData.json")
const phantomData = require("./PhantomData.json")

let { path, match} = useRouteMatch
console.log('match:', match)
console.log('path:', path)

const Quizzes = () => {

    return (
      <Router>
      <div className="Quiz">
        <h1>Pick a Quiz!</h1>
        <Switch>
        <Route exact path={`${match.path}/:Hamilton`}>
          <Hamilton />
        </Route>
        <Route exact path={"/Wicked"}>
          <Quiz quiz = {wickedData} shuffle={true} showInstantFeedback={false}/>
        </Route>
        <Route exact path={"/Dreamgirls"}>
          <Quiz quiz = {dreamgirlsData} shuffle={true} showInstantFeedback={false}/>
        </Route>
        <Route exact path={"/Phantom"}>
          <Quiz quiz = {phantomData} shuffle={true} showInstantFeedback={false}/>
        </Route>
        <Route exact path={"/Rent"}>
          <Quiz quiz = {rentData} shuffle={true} showInstantFeedback={false}/>
        </Route>
        <Route exact path={"/Heathers"}>
          <Quiz quiz = {heathersData} shuffle={true} showInstantFeedback={false}/>
        </Route>
        <Route exact path={"/LesMis"}>
          <Quiz quiz = {lesMisData} shuffle={true} showInstantFeedback={false}/>
        </Route>
        <Route exact path={"/DearEvanHansen"}>
          <Quiz quiz = {evanHansenData} shuffle={true} showInstantFeedback={false}/>
        </Route>
        <Route exact path={"/SweeneyTodd"}>
          <Quiz quiz = {sweeneyToddData} shuffle={true} showInstantFeedback={false}/>
        </Route>
        <Route exact path={"/Hadestown"}>
          <Quiz quiz = {hadestownData} shuffle={true} showInstantFeedback={false}/>
        </Route>
        </Switch>
      </div>
    </Router>
    );
}

export default Quizzes;
