import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/app";
import "./style/main.scss";
import NavBar from "./components/Navbar";
import Artist from "./components/pages/artist";
import Songs from "./components/pages/songs";

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/Artist">
          <Artist />
        </Route>
        <Route path="/Songs">
          <Songs />
        </Route>
      </Switch>
    </BrowserRouter>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
