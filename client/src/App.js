import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup"
import Characters from "./pages/Characters"
import Login from "./pages/Login"
import FooterNav from "./components/Footer";
import Profile from "./components/Profile";
import Quizzes from "./components/Quizzes/Quizzes";
import MainPage from "./pages/MainPage";
import Playbill from "./components/Playbill/createplaybill";
import MadLibs from "./components/Playbill/playbill3";
import Results from "./components/Playbill/results";
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
import axios from 'axios'

function App() {

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path={"/Signup"}>
              <Signup />
            </Route>
            <Route exact path={"/Characters"}>
              <Characters />
            </Route>
            <Route exact path={["/", "/Login"]}>
              <ProfileContextProvider>
                <Login />
              </ProfileContextProvider>
            </Route>
            <Route exact path={"/Home"}>
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
            <Route exact path={"/createplaybill"}>
              <Playbill/>
            </Route>
            <Route exact path={"/playbill3"}>
              <MadLibs/>
            </Route>
            <Route exact path={"/results"}>
              <Results/>
            </Route>
            <Route exact path={"/Hamilton"}>
              <ProfileContextProvider>
                <Hamilton />
              </ProfileContextProvider>
            </Route>
            <Route exact path={"/Wicked"}>
              <ProfileContextProvider>
                <Wicked />
              </ProfileContextProvider>
            </Route>
            <Route exact path={"/Dreamgirls"}>
              <ProfileContextProvider>
                <Dreamgirls />
              </ProfileContextProvider>
            </Route>
            <Route exact path={"/Phantom"}>
              <ProfileContextProvider>
                <Phantom />
              </ProfileContextProvider>
            </Route>
            <Route exact path={"/Rent"}>
              <ProfileContextProvider>
                <Rent />
              </ProfileContextProvider>
            </Route>
            <Route exact path={"/Heathers"}>
              <ProfileContextProvider>
                <Heathers />
              </ProfileContextProvider>
            </Route>
            <Route exact path={"/LesMis"}>
              <ProfileContextProvider>
                <LesMis />
              </ProfileContextProvider>
            </Route>
            <Route exact path={"/DearEvanHansen"}>
              <ProfileContextProvider>
                <DearEvanHansen />
              </ProfileContextProvider>
            </Route>
            <Route exact path={"/SweeneyTodd"}>
              <ProfileContextProvider>
                <SweeneyTodd />
              </ProfileContextProvider>
            </Route>
            <Route exact path={"/Hadestown"}>
              <ProfileContextProvider>
                <Hadestown />
              </ProfileContextProvider>
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

export default App;
