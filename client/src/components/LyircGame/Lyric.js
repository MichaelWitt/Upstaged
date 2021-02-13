import React from "react"
import Quiz from "react-quiz-component";
import Container from "react-bootstrap/Container"

const LyricData = require("./LyricData.json");


const LyricGame = () => {
    return (
        <Container>
        <Quiz quiz = {LyricData} shuffle={true} showInstantFeedback={false}/>
        </Container>
    )
}

export default LyricGame;
