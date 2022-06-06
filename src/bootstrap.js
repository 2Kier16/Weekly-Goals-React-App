import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/app";
import "./style/main.scss";
import NavBar from "./components/Navbar";
import Artiist from "./components/artist";

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/Artiist">
          <Artiist />
        </Route>
      </Switch>
    </BrowserRouter>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
