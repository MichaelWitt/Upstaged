import React from "react"
import Quiz from 'react-quiz-component';
import { BrowserRouter as Router, Route, Switch, useRouteMatch} from "react-router-dom";

const hamiltonData = require("./HamiltonData.json")

const Hamilton = () => {
    return (
        <Quiz quiz = {hamiltonData} shuffle={true} showInstantFeedback={false}/>
    );
}

export default Hamilton;
