import React, { useContext, useEffect, useState } from "react";
import LegendInfoCard from "./LegendInfoCard";
import UserInfoCard from "./UserInfoCard";
import { ProfileContext } from "../utils/GlobalState";
import AppNav from "../components/Navbar";
// import Effie from "../imgs/CharImgs/Effie.jpg";
// import Lorelle from "../imgs/CharImgs/Lorelle.jpg";
// import Deena from "../imgs/CharImgs/Dina.jpg";
// import Persephone from "../imgs/CharImgs/Persephone.jpg"
// import Hades from "../imgs/CharImgs/Hades.jpg"
// import Orpheus from "../imgs/CharImgs/Orpheus.jpg"
// import Eurydice from "../imgs/CharImgs/Eurydice.jpg"
// import Eliza from "../imgs/CharImgs/Eliza.jpg"
// import Burr from "../imgs/CharImgs/Burr.jpg"
// import Hamilton from "../imgs/CharImgs/Hamilton.jpg"
// import Angelica from "../imgs/CharImgs/Angelica.jpg"
// import Veronica from "../imgs/CharImgs/Veronica.jpg"
// import Heathers from "../imgs/CharImgs/Heathers.jpg"
// import JD from "../imgs/CharImgs/JD.jpg"
// import Jaimie from "../imgs/CharImgs/Jaimie.jpg"
// import Cathy from "../imgs/CharImgs/Kathy.jpg"
// import Cosette from "../imgs/CharImgs/Cosette.jpg"
// import Eponine from "../imgs/CharImgs/Eponine.jpg"
// import Fantine from "../imgs/CharImgs/Fantine.jpg"
// import Javert from "../imgs/CharImgs/Javert.jpg"
// import Marius from "../imgs/CharImgs/Marius.jpg"
// import Valjean from "../imgs/CharImgs/Valjean.jpg"
// import Phantom from "../imgs/CharImgs/Phantom.jpg"
// import Christine from "../imgs/CharImgs/Christine.jpg"
// import Raul from "../imgs/CharImgs/Raul.jpg"
// import Angel from "../imgs/CharImgs/Angel.jpg"
// import Tom from "../imgs/CharImgs/Tom.jpg"
// import Mark from "../imgs/CharImgs/Mark.jpg"
// import Roger from "../imgs/CharImgs/Roger.jpg"
// import Mimi from "../imgs/CharImgs/Mimi.jpg"
// import Maureen from "../imgs/CharImgs/Maureen.jpg"
// import Joanne from "../imgs/CharImgs/Joanne.jpg"
// import Sweeney from "../imgs/CharImgs/Sweeney.jpg"
// import Toby from "../imgs/CharImgs/Tobias.jpg"
// import Lovett from "../imgs/CharImgs/Lovett.jpg"
// import Fiyero from "../imgs/CharImgs/Fiyero.jpg"
// import Elphaba from "../imgs/CharImgs/Elphaba.jpg"
// import Glinda from "../imgs/CharImgs/Galinda.jpg"
import db from "../utils/API";
import axios from "axios"

function Profile(props){
  const profile = useContext(ProfileContext);

   useEffect(() => {

      let usersPoints = profile.ProfileAttributes.points;
      console.log('usersPoints:', usersPoints)
      if (usersPoints >= 0 && usersPoints < 100) {
        profile.dispatch({type: "setEnsemble"});
      } else if (usersPoints >= 100 && usersPoints < 200){
        profile.dispatch({type: "setFeaturedEnsemble"});
      } else if (usersPoints >= 200 && usersPoints < 350){
        profile.dispatch({type: "setPrincipal"});
      } else if (usersPoints >= 350 && usersPoints < 600){
        profile.dispatch({type: "setLeadActor"});
      } else if (usersPoints >= 600 && usersPoints < 900){
        profile.dispatch({type: "setStar"});
      } else if (usersPoints >= 900){
        profile.dispatch({type: "setLegend"});
      }
    },[profile.ProfileAttributes.points]);


    let isALegend = profile.ProfileAttributes.isLegend;
    if (isALegend) {
      return (
        <>
          <AppNav />
          <LegendInfoCard 
            name = {profile.ProfileAttributes.name}
            image = {profile.ProfileAttributes.image}
            topShow = {profile.ProfileAttributes.topShow}
            level = {profile.ProfileAttributes.level}
            alias = {profile.ProfileAttributes.hiddenPersona}
            points = {profile.ProfileAttributes.points}
          />
        </>
      );
    } else {
      return (
        <>
          <AppNav />
          <UserInfoCard 
            name = {profile.ProfileAttributes.name}
            image = {profile.ProfileAttributes.image}
            topShow = {profile.ProfileAttributes.topShow}
            level = {profile.ProfileAttributes.level}
            alias = {profile.ProfileAttributes.hiddenPersona}
            points = {profile.ProfileAttributes.points}
            maxPoints = {profile.ProfileAttributes.maxPoints}
          />
          
          {/* <button onClick={}>Click to see user data</button> */}
        </>
      );
    }
}
  
  export default Profile;