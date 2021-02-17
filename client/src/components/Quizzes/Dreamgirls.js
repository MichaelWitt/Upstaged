import React from "react"
import Quiz from 'react-quiz-component';
import AppNav from "../Navbar";

const dreamgirlsData = require("./DreamgirlsData.json")

const Dreamgirls = () => {

    return (
        <div>
        <AppNav />
        <Quiz quiz = {dreamgirlsData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default Dreamgirls;
