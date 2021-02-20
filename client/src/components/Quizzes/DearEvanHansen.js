import React, { useContext, useState } from "react"
import Quiz from 'react-quiz-component';
import AppNav from "../Navbar";
import Container from "react-bootstrap/Container"
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
        setShowInfo({...showInfo, quizPointsEarned: pointsEarned})
    
      };
<<<<<<< HEAD
    return (
        <>
        <div>
        <AppNav />
        <Container>
            <Quiz quiz = {dearEvanHansenData} shuffle={true} showInstantFeedback={false} onComplete={onCompleteAction}/>
        </Container>
        </div>
        </>
    )
=======
    if (showInfo.quizPointsEarned === 0) {
        return (
            <div>
            <Quiz quiz = {dearEvanHansenData} shuffle={true} showInstantFeedback={false} onComplete={onCompleteAction}/>
            </div>
        )
    } else {
        return (
            <div>
            <QuizComplete
                name = {profile.ProfileAttributes.name}
                showName = {showInfo.showName}
                quizPointsEarned = {showInfo.quizPointsEarned}
                showImage = {showInfo.showImage}
             />
            </div>
        )
    }
>>>>>>> 7a9345a3b4723eebdcae6f53eb7a71e05100d419
}

export default DearEvanHansen;
