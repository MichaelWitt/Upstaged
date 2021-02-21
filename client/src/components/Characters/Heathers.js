import React from "react"
import { Button, Card, Row, Col } from "react-bootstrap"
import Veronica from "../../imgs/CharImgs/Veronica.jpg"
import Heathers from "../../imgs/CharImgs/Heathers.jpg"
import JD from "../../imgs/CharImgs/JD.jpg"
import { useHistory } from 'react-router-dom'

const HeathersChars = () => {

  const history = useHistory()

  const welcomeChar = (e) => {
    alert("Hi " + e.target.value + ". It's nice to meet your alter ego!")
    // history.push('/Home')
  }
    
    return (
      <div>
        <br></br>
        <h3 style={{fontWeight:"bold", textDecoration:"underline"}}> Heathers Characters</h3>
        <br></br>
        <Row className="mb-5">
        <Col />
          <Col md ={3}>
            <Card border="dark">
              <Card.Img variant="top" src={Veronica}/>
              <Card.Body>
                <Button 
                  value="Veronica" 
                  variant="warning" 
                  className="mt-0" 
                  onClick={(e) => welcomeChar(e)}
                > 
                  Veronica 
                </Button>
                <p className="mb-0" >Confident & emotional lead singer of the Dreamettes</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={JD}/>
            <Card.Body>
              <Button 
                value="JD" 
                variant="success" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                JD 
              </Button>
              <p className="mb-0" >Young & energetic backup signer of the Dreamettes</p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Heathers}/>
            <Card.Body>
              <Button 
                value="Heathers" 
                variant="success" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Heathers 
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

export default HeathersChars;
