import React from "react"
import { Button, Card, Row, Col } from "react-bootstrap"
import Effie from "../../imgs/CharImgs/Effie.jpg"
import Lorelle from "../../imgs/CharImgs/Lorelle.jpg"
import Deena from "../../imgs/CharImgs/Dina.jpg"
import { useHistory } from 'react-router-dom'

const DreamgirlsChars = () => {

  const history = useHistory()

  const welcomeChar = (e) => {
    alert("Hi " + e.target.value + ". It's nice to meet your alter ego!")
    // history.push('/Home')
  }
    
    return (
      <div>
        <br></br>
        <h3 style={{fontWeight:"bold", textDecoration:"underline"}}> Dreamgirls Characters</h3>
        <br></br>
        <Row className="mb-5">
        <Col />
          <Col md ={3}>
            <Card border="dark">
              <Card.Img variant="top" src={Effie}/>
              <Card.Body>
                <Button 
                  value="Effie" 
                  variant="warning" 
                  className="mt-0" 
                  onClick={(e) => welcomeChar(e)}
                > 
                  Effie 
                </Button>
                <p className="mb-0" >Confident & emotional lead singer of the Dreamettes</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Lorelle}/>
            <Card.Body>
              <Button 
                value="Lorelle" 
                variant="success" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Lorelle 
              </Button>
              <p className="mb-0" >Young & energetic backup signer of the Dreamettes</p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Deena}/>
            <Card.Body>
              <Button 
                value="Deena" 
                variant="success" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Deena 
              </Button>
              <p className="mb-0" >Lovable backup - then lead - singer of the Dreamettes.</p>
            </Card.Body>
          </Card>
          </Col>
        <Col/>
        </Row >
        <br></br>
      </div>
    );
}

export default DreamgirlsChars;
