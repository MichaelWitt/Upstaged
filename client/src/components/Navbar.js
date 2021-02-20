import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import Nav from "react-bootstrap/Nav";
// import Form from 'react-bootstrap/Form'
// import {FormControl} from 'react-bootstrap';

import Logo from "../imgs/logo.png";
import LesMis from "../imgs/LesMis.png";

import "../pages/Login"

function AppNav() {
  return (
    <Navbar bg="light" variant="light" style={{height:"75px"}}>
      <Navbar.Brand href="/">
        {" "}
        <img src={Logo} width="60" height="60" alt="UPSTAGED Logo" />{" "}
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/News">News</Nav.Link>
        <Nav.Link href="/Games">Games</Nav.Link>
        <Nav.Link href="/Quizzes">Quizzes</Nav.Link>
      </Nav>
      <Nav.Link href="/Profile" bg="outline-warning">
        <img src={LesMis} width="50" height="50" alt="profile avatar" /> Profile
      </Nav.Link>
      <Button 
        variant="warning" 
        style={{backgroundColor:"#f7e200"}}
        onClick={() => {window.location.href="/"; localStorage.clear()}}
      >
        Logout
      </Button>
    </Navbar>
  );
}

export default AppNav;
