import React from "react"
import Quiz from "react-quiz-component";

const LyricData = require("./LyricData.json");

// const onCompleteAction = (obj) => {
//     console.log(obj);
//     let pointsEarned = obj.correctPoints;
//     console.log("points Earned", pointsEarned);
//   };
  
const LyricGame = () => {
    return (
        <div>
        <Quiz quiz = {LyricData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default LyricGame;
