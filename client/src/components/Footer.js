import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import footerLogo from '../imgs/footerLogo.png'






function FooterNav() {
return(
    <Navbar fixed="bottom"  style={{backgroundColor:"white"}}><p style={{margin:"auto"}}><img src={footerLogo} height="25" alt= 'Upstaged Logo'/>Developed For UNC Coding Bootcamp Final Project</p></Navbar>
)
};

export default FooterNav;