import React, { useContext } from "react"
import Quiz from 'react-quiz-component';
import AppNav from "../Navbar";
import { ProfileContext } from "../../utils/GlobalState";

const lesMisData = require("./LesMisData.json")

const LesMis = () => {
    let profile = useContext(ProfileContext);
    
    const onCompleteAction = (obj) => {
        let pointsEarned = obj.correctPoints;
        profile.dispatch({type: "addPoints", value: pointsEarned});
    
      };

    return (
        <div>
        <AppNav />
        <Quiz quiz = {lesMisData} shuffle={true} showInstantFeedback={false} onComplete={onCompleteAction}/>
        </div>
    )
}

export default LesMis;
