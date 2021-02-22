import React, { useContext, useState } from "react"
import Quiz from 'react-quiz-component';
import AppNav from "../Navbar";
import { ProfileContext } from "../../utils/GlobalState";
import QuizComplete from './quizComplete';
import wickedPlaybill from "../../imgs/playbills/wicked.png";

const wickedData = require("./WickedData.json");


function Wicked() {
    let profile = useContext(ProfileContext);

    const [showInfo, setShowInfo] = useState({
        showName: "Wicked",
        quizPointsEarned: 0,
        showImage: wickedPlaybill,
    });
    
    const onCompleteAction = (obj) => {
        let pointsEarned = obj.correctPoints;
        profile.dispatch({type: "addPoints", value: pointsEarned});
        const storedUserData = localStorage.getItem("user");
        console.log('storedUserData:', storedUserData)
        const storedUserId = JSON.parse(storedUserData)._id;
        const storedUserPoints = localStorage.getItem("sessionPoints");
        console.log('storedUserPoints:', storedUserPoints);
        const newUserPointTotal = parseInt(storedUserPoints) + parseInt(pointsEarned);
        localStorage.setItem("sessionPoints", newUserPointTotal);
  
        setShowInfo({...showInfo, quizPointsEarned: pointsEarned})
    
      };
    if (showInfo.quizPointsEarned === 0) {
        return (
            <div>
            <AppNav/>
            <Quiz quiz = {wickedData} shuffle={true} showInstantFeedback={false} onComplete={onCompleteAction}/>
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

export default Wicked;
