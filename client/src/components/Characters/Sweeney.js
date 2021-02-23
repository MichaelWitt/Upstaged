import React from "react"
import { Button, Card, Row, Col } from "react-bootstrap"
import Sweeney from "../../imgs/CharImgs/Sweeney.jpg"
import Toby from "../../imgs/CharImgs/Toby.jpg"
import Lovett from "../../imgs/CharImgs/Lovett.jpg"
import { useHistory } from 'react-router-dom'

const styles = {
  headline: {
    textAlign: "center",
    maxWidth:"23%",
    boxShadow:"0 0 20px 1px #555",
    margin:"auto",
    marginBottom:"10px",
    padding: "5px",
    backgroundColor:"WhiteSmoke",
    border:"3px solid black",
    borderRadius:"5px"
  },
};

const SweeneyChars = () => {

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
        <h3 style={styles.headline}> Sweeney Todd </h3>
        <br></br>
        <Row className="mb-5">
        <Col />
          <Col md ={3}>
            <Card border="dark">
              <Card.Img variant="top" src={Sweeney}/>
              <Card.Body>
                <Button 
                  value="Sweeney" 
                  variant="secondary" 
                  className="mt-0" 
                  onClick={(e) => welcomeChar(e)}
                > 
                  Sweeney 
                </Button>
                <p className="mb-0" > Charming but hot-tempered, ferocious yet vulnerable</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Lovett}/>
            <Card.Body>
              <Button 
                value="Mrs. Lovett" 
                variant="dark" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Mrs. Lovett 
              </Button>
              <p className="mb-0" >A meat pie shop owner who will do whatever it takes to survive</p>
            </Card.Body>
          </Card>
          </Col>
          <Col md ={3}>
          <Card border="dark">
            <Card.Img variant="top" src={Toby}/>
            <Card.Body>
              <Button 
                value="Toby" 
                variant="info" 
                className="mt-0" 
                onClick={(e) => welcomeChar(e)}
              > 
                Toby 
              </Button>
              <p className="mb-0" >Observant and clever with a good sense of humor</p>
            </Card.Body>
          </Card>
          </Col>
        <Col/>
        </Row >
        <br></br>
      </div>
    );
}

export default SweeneyChars;
