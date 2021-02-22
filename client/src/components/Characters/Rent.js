import React from "react"
import { Button, Card, Row, Col } from "react-bootstrap"
import Angel from "../../imgs/CharImgs/Angel.jpg"
import Tom from "../../imgs/CharImgs/Tom.jpg"
import Mark from "../../imgs/CharImgs/Mark.jpg"
import Roger from "../../imgs/CharImgs/Roger.jpg"
import Mimi from "../../imgs/CharImgs/Mimi.jpg"
import Maureen from "../../imgs/CharImgs/Maureen.jpg"
import Joanne from "../../imgs/CharImgs/Joanne.jpg"
import { useHistory } from 'react-router-dom'

const styles = {
  headline: {
    textAlign: "center",
    maxWidth:"10%",
    boxShadow:"0 0 20px 1px #555",
    margin:"auto",
    marginBottom:"10px",
    padding: "5px",
    backgroundColor:"WhiteSmoke",
    border:"3px solid black",
    borderRadius:"5px"
  },
};

const RentChars = () => {

  const history = useHistory()

  const welcomeChar = (e) => {
    alert("Hi " + e.target.value + ". It's nice to meet your alter ego!")
    // history.push('/Home')
  }
    
    return (
      <div>
        <br></br>
        <h3 style={styles.headline}> Rent</h3>
        <br></br>
        <Row className="mb-5 mr-3 ml-3">
        <Col lg={12}/>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Angel}/>
            <Card.Body>
              <Button 
                value="Angel" 
                variant="danger" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Angel 
              </Button>
              <p className="mb-0" > A selfless drag queen who's the group pecemaker</p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Tom}/>
            <Card.Body>
              <Button 
                value="Tom" 
                variant="warning" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Tom 
              </Button>
              <p className="mb-0" >A computer genius, teacher, and anarchist</p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Mark}/>
            <Card.Body>
              <Button 
                value="Mark" 
                variant="dark" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Mark 
              </Button>
              <p className="mb-0" >A nerdy and quirky filmmaker who avoids actually living</p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Roger}/>
            <Card.Body>
              <Button 
                value="Roger" 
                variant="danger" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Roger 
              </Button>
              <p className="mb-0" >Depressed musician trying to write one last great song</p>
            </Card.Body>
          </Card>
          </Col>
        <Col/>
        </Row >

        <Row className="mb-5 mr-3 ml-3">
        <Col />
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Mimi}/>
            <Card.Body>
              <Button 
                value="Mimi" 
                variant="primary" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Mimi 
              </Button>
              <p className="mb-0" >Optimistic & likeable but struggling with addiction</p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Maureen}/>
            <Card.Body>
              <Button 
                value="Maureen" 
                variant="warning" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Maureen 
              </Button>
              <p className="mb-0" >Flirtatious, sassy and always fights for her beliefs</p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Joanne}/>
            <Card.Body>
              <Button 
                value="Joanne" 
                variant="secondary" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Joanne 
              </Button>
              <p className="mb-0" >Headtrong lawyer and activist who figths for the underdog</p>
            </Card.Body>
          </Card>
          </Col>
        <Col/>
        </Row >
        <br></br>
      </div>
    );
}

export default RentChars;
