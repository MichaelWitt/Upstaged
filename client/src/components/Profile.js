import React, { useContext, useEffect } from "react";
import LegendInfoCard from "./LegendInfoCard";
import UserInfoCard from "./UserInfoCard";
import { ProfileContext } from "../utils/GlobalState";
//bring in mongo database of users with API

const loggedInUser = JSON.parse(localStorage.getItem("user"));
console.log('loggedInUser:', loggedInUser.level)

function Profile(props){
  let profile = useContext(ProfileContext);

   useEffect(() => {
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
    });

    let isALegend = profile.ProfileAttributes.isLegend;
    if (isALegend) {
      return (
        <>
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
          <UserInfoCard 
            name = {profile.ProfileAttributes.name}
            image = {profile.ProfileAttributes.image}
            topShow = {profile.ProfileAttributes.topShow}
            level = {profile.ProfileAttributes.level}
            characterMostLike = {profile.ProfileAttributes.characterMostLike}
            points = {profile.ProfileAttributes.points}
            maxPoints = {profile.ProfileAttributes.maxPoints}
          />
        </>
      );
    }
}
// class Profile extends Component {
//     state = {
//         name: "Richie",
//         image: "https://i.pinimg.com/originals/ca/b1/cd/cab1cd2e83428f8394e2865dd0e9ff32.jpg",
//         topShow: "Wicked",
//         points: 500, //eventually we will want to use mongoose to set this from the users db
//         maxPoints: 0,
//         characterMostLike: "Elphaba",
//         level: "",
//         isLegend: false
//       };

//       componentDidMount() {
//         let usersPoints = this.state.points;
//         if (usersPoints >= 0 && usersPoints < 100) {
//           this.setState({ level: 'Ensemble', maxPoints: 100 })
//         } else if (usersPoints >= 100 && usersPoints < 200){
//           this.setState({ level: 'Featured Ensemble', maxPoints: 200  })
//         } else if (usersPoints >= 200 && usersPoints < 350){
//           this.setState({ level: 'Principal', maxPoints: 350  })
//         } else if (usersPoints >= 350 && usersPoints < 600){
//           this.setState({ level: 'Lead Actor', maxPoints: 600 })
//         } else if (usersPoints >= 600 && usersPoints < 900){
//           this.setState({ level: 'Star', maxPoints: 900 })
//         } else if (usersPoints >= 900){
//           this.setState({ level: 'Legend', isLegend: true })
//         }
//       };
    
//       revealPersona = query => {
//           this.setState({ name: 'The Wizard' })
//       };

//       hidePersona = query => {
//         this.setState({ name: 'Richie' })
//       };
      
    
//       render() {
//         let isALegend = this.state.isLegend;
//         if (isALegend) {
//           return (
//             <>
//             <LegendInfoCard 
//               name = {this.state.name}
//               image = {this.state.image}
//               topShow = {this.state.topShow}
//               level = {this.state.level}
//               characterMostLike = {this.state.characterMostLike}
//               points = {this.state.points}
//             />
//             <button onClick={() => this.revealPersona()} id="hiddenNameButton">Click to reveal your hidden persona</button>
//             <button onClick={() => this.hidePersona()} id="hiddenNameButton">Click to hide your hidden persona</button>
//             </>
//           );
//         } else {
//           return (
//             <>
//             <UserInfoCard 
//               name = {this.state.name}
//               image = {this.state.image}
//               topShow = {this.state.topShow}
//               level = {this.state.level}
//               characterMostLike = {this.state.characterMostLike}
//               points = {this.state.points}
//               maxPoints = {this.state.maxPoints}
//             />
//             <button onClick={() => this.revealPersona()} id="hiddenNameButton">Click to reveal your hidden persona</button>
//             <button onClick={() => this.hidePersona()} id="hiddenNameButton">Click to hide your hidden persona</button>
//             </>
//           );
//         }
//       }

// };
  
  export default Profile;