import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import footerLogo from '../imgs/footerLogo.png'






function FooterNav() {
return(
    <Navbar sticky="bottom" ><img src={footerLogo} height="25"/>Developed For UNC Coding Bootcamp Final Project</Navbar>
)
};

export default FooterNav;