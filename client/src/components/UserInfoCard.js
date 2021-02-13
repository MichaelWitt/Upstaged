import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

let backgroundStyle = {
  width: 305,
  height: 600,
};

function UserInfoCard(props) {
  return (
    <div className="card" style={backgroundStyle} id="border-madness">
      <div className="card-img-top">
        <img
          id="profileImage"
          alt={props.name}
          src={props.image}
          width="300px"
          height="400px"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <strong className="headers">Name: </strong>
          {props.name}
        </h5>
        <ul>
          <li>
            <strong className="headers">Level:</strong> {props.level}
          </li>
          <li>
            <strong className="headers">My Top Show:</strong> {props.topShow}
          </li>
          <li>
            <strong className="headers">Most Similar Character:</strong>{" "}
            {props.characterMostLike}
          </li>
          <li>
            <strong className="headers">Progress to next level:</strong>{" "}
            <ProgressBar
              now={props.points}
              max={props.maxPoints}
              label={`${props.points}/${props.maxPoints}`}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserInfoCard;
