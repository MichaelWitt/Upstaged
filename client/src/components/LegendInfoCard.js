import React from "react";
import { Button } from "react-bootstrap"

let backgroundStyle = {
  width: 305
};


function LegendInfoCard(props) {
  return (
    <div class="card" style={backgroundStyle} id="border-madness">
        <div class="card-img-top">
          <img id="profileImage" alt={props.name} src={props.image} width="300px" height="400px"/>
        </div>
        <div class="card-body">
          <h5 class="card-title"><strong class="headers">Name: </strong>{props.name}</h5> 
          <ul>
            <li>
              <strong class="headers">Level:</strong> {props.level}
            </li>
            <li>
              <strong class="headers">My Top Show:</strong> {props.topShow}
            </li>
            <li>
              <strong class="headers">Most Similar Character:</strong> {props.characterMostLike}
            </li>
            <li>
              <strong class="headers">Total points:</strong> {props.points}
            </li>
          </ul>
        </div>
      <Button className="mb-5 mt-0" href="/Characters" variant="light" style={{padding:"0px"}}> Click to change your avatar! </Button>
      </div>
    );
  }
  
  export default LegendInfoCard;