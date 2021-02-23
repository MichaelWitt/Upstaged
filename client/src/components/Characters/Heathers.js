import React from "react"
import { Button, Card, Row, Col } from "react-bootstrap"
import Veronica from "../../imgs/CharImgs/Veronica.jpg"
import Heathers from "../../imgs/CharImgs/Heathers.jpg"
import JD from "../../imgs/CharImgs/JD.jpg"
import { useHistory } from 'react-router-dom'

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

const HeathersChars = () => {

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
    history.push('/Home')
  }
    
    return (
      <div>
        <br></br>
        <h3 style={styles.headline}> Heathers</h3>
        <br></br>
        <Row className="mb-5">
        <Col />
          <Col md ={3}>
            <Card border="dark">
              <Card.Img variant="top" src={Veronica}/>
              <Card.Body>
                <Button 
                  value="Veronica" 
                  variant="primary" 
                  className="mt-0" 
                  onClick={(e) => welcomeChar(e)}
                > 
                  Veronica 
                </Button>
                <p className="mb-0" >Struggles to be kind & cool, and has great ironic humor</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={JD}/>
            <Card.Body>
              <Button 
                value="JD" 
                variant="dark" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                JD 
              </Button>
              <p className="mb-0" >Dark, witty, charming on the outside, damaged on the inside </p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Heathers}/>
            <Card.Body>
              <Button 
                value="Heather" 
                variant="danger" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                A Heather
              </Button>
              <p className="mb-0" >Hot, cruel, and wields power without remorse</p>
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
