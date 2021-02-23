import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap"
import LegendInfoCard from "./LegendInfoCard";
import UserInfoCard from "./UserInfoCard";
import { ProfileContext } from "../utils/GlobalState";
import AppNav from "../components/Navbar";
import {Row, Col, Card, Container} from "react-bootstrap"
import db from "../utils/API";
import axios from "axios"
import ShowScore from "../imgs/ShowScore.png"
import Backstage from "../imgs/Backstage.png"
import {TwitterTimelineEmbed} from 'react-twitter-embed';

function Profile(props){
  const profile = useContext(ProfileContext);

   useEffect(() => {

      let usersPoints = profile.ProfileAttributes.points;
      console.log('usersPoints:', usersPoints)
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


    let isALegend = profile.ProfileAttributes.isLegend;
    if (isALegend) {
      return (
        <>
          <AppNav />
          <Row>
            <Col md={1}></Col>
            <Col md={6}>
          <LegendInfoCard 
            name = {profile.ProfileAttributes.name}
            image = {profile.ProfileAttributes.image}
            topShow = {profile.ProfileAttributes.topShow}
            level = {profile.ProfileAttributes.level}
            alias = {profile.ProfileAttributes.hiddenPersona}
            points = {profile.ProfileAttributes.points}
          />
          </Col>
          <Col md={4}>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Card style={{width:"100%", height:"500px", margin: "auto", marginTop:"10px", marginBottom:"20px"}}>
                                    <Card.Body>
                                    <TwitterTimelineEmbed
                                      sourceType="profile"
                                      screenName="broadwaycom"
                                      options={{height: 450}}
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
        </>
      );
    } else {
      return (
        <>
          <AppNav />
          <Row>
            <Col md={1}></Col>
            <Col md={6}>
          <UserInfoCard 
            name = {profile.ProfileAttributes.name}
            image = {profile.ProfileAttributes.image}
            topShow = {profile.ProfileAttributes.topShow}
            level = {profile.ProfileAttributes.level}
            alias = {profile.ProfileAttributes.hiddenPersona}
            points = {profile.ProfileAttributes.points}
            maxPoints = {profile.ProfileAttributes.maxPoints}
          />
          </Col>
          <Col md={4}>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Card style={{width:"100%", height:"500px", margin: "auto", marginTop:"10px", marginBottom:"20px"}}>
                                    <Card.Body>
                                    <TwitterTimelineEmbed
                                      sourceType="profile"
                                      screenName="broadwaycom"
                                      options={{height: 450}}
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
          
          {/* <button onClick={}>Click to see user data</button> */}
        </>
      );
    }
}
  
  export default Profile;