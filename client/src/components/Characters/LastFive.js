import React from "react"
import { Button, Card, Row, Col } from "react-bootstrap"
// import Jaimie from "../../imgs/CharImgs/Jaimie.jpg"
// import Kathy from "../../imgs/CharImgs/Kathy.jpg"

const LastFiveChars = () => {
    return (
      <div>
        <br></br>
        <h3 style={{fontWeight:"bold"}}> The Last Five Years Characters</h3>
        <br></br>
        <Row className="mb-5">
        <Col />
          <Col md ={4}>
            <Card >
              {/* <Card.Img variant="top" src={Kathy}/> */}
              <Card.Body>
                <Button 
                  value="Kathy" 
                  variant="warning" 
                  className="mt-0" 
                  onClick={e => alert("Nice to meet your alter ego, " + e.target.value + ". Explore the app!")}
                > 
                  Kathy 
                </Button>
                <p>Kathy Character Desc.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md ={4}>
          <Card >
            {/* <Card.Img variant="top" src={Jaimie}/> */}
            <Card.Body>
              <Button 
                value="Jaimie" 
                variant="success" 
                className="mt-0" 
                onClick={e => console.log(e.target.value)}
              > 
                Jaimie 
              </Button>
              <p>Jaimie Char Desc.</p>
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
