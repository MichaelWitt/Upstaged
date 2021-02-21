import React from "react"
import { Button, Card, Row, Col } from "react-bootstrap"
import Jaimie from "../../imgs/CharImgs/Jaimie.jpg"
import Cathy from "../../imgs/CharImgs/Kathy.jpg"
import { useHistory } from 'react-router-dom'

const LastFiveChars = () => {

  const history = useHistory()

  const welcomeChar = (e) => {
    alert("Hi " + e.target.value + ". It's nice to meet your alter ego!")
    // history.push('/Home')
  }
    
    return (
      <div>
        <br></br>
        <h3 style={{fontWeight:"bold", textDecoration:"underline"}}> The Last Five Years Characters</h3>
        <br></br>
        <Row className="mb-5">
        <Col />
          <Col md ={3}>
            <Card border="dark">
              <Card.Img variant="top" src={Cathy}/>
              <Card.Body>
                <Button 
                  value="Cathy" 
                  variant="warning" 
                  className="mt-0" 
                  onClick={(e) => welcomeChar(e)}
                > 
                  Cathy 
                </Button>
                <p className="mb-0" >Actress struggling to make a make a name for herself</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Jaimie}/>
            <Card.Body>
              <Button 
                value="Jaimie" 
                variant="success" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Jaimie 
              </Button>
              <p className="mb-0" >Budding novelist on the brink of wild success</p>
            </Card.Body>
          </Card>
          </Col>
        <Col/>
        </Row >
        <br></br>
      </div>
    );
}

export default LastFiveChars;
