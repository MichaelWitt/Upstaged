import React from "react"
import Quiz from 'react-quiz-component';

const dreamgirlsData = require("./DreamgirlsData.json")

const Dreamgirls = () => {

    return (
        <div>
        <Quiz quiz = {dreamgirlsData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default Dreamgirls;
