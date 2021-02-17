import React from "react"
import Quiz from 'react-quiz-component';
import AppNav from "../Navbar";

const hamiltonData = require("./HamiltonData.json")

const Hamilton = () => {

    return (
        <div>
        <AppNav />
        <Quiz quiz = {hamiltonData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default Hamilton;
