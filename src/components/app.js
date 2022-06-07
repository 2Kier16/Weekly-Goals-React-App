import React, { Component } from "react";
import "../style/main.scss";
import notes from "../../static/assets/images/weekly goal images/music.jpg";
// create a componet for your second page(Songs&Albums/artist)
// make a route for that Component
// add a navbar for both your app and the component

export default class App extends Component {
  render() {
    return (
      <div className="app body">
        <div className="text-content">
          <h1>Kier's List of Fav Artist & Songs</h1>
          <img src={notes} />
        </div>
      </div>
    );
  }
}
