import React, { useContext } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
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
        <Container>
            <Row className="justify-content-md-center mr-5">
                <Col xs lg="6">
                    <Card style={{border: "5px solid black", width: "610px"}}>
                    <Card.Body style={{backgroundColor: "danger", marginRight: "100px"}}>
                    <Quiz quiz = {dreamgirlsData} shuffle={true} showInstantFeedback={false} onComplete={onCompleteAction}/>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

        </div>
    )
}

export default Dreamgirls;
