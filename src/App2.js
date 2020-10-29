/* import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import About from "./routes/About";
import NowPlaying from "./routes/NowPlaying";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import "./App.css";
import Upcoming from "./routes/Upcoming";
import TopRateds from "./routes/TopRateds";
import Search from "./routes/Search";
import Theaters from "./routes/Theaters";
import Theater_Info from "./routes/Theater_Info";
import Home from "./routes/Home";
import Auth from "./routes/Auth";

//npm run deploy

function App({ isLoggedIn, userObj }) {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={Auth} />
      <Route path="/nowplaying" component={NowPlaying} />
      <Route path="/upcoming" component={Upcoming} />
      <Route path="/toprateds" component={TopRateds} />
      <Route path="/search" component={Search} />
      <Route path="/theaters" component={Theaters} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/theaterinfo/:id" component={Theater_Info} />
    </HashRouter>
  );
}

export default App;
 */
