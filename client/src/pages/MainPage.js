import React from "react";
import FooterNav from "../components/Footer";
import AppNav from "../components/Navbar"
import Content from "../components/ContentArea"

function MainPage() {
        return(
            <div>
                <AppNav/>
                <Content/>
                <FooterNav/> 
            </div>
        );
};


export default MainPage;