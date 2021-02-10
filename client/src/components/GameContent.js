import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import ProgressBar from "react-bootstrap/ProgressBar"
import Games from "../pages/Games";


function GameContent() {
        return(
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
                                <Card style={{margin: "auto", marginTop:"20px"}}>
                                    <Card.Header>Progress</Card.Header>
                                    <ProgressBar animated variant="warning" now={60} style={{margin:"15px"}}/> 
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Card style={{width:"100%", margin: "auto", marginTop:"20px"}}>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
    
        );
};


export default GameContent;