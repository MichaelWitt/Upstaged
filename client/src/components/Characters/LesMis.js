import React from "react"
import { Button, Card, Row, Col } from "react-bootstrap"
import Cosette from "../../imgs/CharImgs/Cosette.jpg"
import Eponine from "../../imgs/CharImgs/Eponine.jpg"
import Fantine from "../../imgs/CharImgs/Fantine.jpg"
import Javert from "../../imgs/CharImgs/Javert.jpg"
import Marius from "../../imgs/CharImgs/Marius.jpg"
import Valjean from "../../imgs/CharImgs/Valjean.jpg"
import { useHistory } from 'react-router-dom'
import API from '../../utils/API'

const styles = {
  headline: {
    textAlign: "center",
    maxWidth:"25%",
    boxShadow:"0 0 20px 1px #555",
    margin:"auto",
    marginBottom:"10px",
    padding: "5px",
    backgroundColor:"WhiteSmoke",
    border:"3px solid black",
    borderRadius:"5px"
  },
};

const LesMisChars = () => {

  const history = useHistory()

  const welcomeChar = (e) => {
    alert("Hi " + e.target.value + ". It's nice to meet your alter ego! Have fun!!");
    let alias = e.target.value;
    let storedEmail = localStorage.getItem('signupEmail');
    let parsedEmail = JSON.parse(storedEmail);
    API.setAlias({ parsedEmail, alias }).then(res => {
      console.log('res! ', res)
      if (res.status === 200) {
        history.push('/Characters')
      }
    }).catch(err => { 
      console.log('err', err)
    })
    history.push('/login')
  }
    
    return (
      <div>
        <br></br>
        <h3 style={styles.headline}> Les Miserables</h3>
        <br></br>
        <Row className="mb-5 mr-3 ml-3">
        <Col />
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Fantine}/>
            <Card.Body>
              <Button 
                value="Fantine" 
                variant="primary" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Fantine 
              </Button>
              <p className="mb-0" > Defeated by life but sustained by her love for her daughter</p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Eponine}/>
            <Card.Body>
              <Button 
                value="Eponine" 
                variant="success" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Eponine 
              </Button>
              <p className="mb-0" >Streetwise & tough while also being sensitive and lonely.</p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Valjean}/>
            <Card.Body>
              <Button 
                value="Valjean" 
                variant="dark" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Valjean 
              </Button>
              <p className="mb-0" >Mature & paternal with great humanity and compassion</p>
            </Card.Body>
          </Card>
          </Col>
        <Col/>
        </Row >

        <Row className="mb-5 mr-3 ml-3">
        <Col />
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Javert}/>
            <Card.Body>
              <Button 
                value="Javert" 
                variant="danger" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Javert 
              </Button>
              <p className="mb-0" >Dedicated cop, who believes people don't change</p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Marius}/>
            <Card.Body>
              <Button 
                value="Marius" 
                variant="warning" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Marius 
              </Button>
              <p className="mb-0" >Passionate, impulsive, sweet & capable of great courage</p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Cosette}/>
            <Card.Body>
              <Button 
                value="Cosette" 
                variant="secondary" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Cosette 
              </Button>
              <p className="mb-0" >Strong willed, inquiring, loving and personable girl.</p>
            </Card.Body>
          </Card>
          </Col>
        <Col/>
        </Row >
        <br></br>
      </div>
    );
}

export default LesMisChars;
