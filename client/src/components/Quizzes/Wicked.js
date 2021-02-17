import React from "react"
import Quiz from 'react-quiz-component';
import AppNav from "../Navbar";


const wickedData = require("./WickedData.json")

const Wicked = () => {

    return (
        <div>
        <AppNav />
        <Quiz quiz = {wickedData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default Wicked;
