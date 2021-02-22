import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../imgs/logo.png";
import LesMis from "../imgs/LesMis.png";

function SignLogNav() {
  return (
    <Navbar bg="light" variant="light" style={{height:"75px"}}>
      <Navbar.Brand href="/">
        {" "}
        <img src={Logo} width="60" height="60" alt="UPSTAGED Logo" />{" "}
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/login">Log In</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
      </Nav>
        <img src={LesMis} width="50" height="50" alt="profile avatar" />
    </Navbar>
  );
}

export default SignLogNav;
