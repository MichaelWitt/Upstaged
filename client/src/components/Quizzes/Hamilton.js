import React from "react"
import Quiz from 'react-quiz-component';

const hamiltonData = require("./HamiltonData.json")
console.log('hamiltonData:', hamiltonData)

const Hamilton = () => {
    return (
        <Quiz quiz = {hamiltonData} shuffle={true} showInstantFeedback={false}/>
    );
}

export default Hamilton;
