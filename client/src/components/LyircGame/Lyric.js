import React from "react"
import Quiz from "react-quiz-component";
import Container from "react-bootstrap/Container"
import AppNav from "../Navbar"


const LyricData = require("./LyricData.json");


const LyricGame = () => {
    return (
        <div>
        <AppNav/>
        <Container >
            <Quiz quiz = {LyricData} shuffle={true} showInstantFeedback={false} />
        </Container>
        </div>
    )
}

export default LyricGame;
