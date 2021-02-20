import React, { useContext } from "react"
import Quiz from 'react-quiz-component';
import { ProfileContext } from "../../utils/GlobalState";
import AppNav from "../Navbar";
import Container from "react-bootstrap/Container"
import "./Quizzes.css"

const dearEvanHansenData = require("./DearEvanHansenData.json")


const DearEvanHansen = () => {
    let profile = useContext(ProfileContext);
    
    const onCompleteAction = (obj) => {
        console.log(obj);
        let pointsEarned = obj.correctPoints;
        console.log("points Earned", pointsEarned);
        profile.dispatch({type: "addPoints", value: pointsEarned});
        //using mongoose, change the points the user has to db.User.currentPoints + pointsEarned
    
      };
    return (
        <>
        <div>
        <AppNav />
        <Container>
            <Quiz quiz = {dearEvanHansenData} shuffle={true} showInstantFeedback={false} onComplete={onCompleteAction}/>
        </Container>
        </div>
        </>
    )
}

export default DearEvanHansen;
