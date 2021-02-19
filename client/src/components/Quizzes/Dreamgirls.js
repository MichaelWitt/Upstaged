import React, { useContext } from "react"
import { Card } from "react-bootstrap"
import Quiz from 'react-quiz-component';
import AppNav from "../Navbar";
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
        <AppNav />
        <Card style={{ width: '18rem' }}>
            <Card.Text>
            <Quiz quiz = {dreamgirlsData} shuffle={true} showInstantFeedback={false} onComplete={onCompleteAction}/>
            </Card.Text>
        </Card>
        </div>
    )
}

export default Dreamgirls;
