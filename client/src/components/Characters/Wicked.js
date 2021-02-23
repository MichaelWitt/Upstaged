import React from "react"
import { Button, Card, Row, Col } from "react-bootstrap"
import Fiyero from "../../imgs/CharImgs/Fiyero.jpg"
import Elphaba from "../../imgs/CharImgs/Elphaba.jpg"
import Glinda from "../../imgs/CharImgs/Glinda.jpg"
import { useHistory } from 'react-router-dom'

const styles = {
  headline: {
    textAlign: "center",
    maxWidth:"15%",
    boxShadow:"0 0 20px 1px #555",
    margin:"auto",
    marginBottom:"10px",
    padding: "5px",
    backgroundColor:"WhiteSmoke",
    border:"3px solid black",
    borderRadius:"5px"
  },
};

const WickedChars = () => {

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
        <h3 style={styles.headline}> Wicked </h3>
        <br></br>
        <Row className="mb-5">
        <Col />
          <Col md ={3}>
            <Card border="dark">
              <Card.Img variant="top" src={Elphaba}/>
              <Card.Body>
                <Button 
                  value="Elphaba" 
                  variant="success" 
                  className="mt-0" 
                  onClick={(e) => welcomeChar(e)}
                > 
                  Elphaba 
                </Button>
                <p className="mb-0" >Misunderstood & intelligent, with internal goodness </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Glinda}/>
            <Card.Body>
              <Button 
                value="Glinda" 
                variant="info" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Glinda 
              </Button>
              <p className="mb-0" >Popular, loveable and as cunning as she is bubbly</p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Fiyero}/>
            <Card.Body>
              <Button 
                value="Fiyero" 
                variant="danger" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Fiyero 
              </Button>
              <p className="mb-0" >Fun, social, glamorous and at times naive and arrogant</p>
            </Card.Body>
          </Card>
          </Col>
        <Col/>
        </Row >
        <br></br>
      </div>
    );
}

export default WickedChars;
