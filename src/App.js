import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import "./App.css";
import Upcoming from "./routes/Upcoming";
import TopRateds from "./routes/TopRateds";
import Search from "./routes/Search";
import Theaters from "./routes/Theaters"
//npm run deploy

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/upcoming" component={Upcoming} />
      <Route path="/toprateds" component={TopRateds} />
      <Route path="/search" component={Search} />
      <Route path="/theaters" component={Theaters} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
