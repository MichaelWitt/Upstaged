import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import KnowtheShow from "../imgs/KnowtheShow.png"
import LyricLogo from "../imgs/LyricLogo.png"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"


function GamePage() {
        return(
            <Container  style={{marginTop:"30px"}}>
                <Row>
                    <Card style={{ width: "18rem", margin:"15px"}}>
                        <Card.Img variant="top" href="/Quizzes" src={KnowtheShow} />
                        <Card.Body>
                            <h4>So, You Think You Know the Show?</h4>
                            <Button variant="warning" href="/Quizzes" style={{backgroundColor:"#f7e200"}}>Quizzes</Button>
                        </Card.Body>
                    </Card> 
                    <Card style={{ width: "18rem", margin:"15px"}}>
                        <Card.Img variant="top" src={LyricLogo} />
                        <Card.Body>
                            <h4>Finish The Lyrics</h4>       
                            <Button variant="warning" style={{backgroundColor:"#f7e200"}}>Guess The Lyric</Button>
                        </Card.Body>
                    </Card> 
                </Row>
                <Row>
                    <Card style={{ width: "18rem", margin:"15px"}}>
                        <Card.Img variant="top" href="/Quizzes" src={KnowtheShow} />
                        <Card.Body>
                            <h4>So, You Think You Know the Show?</h4>
                            <Button variant="warning" href="/Quizzes" style={{backgroundColor:"#f7e200"}}>Quizzes</Button>
                        </Card.Body>
                    </Card> 
                    <Card style={{ width: "18rem", margin:"15px"}}>
                        <Card.Img variant="top" src={LyricLogo} />
                        <Card.Body>
                            <Button variant="warning" style={{backgroundColor:"#f7e200"}}>Guess The Lyric</Button>
                        </Card.Body>
                    </Card> 
                </Row>
            </Container>
        );
};


export default GamePage;