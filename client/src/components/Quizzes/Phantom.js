import React from "react"
import Quiz from 'react-quiz-component';

const phantomData = require("./PhantomData.json")

const Phantom = () => {

    return (
        <div>
        <Quiz quiz = {phantomData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default Phantom;
