import React from "react"
import { Button } from "react-bootstrap"
import './QuizPage.css';
import hamiltonPlaybill from "../../imgs/playbills/hamilton.png";
import wickedPlaybill from "../../imgs/playbills/wicked.png";
import dreamgirlsPlaybill from "../../imgs/playbills/dreamgirls.png";
import rentPlaybill from "../../imgs/playbills/rent.png";
import heathersPlaybill from "../../imgs/playbills/heathers.png";
import lesmisPlaybill from "../../imgs/playbills/lesmis.png";
import dearevanPlaybill from "../../imgs/playbills/dearevan.png";
import hadestownPlaybill from "../../imgs/playbills/hadestown.png";
import phantomPlaybill from "../../imgs/playbills/phantom.png";
import sweeneyPlaybill from "../../imgs/playbills/sweeney.png";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import AppNav from "../Navbar";
import Col from "react-bootstrap/Col"


const Quizzes = () => {
    return (
      <div>
        <AppNav />
        <br></br>
        <h1>Test Your Broadway Knowledge!</h1>
        <br></br>
        <Row>
        <Col sm ={1}/>
          <Col sm ={2}>
            <Card >
              <Card.Img variant="top" src={hamiltonPlaybill}/>
              <Card.Body>
                <Button variant="warning" href={"/Hamilton"}> Go To Quiz </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm ={2}>
          <Card >
            <Card.Img variant="top" src={wickedPlaybill}/>
            <Card.Body>
              <Button variant="success" href={"/Wicked"}> Go To Quiz </Button>
            </Card.Body>
          </Card>
          </Col>
          <Col sm ={2}>
          <Card >
            <Card.Img variant="top" src={dreamgirlsPlaybill}/>
            <Card.Body>
              <Button variant="danger" href={"/Dreamgirls"}> Go To Quiz </Button>
            </Card.Body>
          </Card>
          </Col>
          <Col sm ={2}>
          <Card >
            <Card.Img variant="top" src={rentPlaybill}/>
            <Card.Body>
              <Button variant="warning" href={"/Rent"}> Go To Quiz </Button>
            </Card.Body>
          </Card>
          </Col>
          <Col sm={2}>
          <Card >
            <Card.Img variant="top" src={heathersPlaybill}/>
            <Card.Body>
              <Button variant="danger" href={"/Heathers"}> Go To Quiz </Button>
            </Card.Body>
          </Card>
          </Col>
          <Col sm ={1}/>

        </Row>
        
        <Row style={{marginTop:"20px"}}>
        <Col sm ={1}/>
        <Col sm ={2}>
          <Card>
              <Card.Img variant="top" src={lesmisPlaybill}/>
              <Card.Body>
                <Button variant="secondary" href={"/LesMis"}> Go To Quiz </Button>
              </Card.Body>
            </Card>
            </Col>
            <Col sm ={2}>
            <Card>
              <Card.Img variant="top" src={dearevanPlaybill}/>
              <Card.Body>
                <Button variant="primary" href={"/DearEvanHansen"}> Go To Quiz </Button>
              </Card.Body>
            </Card>
            </Col>
            <Col sm ={2}>
            <Card>
              <Card.Img variant="top" src={sweeneyPlaybill}/>
              <Card.Body>
                <Button variant="dark" href={"/SweeneyTodd"}> Go To Quiz </Button>
              </Card.Body>
            </Card>
            </Col>
            <Col sm ={2}>
            <Card>
              <Card.Img variant="top" src={hadestownPlaybill}/>
              <Card.Body>
                <Button variant="warning" href={"/Hadestown"}> Go To Quiz </Button>
              </Card.Body>
            </Card>
            </Col>
            <Col sm ={2}>
            <Card>
              <Card.Img variant="top" src={phantomPlaybill}/>
              <Card.Body>
                <Button variant="dark" href={"/Phantom"}> Go To Quiz </Button>
              </Card.Body>
            </Card>
            </Col>
            <Col sm ={1}/>
        </Row>
        <br></br>
      </div>
    );
}

export default Quizzes;
