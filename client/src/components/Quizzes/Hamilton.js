import React, { useContext } from "react"
import Quiz from 'react-quiz-component';
import AppNav from "../Navbar";
import { ProfileContext } from "../../utils/GlobalState";

const hamiltonData = require("./HamiltonData.json")

const Hamilton = () => {
    let profile = useContext(ProfileContext);
    
    const onCompleteAction = (obj) => {
        let pointsEarned = obj.correctPoints;
        profile.dispatch({type: "addPoints", value: pointsEarned});
    
      };

    return (
        <div>
        <AppNav />
        <Quiz quiz = {hamiltonData} shuffle={true} showInstantFeedback={false} onComplete={onCompleteAction}/>
        </div>
    )
}

export default Hamilton;
