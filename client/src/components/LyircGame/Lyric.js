import React, { useContext, useState } from "react"
import Quiz from "react-quiz-component";
import AppNav from "../Navbar"

import { ProfileContext } from "../../utils/GlobalState";
import QuizComplete from '../Quizzes/quizComplete';
import LyricLogo from "../../imgs/LyricLogo.png";

const LyricData = require("./LyricData.json");


function LyricGame() {
    let profile = useContext(ProfileContext);

    const [showInfo, setShowInfo] = useState({
        showName: "Finsih the Lyrics",
        quizPointsEarned: 0,
        showImage: LyricLogo,
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
            <AppNav />
            <Quiz quiz = {LyricData} shuffle={true} showInstantFeedback={false} onComplete={onCompleteAction}/>
            <br></br>
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
             <br></br>
            </div>
        )
    }
}

export default LyricGame;
