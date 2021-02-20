import React, { useContext, useState } from "react"
import Quiz from 'react-quiz-component';
import AppNav from "../Navbar";

import { ProfileContext } from "../../utils/GlobalState";
import QuizComplete from './quizComplete';
import heathersPlaybill from "../../imgs/playbills/heathers.png";

const heathersData = require("./HeathersData.json")

function Heathers() {
    let profile = useContext(ProfileContext);

    const [showInfo, setShowInfo] = useState({
        showName: "Heathers",
        quizPointsEarned: 0,
        showImage: heathersPlaybill,
    });
    
    const onCompleteAction = (obj) => {
        let pointsEarned = obj.correctPoints;
        profile.dispatch({type: "addPoints", value: pointsEarned});
        setShowInfo({...showInfo, quizPointsEarned: pointsEarned})
    
      };
    if (showInfo.quizPointsEarned === 0) {
        return (
            <div>
            <AppNav/>
            <Quiz quiz = {heathersData} shuffle={true} showInstantFeedback={false} onComplete={onCompleteAction}/>
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
export default Heathers;
