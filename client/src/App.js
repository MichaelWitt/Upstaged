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




// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";

import reducer from "./reducer";
import { createStore } from "redux";

import NavBar from "./components/Nav";
import { Typography, Divider } from "@material-ui/core";

import AuthRoute from "./components/AuthRoute";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";

import { appMiddleware } from "./middlewares/app";
import { apiMiddleware } from "./middlewares/core";
import MyAccount from "./pages/MyAccount";

const createStoreWithMiddleware = applyMiddleware(
  appMiddleware,
  apiMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducer);

const IndexPage = () => (
  <>
    <Typography variant="h3">Welcome to the App</Typography>
    <Divider style={{ marginTop: 10, marginBottom: 10 }} />
    <Typography variant="h6">Feel free to take a look around</Typography>
  </>
);





class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNav />
            <Switch>
              <AuthRoute exact path={"/Signup"} type="guest">
                <Signup />
              </AuthRoute>
              <AuthRoute exact path={"/Login"} type="guest">
                <Login />
              </AuthRoute>
              <AuthRoute exact path={"/"} type="private">
                <MainPage />
              </AuthRoute>
              <AuthRoute exact path={"/News"} type="private">
                <NewsPage />
              </AuthRoute>
              <AuthRoute exact path={"/Games"} type="private">
                <GameContent />
              </AuthRoute>
              <AuthRoute exact path={"/Profile"} type="private">
                <Profile />
              </AuthRoute>
              <AuthRoute exact path={"/Quizzes"} type="private">
                <Quizzes />
              </AuthRoute>
              <AuthRoute exact path={"/Hamilton"} type="private">
                <Hamilton />
              </AuthRoute>
              <AuthRoute exact path={"/Wicked"} type="private">
                <Wicked />
              </AuthRoute>
              <AuthRoute exact path={"/Dreamgirls"} type="private">
                <Dreamgirls />
              </AuthRoute>
              <AuthRoute exact path={"/Phantom"} type="private">
                <Phantom />
              </AuthRoute>
              <AuthRoute exact path={"/Rent"} type="private">
                <Rent />
              </AuthRoute>
              <AuthRoute exact path={"/Heathers"} type="private">
                <Heathers />
              </AuthRoute>
              <AuthRoute exact path={"/LesMis"} type="private">
                <LesMis />
              </AuthRoute>
              <AuthRoute exact path={"/DearEvanHansen"} type="private">
                <DearEvanHansen />
              </AuthRoute>
              <AuthRoute exact path={"/SweeneyTodd"} type="private">
                <SweeneyTodd />
              </AuthRoute>
              <AuthRoute exact path={"/Hadestown"} type="private">
                <Hadestown />
              </AuthRoute>
            </Switch>
            <FooterNav />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
