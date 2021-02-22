import React, { useContext, useEffect } from "react";
import LegendInfoCard from "./LegendInfoCard";
import UserInfoCard from "./UserInfoCard";
import { ProfileContext } from "../utils/GlobalState";
import db from "../utils/API";
import axios from "axios"
import AppNav from "./Navbar";

// const loggedInUser = db.User.findAll;
// console.log('loggedInUser:', loggedInUser)

// const loggedInUser = JSON.parse(localStorage.getItem("user"));
// console.log('loggedInUser:', loggedInUser)

function Profile(props){
  let profile = useContext(ProfileContext);

   useEffect(() => {
      axios.get("/api/getUser").then((response) => {
          const data = response.data;
          profile.dispatch({type: "setName", value: data[0].firstName});
      })

      let usersPoints = profile.ProfileAttributes.points;
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
            characterMostLike = {profile.ProfileAttributes.characterMostLike}
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
            characterMostLike = {profile.ProfileAttributes.characterMostLike}
            points = {profile.ProfileAttributes.points}
            maxPoints = {profile.ProfileAttributes.maxPoints}
          />
          {/* <button onClick={}>Click to see user data</button> */}
        </>
      );
    }
}
  
  export default Profile;