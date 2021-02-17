import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
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
import ProfileContextProvider from "./utils/GlobalState";
import LyricGame from "./components/LyircGame/Lyric";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNav />
          <Switch>
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
              <ProfileContextProvider>
                <Profile />
              </ProfileContextProvider>
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
              <ProfileContextProvider>
                <DearEvanHansen />
              </ProfileContextProvider>
            </Route>
            <Route exact path={"/SweeneyTodd"}>
              <SweeneyTodd />
            </Route>
            <Route exact path={"/Hadestown"}>
              <Hadestown />
            </Route>
            <Route exact path={"/Lyrics"}>
              <LyricGame />
            </Route>
          </Switch>
          <FooterNav />
        </div>
      </Router>
    );
  }
}

export default App;
