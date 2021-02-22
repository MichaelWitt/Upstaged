import React, { useContext, useState } from "react"
import Quiz from 'react-quiz-component';
import AppNav from "../Navbar";
import "./Quizzes.css"

import { ProfileContext } from "../../utils/GlobalState";
import QuizComplete from './quizComplete';
import dearevanPlaybill from "../../imgs/playbills/dearevan.png";

const dearEvanHansenData = require("./DearEvanHansenData.json")


function DearEvanHansen() {
    let profile = useContext(ProfileContext);

    const [showInfo, setShowInfo] = useState({
        showName: "Dear Evan Hansen",
        quizPointsEarned: 0,
        showImage: dearevanPlaybill,
    });
    
    const onCompleteAction = (obj) => {
        let pointsEarned = obj.correctPoints;
        profile.dispatch({type: "addPoints", value: pointsEarned});
        const storedUserPoints = localStorage.getItem("sessionPoints");
        const newUserPointTotal = parseInt(storedUserPoints) + parseInt(pointsEarned);
        localStorage.setItem("sessionPoints", newUserPointTotal);
        
        setShowInfo({...showInfo, quizPointsEarned: pointsEarned})
    
      };
    if (showInfo.quizPointsEarned === 0) {
        return (
            <div>
            <AppNav/>
            <Quiz quiz = {dearEvanHansenData} shuffle={true} showInstantFeedback={false} onComplete={onCompleteAction}/>
            </div>
        )
    } else {
        return (
            <div>
            <AppNav/>
            <QuizComplete
                name = {profile.ProfileAttributes.name}
                showName = {showInfo.showName}
                quizPointsEarned = {showInfo.quizPointsEarned}
                showImage = {showInfo.showImage}
             />
            </div>
        )
    }
}

export default DearEvanHansen;
