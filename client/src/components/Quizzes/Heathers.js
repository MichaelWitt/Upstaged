import React, { useContext } from "react"
import Quiz from 'react-quiz-component';
import { ProfileContext } from "../../utils/GlobalState";

const heathersData = require("./HeathersData.json")

const Heathers = () => {
    let profile = useContext(ProfileContext);
    
    const onCompleteAction = (obj) => {
        let pointsEarned = obj.correctPoints;
        profile.dispatch({type: "addPoints", value: pointsEarned});
    
      };

    return (
        <div>
        <Quiz quiz = {heathersData} shuffle={true} showInstantFeedback={false} onComplete={onCompleteAction}/>
        </div>
    )
}

export default Heathers;
