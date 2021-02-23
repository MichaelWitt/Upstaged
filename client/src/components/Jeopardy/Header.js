
import React from 'react';
import { Jumbotron } from "react-bootstrap";
import { Container } from "react-bootstrap";
import jeopardybackground from "../../imgs/Jeopardybackground.jpg";

//<Jumbotron.Img variant="top" src={jeopardybackground} width="150" height="370" />

function Header() {
    return (
        <div>
            
            <Jumbotron style={{color:'whitesmoke', backgroundImage: `url(${jeopardybackground})` }}>

            <Container >
            <h1>Jeopardy!</h1>
            </Container>
            </Jumbotron>
        </div>
    )
}

export default Header