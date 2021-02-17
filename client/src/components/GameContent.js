import React from "react";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import ProgressBar from "react-bootstrap/ProgressBar"
import Games from "../pages/Games";
import ShowScore from "../imgs/ShowScore.png"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import AppNav from "./Navbar"


function GameContent() {
        return(
            <div>
            <AppNav />
            <Row>
                <Col md={8}>
                    <div>
                        <Games/>
                    </div>
                </Col>
                <Col md={4}>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Card style={{margin: "auto", marginTop:"40px"}}>
                                    <Card.Header>Progress</Card.Header>
                                    <ProgressBar animated variant="warning" now={60} style={{margin:"10px"}}/> 
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Card style={{width:"100%", height:"330px", margin: "auto", marginTop:"10px"}}>
                                    <Card.Body>
                                    <TwitterTimelineEmbed
                                        sourceType="profile"
                                        screenName="Playbill"
                                        options={{height: 300}}
                                    />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Card style={{margin: "auto", marginTop:"10px", marginBottom:"20px"}}>
                                    <Card.Body >
                                    <a href="https://www.show-score.com/" target="_blank"><img href="https://www.show-score.com/" src={ShowScore} style={{width:"25%", float:"left"}}></img></a><p style={{float:"right", padding:"0px", width:"70%"}}>Show-Score simply and clearly organizes the information you need to discover shows you’ll love, from people you trust, at the right price for you.</p>
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


export default GameContent;