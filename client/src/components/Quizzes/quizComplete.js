import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Media from 'react-bootstrap/Media'


function QuizComplete(props) {
    const quizCompleteStyle = {
        color: "Black",
        position: "absolute",
        top: "25%",
        left: "25%",
        width: "600px",
        textAlign: "left"
    };

  return (
    <Media style={quizCompleteStyle}>
        <Image src={props.showImage} className="mr-3" roundedCircle width={150} height={150}
        />
        <Media.Body>
            <h5>Wow {props.name}!</h5>
            <p>
                You earned <strong>{props.quizPointsEarned} points</strong> with your {props.showName} knowledge!
                Keep playing Upstaged games and you'll make it to Legend status in no time!
            </p>
        <Button href="/Quizzes">Back to Quizzes</Button>
        </Media.Body>
    </Media>

  );
}

export default QuizComplete;