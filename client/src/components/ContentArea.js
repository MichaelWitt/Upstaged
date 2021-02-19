import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import ProgressBar from "react-bootstrap/ProgressBar"
import ShowScore from "../imgs/ShowScore.png"

function Content() {
        return(
            <div>
            <Row>
                <Col md={8}>
                    <Container style={{width:"100%"}}>
                            <Col sm={12}>
                                <Card className="text-center" style={{width: "100%", height: "75vh", margin: "auto", marginTop: "20px", marginBottom:"50px", borderColor: "#f7e200", borderWidth: "10px" }}>
                                    <Card.Body >
                                        <Card.Title></Card.Title>
                                        <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
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
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=PLiy0XOfUv4hGKvbULOvGBDPcYc6mOjwJX" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
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
            <Row>
                
            </Row>
            </div>
    
        );
};


export default Content;