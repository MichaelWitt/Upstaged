import React, { Component } from "react";
import UserInfoCard from "./UserInfoCard";
//bring in mongo database of users with API

class Profile extends Component {
    state = {
        name: "Richie",
        image: "https://i.pinimg.com/originals/ca/b1/cd/cab1cd2e83428f8394e2865dd0e9ff32.jpg",
        topShow: "Wicked",
        points: 10,
        characterMostLike: "Elphaba"
      };
    
      revealPersona = query => {
          this.setState({ name: 'The Wizard' })
      };

      hidePersona = query => {
        this.setState({ name: 'Richie' })
      };
      
    
      render() {
        return (
          <>
          <UserInfoCard 
            name = {this.state.name}
            image = {this.state.image}
            topShow = {this.state.topShow}
            points = {this.state.points}
            characterMostLike = {this.state.characterMostLike}
          />
          <button onClick={() => this.revealPersona()} id="hiddenNameButton">Click to reveal your hidden persona</button>
          <button onClick={() => this.hidePersona()} id="hiddenNameButton">Click to hide your hidden persona</button>
          </>
        );
      }

};
  
  export default Profile;