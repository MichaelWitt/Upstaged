import React from "react"
import { Button, Card, Row, Col } from "react-bootstrap"
import Eliza from "../../imgs/CharImgs/Eliza.jpg"
import Burr from "../../imgs/CharImgs/Burr.jpg"
import Hamilton from "../../imgs/CharImgs/Hamilton.jpg"
import Angelica from "../../imgs/CharImgs/Angelica.jpg"
import { useHistory } from 'react-router-dom'

const HamiltonChars = () => {

  const history = useHistory()

  const welcomeChar = (e) => {
    alert("Hi " + e.target.value + ". It's nice to meet your alter ego!")
    // history.push('/Home')
  }
    
    return (
      <div>
        <br></br>
        <h3 style={{fontWeight:"bold", textDecoration:"underline"}}> Hamilton Characters</h3>
        <br></br>
        <Row className="mb-5 mr-3 ml-3">
        <Col lg={12}/>
          <Col md ={3}>
            <Card border="dark">
              <Card.Img variant="top" src={Angelica}/>
              <Card.Body>
                <Button 
                  value="Angelica" 
                  variant="warning" 
                  className="mt-0" 
                  onClick={(e) => welcomeChar(e)}
                > 
                  Angelica 
                </Button>
                <p className="mb-0" >A dazzling, brilliant woman who can read people easily </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Eliza}/>
            <Card.Body>
              <Button 
                value="Eliza" 
                variant="success" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Eliza 
              </Button>
              <p className="mb-0" >A sensitive, loving and incredibly loyal woman</p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Burr}/>
            <Card.Body>
              <Button 
                value="Burr" 
                variant="success" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Burr 
              </Button>
              <p className="mb-0" >A cool, secretive and steely orphan raised in wealth </p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Hamilton}/>
            <Card.Body>
              <Button 
                value="Hamilton" 
                variant="success" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Hamilton 
              </Button>
              <p className="mb-0" >An earnest, ambitious guy who always speaks his mind.</p>
            </Card.Body>
          </Card>
          </Col>
        <Col/>
        </Row >
        <br></br>
      </div>
    );
}

export default HamiltonChars;
