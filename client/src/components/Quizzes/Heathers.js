import React from "react"
import Quiz from 'react-quiz-component';
import AppNav from "../Navbar";

const heathersData = require("./HeathersData.json")

const Heathers = () => {

    return (
        <div>
        <AppNav />
        <Quiz quiz = {heathersData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default Heathers;
