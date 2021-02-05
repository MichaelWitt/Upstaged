import React from "react"
import Quiz from 'react-quiz-component';

const hadestownData = require("./HadestownData.json")

const Hadestown = () => {

    return (
        <div>
        <Quiz quiz = {hadestownData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default Hadestown;
