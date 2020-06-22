import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import HomePage from "./Pages/HomePage";
import ExplorePage from "./Pages/ExplorePage";
import DrinkPage from "./Pages/DrinkPage";

const ErrorPage = () => (
  <div>
    Error - <Link to="/">Home</Link>
  </div>
);

const routes =
  (console.log("router working"),
  (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/drinks/:name" component={DrinkPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  ));

ReactDOM.render(routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
