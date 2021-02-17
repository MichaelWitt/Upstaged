import React from "react"
import Quiz from 'react-quiz-component';
import AppNav from "../Navbar";


const rentData = require("./RentData.json")

const Rent = () => {

    return (
        <div>
        <AppNav />
        <Quiz quiz = {rentData} shuffle={true} showInstantFeedback={false}/>
        </div>
    )
}

export default Rent;
