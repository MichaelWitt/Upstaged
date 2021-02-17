import React from "react"
import Quiz from 'react-quiz-component';
import AppNav from "../Navbar";


const phantomData = require("./PhantomData.json")

const Phantom = () => {

    return (
        <div>
        <AppNav />
        <Quiz quiz = {phantomData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default Phantom;
