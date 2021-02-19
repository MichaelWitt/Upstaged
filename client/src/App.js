import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";
// import Signup from "./pages/Signup"
// import Login from "./pages/Login"
// import AppNav from "./components/Navbar";
// import FooterNav from "./components/Footer";
// import Profile from "./components/Profile";
// import Quizzes from "./components/Quizzes/Quizzes";
// import MainPage from "./pages/MainPage";
// import NewsPage from "./pages/NewsPage";
// import Hamilton from "./components/Quizzes/Hamilton";
// import Wicked from "./components/Quizzes/Wicked";
// import DearEvanHansen from "./components/Quizzes/DearEvanHansen";
// import Dreamgirls from "./components/Quizzes/Dreamgirls";
// import Phantom from "./components/Quizzes/Phantom";
// import Rent from "./components/Quizzes/Rent";
// import SweeneyTodd from "./components/Quizzes/SweeneyTodd";
// import Heathers from "./components/Quizzes/Heathers";
// import Hadestown from "./components/Quizzes/Hadestown";
// import LesMis from "./components/Quizzes/LesMis";
// import GameContent from "./components/GameContent";
// import ProfileContextProvider from "./utils/GlobalState";
// import LyricGame from "./components/LyircGame/Lyric";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Switch> 
//            <Route exact path={"/Signup"}>
//               <Signup />
//             </Route>
//             <Route exact path={["/", "/Login"]}>
//               <Login />
//             </Route>
//             <Route exact path={"/MainPage"}>
//               <MainPage />
//             </Route>
//             <Route exact path={"/News"}>
//               <NewsPage />
//             </Route>
//             <Route exact path={"/Games"}>
//               <GameContent />
//             </Route>
//             <Route exact path={"/Profile"}>
//               <ProfileContextProvider>
//                 <Profile />
//               </ProfileContextProvider>
//             </Route>
//             <Route exact path={"/Quizzes"}>
//               <Quizzes />
//             </Route>
//             <Route exact path={"/Hamilton"}>
//               <ProfileContextProvider>
//                 <Hamilton />
//               </ProfileContextProvider>
//             </Route>
//             <Route exact path={"/Wicked"}>
//               <ProfileContextProvider>
//                 <Wicked />
//               </ProfileContextProvider>
//             </Route>
//             <Route exact path={"/Dreamgirls"}>
//               <ProfileContextProvider>
//                 <Dreamgirls />
//               </ProfileContextProvider>
//             </Route>
//             <Route exact path={"/Phantom"}>
//               <ProfileContextProvider>
//                 <Phantom />
//               </ProfileContextProvider>
//             </Route>
//             <Route exact path={"/Rent"}>
//               <ProfileContextProvider>
//                 <Rent />
//               </ProfileContextProvider>
//             </Route>
//             <Route exact path={"/Heathers"}>
//               <ProfileContextProvider>
//                 <Heathers />
//               </ProfileContextProvider>
//             </Route>
//             <Route exact path={"/LesMis"}>
//               <ProfileContextProvider>
//                 <LesMis />
//               </ProfileContextProvider>
//             </Route>
//             <Route exact path={"/DearEvanHansen"}>
//               <ProfileContextProvider>
//                 <DearEvanHansen />
//               </ProfileContextProvider>
//             </Route>
//             <Route exact path={"/SweeneyTodd"}>
//               <ProfileContextProvider>
//                 <SweeneyTodd />
//               </ProfileContextProvider>
//             </Route>
//             <Route exact path={"/Hadestown"}>
//               <ProfileContextProvider>
//                 <Hadestown />
//               </ProfileContextProvider>
//             </Route>
//             <Route exact path={"/Lyrics"}>
//               <LyricGame />
//             </Route> */}
//           </Switch>
//           <FooterNav />
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;

import QuestionTable from "./components/QuestionTable.js";

function App() {
  return (
    <div className="App">
      <QuestionTable />
    </div>
  );
}

export default App;
