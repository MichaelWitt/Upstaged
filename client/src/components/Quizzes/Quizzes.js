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

const Quizzes = () => {
    return (
      <div>
        <h1>Pick a Quiz!</h1>
        <hr></hr>
        <Row>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={hamiltonPlaybill} width="150" height="370" />
            <Card.Body>
              <Card.Title>Test your Hamilton knowledge!</Card.Title>
              <Button variant="warning" href={"/Hamilton"}> Go To Quiz </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={wickedPlaybill} width="150" height="370" />
            <Card.Body>
              <Card.Title>Test your Wicked knowledge!</Card.Title>
              <Button variant="success" href={"/Wicked"}> Go To Quiz </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={dreamgirlsPlaybill} width="150" height="370" />
            <Card.Body>
              <Card.Title>Test your Dreamgirls knowledge!</Card.Title>
              <Button variant="danger" href={"/Dreamgirls"}> Go To Quiz </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={rentPlaybill} width="150" height="370" />
            <Card.Body>
              <Card.Title>Test your Rent knowledge!</Card.Title>
              <Button variant="warning" href={"/Rent"}> Go To Quiz </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={heathersPlaybill} width="150" height="370" />
            <Card.Body>
              <Card.Title>Test your Heathers knowledge!</Card.Title>
              <Button variant="danger" href={"/Heathers"}> Go To Quiz </Button>
            </Card.Body>
          </Card>
        </Row>
        
        <Row>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={lesmisPlaybill} width="150" height="370" />
              <Card.Body>
                <Card.Title>Test your Les Mis knowledge!</Card.Title>
                <Button variant="secondary" href={"/LesMis"}> Go To Quiz </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={dearevanPlaybill} width="150" height="370" />
              <Card.Body>
                <Card.Title>Test your Dear Evan Hansen knowledge!</Card.Title>
                <Button variant="primary" href={"/DearEvanHansen"}> Go To Quiz </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={sweeneyPlaybill} width="150" height="370" />
              <Card.Body>
                <Card.Title>Test your Sweeney Todd knowledge!</Card.Title>
                <Button variant="dark" href={"/SweeneyTodd"}> Go To Quiz </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={hadestownPlaybill} width="150" height="370" />
              <Card.Body>
                <Card.Title>Test your Hadestown knowledge!</Card.Title>
                <Button variant="warning" href={"/Hadestown"}> Go To Quiz </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={phantomPlaybill} width="150" height="370" />
              <Card.Body>
                <Card.Title>Test your Phantom of the Opera knowledge!</Card.Title>
                <Button variant="dark" href={"/Phantom"}> Go To Quiz </Button>
              </Card.Body>
            </Card>
        </Row>
        
      </div>
    );
}

export default Quizzes;
