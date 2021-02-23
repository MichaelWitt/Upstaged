import React from "react"
import { Button, Card, Row, Col } from "react-bootstrap"
import Phantom from "../../imgs/CharImgs/Phantom.jpg"
import Christine from "../../imgs/CharImgs/Christine.jpg"
import Raul from "../../imgs/CharImgs/Raul.jpg"
import { useHistory } from 'react-router-dom'
import API from '../../utils/API'

const styles = {
  headline: {
    textAlign: "center",
    maxWidth:"30%",
    boxShadow:"0 0 20px 1px #555",
    margin:"auto",
    marginBottom:"10px",
    padding: "5px",
    backgroundColor:"WhiteSmoke",
    border:"3px solid black",
    borderRadius:"5px"
  },
};

const PhantomChars = () => {

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
        <h3 style={styles.headline}> Phantom of the Opera</h3>
        <br></br>
        <Row className="mb-5">
        <Col />
          <Col md ={3}>
            <Card border="dark">
              <Card.Img variant="top" src={Phantom}/>
              <Card.Body>
                <Button 
                  value="Phantom" 
                  variant="dark" 
                  className="mt-0" 
                  onClick={(e) => welcomeChar(e)}
                > 
                  Phantom 
                </Button>
                <p className="mb-0" >A tragic, violent, and mysterious musician.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Christine}/>
            <Card.Body>
              <Button 
                value="Christine" 
                variant="warning" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Christine 
              </Button>
              <p className="mb-0" >An extremely talented, selfless and compassionate woman</p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Raul}/>
            <Card.Body>
              <Button 
                value="Raul" 
                variant="danger" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Raul 
              </Button>
              <p className="mb-0" >A nobleman who's surprisingly innocent and passionate </p>
            </Card.Body>
          </Card>
          </Col>
        <Col/>
        </Row >
        <br></br>
      </div>
    );
}

export default PhantomChars;
