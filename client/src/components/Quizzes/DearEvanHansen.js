import React from "react"
import Quiz from 'react-quiz-component';

const dearEvanHansenData = require("./DearEvanHansenData.json")

const onCompleteAction = (obj) => {
    console.log(obj);
    let pointsEarned = obj.correctPoints;
    console.log("points Earned", pointsEarned);
  };
  
const DearEvanHansen = () => {
    return (
        <div>
        <Quiz quiz = {dearEvanHansenData} shuffle={true} showInstantFeedback={false} onComplete={onCompleteAction}/>
        </div>
    )
}

export default DearEvanHansen;
