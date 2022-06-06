import React, { Component } from "react";
import "../style/main.scss";

// create a componet for your second page(Songs&Albums/artist)
// make a route for that Component
// add a navbar for both your app and the component

export default class App extends Component {
  render() {
    return (
      <div className="app body">
        <div className="text-content">
          <h1>Kier's List of Fav Artist & Songs</h1>
        </div>
      </div>
    );
  }
}
