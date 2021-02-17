import React from "react"
import Quiz from 'react-quiz-component';
import AppNav from "../Navbar";

const lesMisData = require("./LesMisData.json")

const LesMis = () => {

    return (
        <div>
        <AppNav />
        <Quiz quiz = {lesMisData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default LesMis;
