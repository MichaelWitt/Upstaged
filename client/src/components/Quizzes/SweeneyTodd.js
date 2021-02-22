import React, { useContext, useState } from "react"
import Quiz from 'react-quiz-component';
import AppNav from "../Navbar";

import { ProfileContext } from "../../utils/GlobalState";
import QuizComplete from './quizComplete';
import sweeneyPlaybill from "../../imgs/playbills/sweeney.png";

const sweeneyToddData = require("./SweeneyToddData.json")

function SweeneyTodd() {
    let profile = useContext(ProfileContext);

    const [showInfo, setShowInfo] = useState({
        showName: "Sweeney Todd",
        quizPointsEarned: 0,
        showImage: sweeneyPlaybill,
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
            <Quiz quiz = {sweeneyToddData} shuffle={true} showInstantFeedback={false} onComplete={onCompleteAction}/>
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
}

export default SweeneyTodd;
