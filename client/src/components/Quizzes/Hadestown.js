import React from "react"
import Quiz from 'react-quiz-component';
import AppNav from "../Navbar";

const hadestownData = require("./HadestownData.json")

const Hadestown = () => {

    return (
        <div>
        <AppNav />
        <Quiz quiz = {hadestownData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default Hadestown;
