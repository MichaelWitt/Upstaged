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
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">
        {" "}
        <img src={Logo} width="60" height="60" alt="UPSTAGED Logo" />{" "}
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/News">Theatre News</Nav.Link>
        <Nav.Link href="/Games">Games</Nav.Link>
      </Nav>
      <Nav.Link href="/Profile" bg="outline-warning">
        <img src={LesMis} width="50" height="50" alt="profile avatar" /> Profile
      </Nav.Link>
      <Button 
        variant="warning" 
        style={{backgroundColor:"#f7e200"}}
        // onClick={handleLogout()}
      >
        Logout
      </Button>


      {/* <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-warning">Search</Button>
    </Form> */}
    </Navbar>
  );
}

export default AppNav;
