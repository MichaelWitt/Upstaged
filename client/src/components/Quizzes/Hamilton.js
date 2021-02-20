import React, { useContext, useState } from "react"
import Quiz from 'react-quiz-component';
import AppNav from "../Navbar";

import { ProfileContext } from "../../utils/GlobalState";
import QuizComplete from './quizComplete';
import hamiltonPlaybill from "../../imgs/playbills/hamilton.png";

const hamiltonData = require("./HamiltonData.json")

function Hamilton() {
    let profile = useContext(ProfileContext);

    const [showInfo, setShowInfo] = useState({
        showName: "Hamilton",
        quizPointsEarned: 0,
        showImage: hamiltonPlaybill,
    });
    
    const onCompleteAction = (obj) => {
        let pointsEarned = obj.correctPoints;
        profile.dispatch({type: "addPoints", value: pointsEarned});
        setShowInfo({...showInfo, quizPointsEarned: pointsEarned})
    
      };
    if (showInfo.quizPointsEarned === 0) {
        return (
            <div>
<<<<<<< HEAD
            <AppNav/>
=======
>>>>>>> 738f669b6e72b0d72bb4146b393872f3803e6266
            <Quiz quiz = {hamiltonData} shuffle={true} showInstantFeedback={false} onComplete={onCompleteAction}/>
            </div>
        )
    } else {
        return (
            <div>
<<<<<<< HEAD
            <AppNav/>
=======
>>>>>>> 738f669b6e72b0d72bb4146b393872f3803e6266
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

export default Hamilton;
