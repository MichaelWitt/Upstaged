import React from "react";

let backgroundStyle = {
  width: 305,
  height: 600,
};

function UserInfoCard(props) {
    return (
      <div class="card" style={backgroundStyle} id="border-madness">
        <div class="card-img-top">
          <img id="profileImage" alt={props.name} src={props.image} width="300px" height="400px"/>
        </div>
        <div class="card-body">
          <h5 class="card-title"><strong class="headers">Name: </strong>{props.name}</h5> 
          <ul>
            <li>
              <strong class="headers">Points:</strong> {props.points}
            </li>
            <li>
              <strong class="headers">My Top Show:</strong> {props.topShow}
            </li>
            <li>
              <strong class="headers">Most Similar Character:</strong> {props.characterMostLike}
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default UserInfoCard;