import React from "react";
import { Button, ProgressBar } from "react-bootstrap";


let backgroundStyle = {
  width: 305
};

function UserInfoCard(props) {
  return (
    <div className="card mb-5" style={backgroundStyle} id="border-madness">
      <div className="card-img-top">
        <img
          id="profileImage"
          alt={props.name}
          src={props.image}
          width="300px"
          height="400px"
        />
      </div>
      <div className="card-body" style={{paddingBottom:"5px"}}>
        <h5 className="card-title">
          <strong className="headers">Name: </strong>
          {props.name}
        </h5>
        <ul>
          <li>
            <strong className="headers">Level:</strong> {props.level}
          </li>
          <li>
            <strong className="headers">Progress to next level:</strong>{" "}
            <ProgressBar
              now={props.points}
              max={props.maxPoints}
              label={`${props.points}/${props.maxPoints}`}
            />
          </li>
          <li>
            <strong className="headers">My Top Show:</strong> {props.topShow}
          </li>
          <li >
            <strong className="headers">Alter Ego:</strong>{" "}
            {props.alias}
          </li>
        </ul>
      </div>
      <Button className="mb-5 mt-0" href="/Characters" variant="light" style={{padding:"0px"}}> Click to change your avatar! </Button>
    </div>
  );
}

export default UserInfoCard;
