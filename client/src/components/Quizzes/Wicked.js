import React from "react"
import Quiz from 'react-quiz-component';

const wickedData = require("./WickedData.json")

const Wicked = () => {

    return (
        <div>
        <Quiz quiz = {wickedData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default Wicked;
