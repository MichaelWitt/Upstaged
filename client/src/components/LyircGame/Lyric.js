import React from "react"
import Quiz from "react-quiz-component";
import AppNav from "../Navbar"


const LyricData = require("./LyricData.json");


const LyricGame = () => {
    return (
        <div>
        <AppNav/>
            <Quiz quiz = {LyricData} shuffle={true} showInstantFeedback={false} />
        </div>
    )
}

export default LyricGame;
