import React from "react"
import Quiz from 'react-quiz-component';

const dearEvanHansenData = require("./DearEvanHansenData.json")

const DearEvanHansen = () => {

    return (
        <div>
        <Quiz quiz = {dearEvanHansenData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default DearEvanHansen;
