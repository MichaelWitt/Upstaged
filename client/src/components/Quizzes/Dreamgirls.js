import React, { useContext } from "react"
import Quiz from 'react-quiz-component';
import { ProfileContext } from "../../utils/GlobalState";

const dreamgirlsData = require("./DreamgirlsData.json")

const Dreamgirls = () => {
    let profile = useContext(ProfileContext);
    
    const onCompleteAction = (obj) => {
        let pointsEarned = obj.correctPoints;
        profile.dispatch({type: "addPoints", value: pointsEarned});
    
      };
    return (
        <div>
        <Quiz quiz = {dreamgirlsData} shuffle={true} showInstantFeedback={false} onComplete={onCompleteAction}/>
        </div>
    )
}

export default Dreamgirls;
