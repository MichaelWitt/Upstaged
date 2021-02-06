import React from "react"
import Quiz from 'react-quiz-component';

const lesMisData = require("./LesMisData.json")

const LesMis = () => {

    return (
        <div>
        <Quiz quiz = {lesMisData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default LesMis;
