import React from "react"
import Quiz from 'react-quiz-component';

const rentData = require("./RentData.json")

const Rent = () => {

    return (
        <div>
        <Quiz quiz = {rentData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default Rent;
