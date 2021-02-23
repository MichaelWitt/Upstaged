import React from "react"
import { Button, Card, Row, Col } from "react-bootstrap"
import Eliza from "../../imgs/CharImgs/Eliza.jpg"
import Burr from "../../imgs/CharImgs/Burr.jpg"
import Hamilton from "../../imgs/CharImgs/Hamilton.jpg"
import Angelica from "../../imgs/CharImgs/Angelica.jpg"
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

const HamiltonChars = () => {

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
        <h3 style={styles.headline}> Hamilton</h3>
        <br></br>
        <Row className="mb-5 mr-3 ml-3">
        <Col lg={12}/>
          <Col md ={3}>
            <Card border="dark">
              <Card.Img variant="top" src={Angelica}/>
              <Card.Body>
                <Button 
                  value="Angelica" 
                  variant="danger" 
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
                variant="warning" 
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
                variant="secondary" 
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
                variant="dark" 
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
