import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
// import {FormControl} from 'react-bootstrap';

import Logo from "../imgs/logo.png"
import LesMis from "../imgs/LesMis.png"




function AppNav() {
return(
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="/MainPage"> <img src= {Logo} width= "60" height= "60" alt="UPSTAGED Logo"/> </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/MainPage">Home</Nav.Link>
      <Nav.Link href="#news">Theatre News</Nav.Link>
      <Nav.Link href="/Quizzes">Games</Nav.Link>
    </Nav>
    <Nav.Link href="/Profile" bg= "outline-warning"><img src={LesMis} width= "50" height= "50" alt= "profile avatar"/> Profile</Nav.Link>
    <Nav.Link href="#" bg= "warning">Logout</Nav.Link>
    {/* <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-warning">Search</Button>
    </Form> */}
  </Navbar>
)
};

export default AppNav;