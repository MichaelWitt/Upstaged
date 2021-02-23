import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import {Col, Row} from "react-bootstrap"
import { Button, ProgressBar } from "react-bootstrap";

let backgroundStyle = {
  marginTop:"40px"
};

function UserInfoCard(props) {
  return (
    <div className="card" style={backgroundStyle} id="border-madness">
      <Row>
      <Col md={4}>   
      <div className="card-img-top">
        <img
          id="profileImage"
          alt={props.name}
          src={props.image}
          width="300px"
          height="400px"
        />
        </div>
      </Col> 
      <Col md={1}></Col>  
        <Col md={7}>  
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
            <li>
              <strong className="headers">Alter Ego:</strong>{" "}
              {props.alias}
            </li>
          </ul>
        </div>
      </Col>
      </Row>
    </div>
  
  );
}

export default UserInfoCard;
