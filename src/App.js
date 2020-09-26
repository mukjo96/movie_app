import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import "./App.css";
import Upcoming from "./routes/Upcoming";
import TopRated1 from "./routes/TopRated/TopRated1";
import TopRated2 from "./routes/TopRated/TopRated2";
import TopRated3 from "./routes/TopRated/TopRated3";
import TopRated4 from "./routes/TopRated/TopRated4";
import TopRated5 from "./routes/TopRated/TopRated5";
import TopRated6 from "./routes/TopRated/TopRated6";
import TopRated7 from "./routes/TopRated/TopRated7";
import TopRated8 from "./routes/TopRated/TopRated8";
import TopRated9 from "./routes/TopRated/TopRated9";
import TopRated10 from "./routes/TopRated/TopRated10";
import Search from "./routes/Search";
//npm run deploy

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/upcoming" component={Upcoming} />
      <Route path="/toprated/1" component={TopRated1} />
      <Route path="/toprated/2" component={TopRated2} />
      <Route path="/toprated/3" component={TopRated3} />
      <Route path="/toprated/4" component={TopRated4} />
      <Route path="/toprated/5" component={TopRated5} />
      <Route path="/toprated/6" component={TopRated6} />
      <Route path="/toprated/7" component={TopRated7} />
      <Route path="/toprated/8" component={TopRated8} />
      <Route path="/toprated/9" component={TopRated9} />
      <Route path="/toprated/10" component={TopRated10} />
      <Route path="/search" component={Search} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
