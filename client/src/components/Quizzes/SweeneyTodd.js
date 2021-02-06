import React from "react"
import Quiz from 'react-quiz-component';

const sweeneyToddData = require("./SweeneyToddData.json")

const SweeneyTodd = () => {

    return (
        <div>
        <Quiz quiz = {sweeneyToddData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default SweeneyTodd;
