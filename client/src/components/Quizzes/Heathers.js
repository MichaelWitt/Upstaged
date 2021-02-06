import React from "react"
import Quiz from 'react-quiz-component';

const heathersData = require("./HeathersData.json")

const Heathers = () => {

    return (
        <div>
        <Quiz quiz = {heathersData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default Heathers;
