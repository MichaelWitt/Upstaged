import React, { useContext, useEffect } from "react";import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import ProgressBar from "react-bootstrap/ProgressBar"
import Games from "../pages/Games";
import ShowScore from "../imgs/ShowScore.png"
import {TwitterTimelineEmbed} from 'react-twitter-embed';
import AppNav from "./Navbar";
import Backstage from "../imgs/Backstage.png"
import { ProfileContext } from "../utils/GlobalState";



function GameContent(props) {
    const profile = useContext(ProfileContext);

  useEffect(() => {
    let usersPoints = profile.ProfileAttributes.points;

    if (usersPoints >= 0 && usersPoints < 100) {
      profile.dispatch({type: "setEnsemble"});
    } else if (usersPoints >= 100 && usersPoints < 200){
      profile.dispatch({type: "setFeaturedEnsemble"});
    } else if (usersPoints >= 200 && usersPoints < 350){
      profile.dispatch({type: "setPrincipal"});
    } else if (usersPoints >= 350 && usersPoints < 600){
      profile.dispatch({type: "setLeadActor"});
    } else if (usersPoints >= 600 && usersPoints < 900){
      profile.dispatch({type: "setStar"});
    } else if (usersPoints >= 900){
      profile.dispatch({type: "setLegend"});
    }
  },[profile.ProfileAttributes.points]);
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
                                    <ProgressBar 
                                    animated variant="warning" 
                                    style={{margin:"10px"}} 
                                    now={profile.ProfileAttributes.points}
                                    max={profile.ProfileAttributes.maxPoints}
                                    label={`${profile.ProfileAttributes.points}/${profile.ProfileAttributes.maxPoints}`}
                                    />
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Card style={{width:"100%", height:"500px", margin: "auto", marginTop:"10px", marginBottom:"20px"}}>
                                    <Card.Body>
                                    <TwitterTimelineEmbed
                                        sourceType="profile"
                                        screenName="Playbill"
                                        options={{height: "450px"}}
                                    />
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
                        <Row>
                            <Col sm={12}>
                                <Card style={{margin: "auto", marginTop:"10px", marginBottom:"20px"}}>
                                    <Card.Body >
                                    <a href="https://www.backstage.com/casting" target="_blank" rel="noopener noreferrer"><img href="https://www.backstage.com/casting" src={Backstage} alt="Backstage Logo" style={{width:"25%", float:"left"}}></img></a><p style={{float:"right", padding:"0px", width:"70%"}}>BACKSTAGE - Find Open Casting Calls & Auditions Near You.  Currently showing 8206 acting jobs with 2670 productions</p>
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