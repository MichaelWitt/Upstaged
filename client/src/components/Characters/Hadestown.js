import React from "react"
import { Button, Card, Row, Col } from "react-bootstrap"
import Persephone from "../../imgs/CharImgs/Persephone.jpg"
import Hades from "../../imgs/CharImgs/Hades.jpg"
import Orpheus from "../../imgs/CharImgs/Orpheus.jpg"
import Eurydice from "../../imgs/CharImgs/Eurydice.jpg"
import { useHistory } from 'react-router-dom'
import API from '../../utils/API'

const styles = {
  headline: {
    textAlign: "center",
    maxWidth:"20%",
    boxShadow:"0 0 20px 1px #555",
    margin:"auto",
    marginBottom:"10px",
    padding: "5px",
    backgroundColor:"WhiteSmoke",
    border:"3px solid black",
    borderRadius:"5px"
  },
};

const HadestownChars = () => {

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
        <h3 style={styles.headline}> Hadestown</h3>
        <br></br>
        <Row className="mb-5 mr-3 ml-3">
        <Col lg={12}/>
          <Col md ={3}>
            <Card border="dark">
              <Card.Img variant="top" src={Eurydice}/>
              <Card.Body>
                <Button 
                  value="Eurydice" 
                  variant="warning" 
                  className="mt-0" 
                  onClick={(e) => welcomeChar(e)}
                > 
                  Eurydice 
                </Button>
                <p className="mb-0" >A practical, independent and resilient young woman</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Orpheus}/>
            <Card.Body>
              <Button 
                value="Orpheus" 
                variant="danger" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Orpheus 
              </Button>
              <p className="mb-0" >A talented, optimistic and passionate musician</p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Persephone}/>
            <Card.Body>
              <Button 
                value="Persephone" 
                variant="success" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Persephone 
              </Button>
              <p className="mb-0" >Playful & lively Goddess who lets her sharp edges show.</p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Hades}/>
            <Card.Body>
              <Button 
                value="Hades" 
                variant="secondary" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Hades 
              </Button>
              <p className="mb-0" >Powerful & immortal Lord of the Dead</p>
            </Card.Body>
          </Card>
          </Col>
        <Col/>
        </Row >
        <br></br>
      </div>
    );
}

export default HadestownChars;
