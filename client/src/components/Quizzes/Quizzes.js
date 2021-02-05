import React from "react"
import { Button } from "react-bootstrap"
import Quiz from 'react-quiz-component';
import { Link } from "react-router-dom";
import Hamilton from "./Hamilton"

const hamiltonData = require("./HamiltonData.json")
const wickedData = require("./WickedData.json")
const dreamgirlsData = require("./DreamgirlsData.json")
const rentData = require("./RentData.json")
const heathersData = require("./HeathersData.json")
const lesMisData = require("./LesMisData.json")
const evanHansenData = require("./EvanHansenData.json")
const sweeneyToddData = require("./SweeneyToddData.json")
const hadestownData = require("./HadestownData.json")
const phantomData = require("./PhantomData.json")

const Quizzes = () => {
    return (
      <div>
        <h1>Pick a Quiz!</h1>
        <Button variant="warning" href={"/Hamilton"}> Hamilton </Button>

      </div>
    );
}

export default Quizzes;
