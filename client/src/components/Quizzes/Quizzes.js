import React from "react"
import { Button } from "react-bootstrap"
import './QuizPage.css';

const Quizzes = () => {
    return (
      <div>
        <h1>Pick a Quiz!</h1>
        <Button variant="warning" href={"/Hamilton"}> Hamilton </Button>
        <Button variant="success" href={"/Wicked"}> Wicked </Button>
        <Button variant="danger" href={"/Dreamgirls"}> Dreamgirls </Button>
        <Button variant="warning" href={"/Rent"}> Rent </Button>
        <Button variant="danger" href={"/Heathers"}> Heathers </Button>
        <Button variant="secondary" href={"/LesMis"}> Les Mis </Button>
        <Button variant="primary" href={"/DearEvanHansen"}> Dear Evan Hansen </Button>
        <Button variant="dark" href={"/SweeneyTodd"}> Sweeney Todd </Button>
        <Button variant="warning" href={"/Hadestown"}> Hadestown </Button>
        <Button variant="dark" href={"/Phantom"}> Phantom of the Opera </Button>
      </div>
    );
}

export default Quizzes;
