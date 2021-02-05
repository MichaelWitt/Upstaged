import React from "react"
import Quiz from 'react-quiz-component';

const hamiltonData = require("./HamiltonData.json")

const Hamilton = () => {

    return (
        <div>
        <Quiz quiz = {hamiltonData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default Hamilton;
