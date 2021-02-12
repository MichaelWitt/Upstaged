import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import KnowtheShow from "../imgs/KnowtheShow.png"
import LyricLogo from "../imgs/LyricLogo.png"
import Jeopardy from "../imgs/Jeopardy.png"
import CYOP from "../imgs/CYOPlaybill.png"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


function GamePage() {
        return(
            <Container  style={{marginTop:"30px"}}>
                <Row>
                    <Col md={6}>
                        <Card style={{ margin:"20px"}}>
                            <Card.Img variant="top" href="/Quizzes" src={KnowtheShow} />
                            <Card.Body>
                                <h4>So, You Think You Know the Show?</h4>
                                <Button variant="warning" href="/Quizzes" style={{backgroundColor:"#f7e200"}}>Quizzes</Button>
                            </Card.Body>
                        </Card> 
                    </Col>
                    <Col md={6}>
                        <Card style={{margin:"20px"}}>
                            <Card.Img variant="top" href="/CreateYourOwn" src={CYOP} />
                            <Card.Body>
                                <h4>Create your own Playbill </h4>
                                <Button variant="warning" href="/CreateYourOwn" style={{backgroundColor:"#f7e200"}}>Play</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Card style={{margin:"20px"}}>
                            <Card.Img variant="top" href="/Jeopardy" src={Jeopardy} />
                            <Card.Body>
                                <h4>Theatre Jeopardy</h4>       
                                <Button variant="warning" href="/Jeopardy" style={{backgroundColor:"#f7e200"}}>Jeopardy!</Button>
                            </Card.Body>
                        </Card> 
                    </Col>
                    <Col md={6}>
                        <Card style={{margin:"20px"}}>
                            <Card.Img variant="top" href="/Lyrics" src={LyricLogo} />
                            <Card.Body>
                                <h4>Finish The Lyrics</h4>       
                                <Button variant="warning" href="/Lyrics" style={{backgroundColor:"#f7e200"}}>Guess The Lyric</Button>
                            </Card.Body>
                        </Card> 
                    </Col>
                </Row>
            </Container>
        );
};


export default GamePage;