import React from "react"
import Quiz from 'react-quiz-component';
const quizData = require("./quizData.json")

const QuizFunc = () => {
    return(
        <div>
        <Quiz quiz = {quizData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
  }
  
export default QuizFunc;