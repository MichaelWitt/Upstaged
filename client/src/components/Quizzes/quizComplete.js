import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";


function QuizComplete(props) {
    const quizCompleteStyle = {
        color: "Grey",
        backgroundColor: "Yellow",
    };

  return (
    <Jumbotron fluid>
        <Container style={quizCompleteStyle}>
            <Row><h1>Wow {props.name}!</h1></Row>
            <Row>
                <Col xs={6} md={4}>
                    <Image src={props.showImage} roundedCircle width={150} height={150}/>
                </Col>
                <Col xs={6} md={4}>
                    <h3>You earned {props.quizPointsEarned} points with your {props.showName} knowledge!</h3>
                </Col>
            </Row>
            <Row>
                <h5>Keep playing Upstaged games and you'll make it to Legend status in no time!</h5>
            </Row>
            <Button href="/Quizzes">Back to Quizzes</Button>
        </Container>
  </Jumbotron>
  );
}

export default QuizComplete;