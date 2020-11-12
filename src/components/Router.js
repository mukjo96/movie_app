import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "../routes/About";
import NowPlaying from "../routes/NowPlaying";
import Navigation from "./Navigation";
import Detail from "../routes/Detail";
import "../App.css";
import Upcoming from "../routes/Upcoming";
import TopRateds from "../routes/TopRateds";
import Search from "../routes/Search";
import Theaters from "../routes/Theaters";
import Theater_Info from "../routes/Theater_Info";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Profile from "../routes/Profile";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <div>
        {isLoggedIn ? (
          <div>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            {/* <Route exact path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route> */}
            <Route path="/nowplaying" component={NowPlaying} />
            <Route path="/upcoming" component={Upcoming} />
            <Route path="/toprateds" component={TopRateds} />
            <Route path="/search" component={Search} />
            <Route path="/theaters">
              <Theaters userObj={userObj} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/movie/:id">
              <Detail />
            </Route>
            <Route path="/theaterinfo/:id">
              <Theater_Info userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route>
          </div>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </div>
    </Router>
  );
};

export default AppRouter;
