import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import AppNav from "./components/Navbar";
import FooterNav from "./components/Footer";
import Profile from "./components/Profile";
import Quizzes from "./components/Quizzes/Quizzes";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";
import Hamilton from "./components/Quizzes/Hamilton";
import Wicked from "./components/Quizzes/Wicked";
import DearEvanHansen from "./components/Quizzes/DearEvanHansen";
import Dreamgirls from "./components/Quizzes/Dreamgirls";
import Phantom from "./components/Quizzes/Phantom";
import Rent from "./components/Quizzes/Rent";
import SweeneyTodd from "./components/Quizzes/SweeneyTodd";
import Heathers from "./components/Quizzes/Heathers";
import Hadestown from "./components/Quizzes/Hadestown";
import LesMis from "./components/Quizzes/LesMis";
import GameContent from "./components/GameContent";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNav />
          <Switch>
            <Route exact path={"/Signup"}>
              <Signup />
            </Route>
            <Route exact path={"/Login"}>
              <Login />
            </Route>
            <Route exact path={"/"}>
              <MainPage />
            </Route>
            <Route exact path={"/News"}>
              <NewsPage />
            </Route>
            <Route exact path={"/Games"}>
              <GameContent />
            </Route>
            <Route exact path={"/Profile"}>
              <Profile />
            </Route>
            <Route exact path={"/Quizzes"}>
              <Quizzes />
            </Route>
            <Route exact path={"/Hamilton"}>
              <Hamilton />
            </Route>
            <Route exact path={"/Wicked"}>
              <Wicked />
            </Route>
            <Route exact path={"/Dreamgirls"}>
              <Dreamgirls />
            </Route>
            <Route exact path={"/Phantom"}>
              <Phantom />
            </Route>
            <Route exact path={"/Rent"}>
              <Rent />
            </Route>
            <Route exact path={"/Heathers"}>
              <Heathers />
            </Route>
            <Route exact path={"/LesMis"}>
              <LesMis />
            </Route>
            <Route exact path={"/DearEvanHansen"}>
              <DearEvanHansen />
            </Route>
            <Route exact path={"/SweeneyTodd"}>
              <SweeneyTodd />
            </Route>
            <Route exact path={"/Hadestown"}>
              <Hadestown />
            </Route>
          </Switch>
          <FooterNav />
        </div>
      </Router>
    );
  }
}

export default App;
