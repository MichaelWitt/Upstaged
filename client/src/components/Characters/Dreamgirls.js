import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import Effie from "../../imgs/CharImgs/Effie.jpg";
import Lorelle from "../../imgs/CharImgs/Lorelle.jpg";
import Deena from "../../imgs/CharImgs/Deena.jpg";
import { useHistory } from 'react-router-dom';
import API from '../../utils/API'

const styles = {
  headline: {
    textAlign: "center",
    maxWidth:"20%",
    boxShadow:"0 0 20px 1px #555",
    margin:"auto",
    marginTop:"20px",
    marginBottom:"10px",
    padding: "5px",
    backgroundColor:"WhiteSmoke",
    border:"3px solid black",
    borderRadius:"5px"
  },
};

const DreamgirlsChars = () => {

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
    history.push('/login');
  }
    
    return (
      <div>
        <br></br>
        <h3 style={styles.headline}> Dreamgirls</h3>
        <br></br>
        <Row className="mb-5">
        <Col />
          <Col md ={3}>
            <Card border="dark">
              <Card.Img variant="top" src={Effie}/>
              <Card.Body>
                <Button 
                  value="Effie" 
                  variant="success" 
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
                variant="danger" 
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
                variant="secondary" 
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
