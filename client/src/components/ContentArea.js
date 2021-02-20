import React from "react";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import ProgressBar from "react-bootstrap/ProgressBar"
import ShowScore from "../imgs/ShowScore.png"
import UpstagedFull from "../imgs/UpstagedFull.png"
import Quizzes from "../imgs/Quizzes.png"
import News from "../imgs/News.png"
import GameNight from "../imgs/GameNight.png"

function Content() {
        return(
            <div>
            <Row>
                <Col md={8}>
                    <Container style={{width:"100%"}}>
                            <Col sm={12}>
                                <Card className="text-center" style={{width: "100%", margin: "auto", marginTop: "20px", marginBottom:"50px", borderColor: "#f7e200", borderWidth: "10px" }}>
                                    <Card.Body >
                                        <h1>WLECOME TO</h1>
                                        <img src={UpstagedFull} alt="Upstaed Full Logo" style={{width:"100%"}}></img>
                                        <h3>THE INTERCTIVE APP FOR THEATRE ENTHUSIASTS</h3>
                                        <Card.Text>
                                        Have fun exploring the site, gain points to climb the cast ranks,  and try not to be UPSTAGED.
                                        </Card.Text>
                                        <Row>
                                            <Col sm={4}>
                                            <Card style={{ width: '100%', border:"dotted #f7e200", borderWidth:"8px" }}>
                                                <Card.Body>
                                                    <Card.Title>News</Card.Title>
                                                    <a href="/News"><Card.Img  src={News} alt="Upstaged News" style={{height:"90%", width:"90%"}}/></a>
                                                </Card.Body>
                                            </Card>
                                            </Col>
                                            <Col sm={4}>
                                            <Card style={{ width: '100%', border:"dotted #f7e200", borderWidth:"8px" }}>
                                                <Card.Body>
                                                    <Card.Title>Games</Card.Title>
                                                    <a href="/Games"><Card.Img  src={GameNight} alt="Upstaged Games" style={{height:"90%", width:"90%"}}/></a>
                                                </Card.Body>
                                            </Card>
                                            </Col>
                                            <Col sm={4}>
                                            <Card style={{ width: '100%', border:"dotted #f7e200", borderWidth:"8px" }}>
                                                <Card.Body>
                                                    <Card.Title>Quizzes</Card.Title>
                                                    <a href="/Quizzes"><Card.Img  src={Quizzes} alt="Upstaged Quizzes" style={{height:"90%", width:"90%"}}/></a>
                                                </Card.Body>
                                            </Card>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                    </Container>
                </Col>
                <Col md={4}>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Card style={{margin: "auto", marginTop:"20px"}}>
                                    <Card.Header>Progress</Card.Header>
                                    <ProgressBar animated variant="warning" now={60} style={{margin:"10px"}}/> 
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Card style={{width:"100%", height:"330px", margin: "auto", marginTop:"10px"}}>
                                    <Card.Body>
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=PLiy0XOfUv4hGKvbULOvGBDPcYc6mOjwJX" title="Broadway Youtube Compilation" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Card style={{margin: "auto", marginTop:"10px", marginBottom:"20px"}}>
                                    <Card.Body >
                                    <a href="https://www.show-score.com/" target="_blank" rel="noopener noreferrer"><img href="https://www.show-score.com/" src={ShowScore} alt="Show-Score Logo" style={{width:"25%", float:"left"}}></img></a><p style={{float:"right", padding:"0px", width:"70%"}}>Show-Score simply and clearly organizes the information you need to discover shows you’ll love, from people you trust, at the right price for you.</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            </div>
    
        );
};


export default Content;