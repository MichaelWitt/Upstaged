import React from "react"
import Quiz from 'react-quiz-component';
import AppNav from "../Navbar";

const sweeneyToddData = require("./SweeneyToddData.json")

const SweeneyTodd = () => {

    return (
        <div>
        <AppNav />
        <Quiz quiz = {sweeneyToddData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default SweeneyTodd;
