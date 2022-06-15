import React, { Component } from "react";

import axios from "axios";

import "../style/main.scss";
import notes from "../../static/assets/images/weekly goal images/music.jpg";
// create a component for your second page(Songs&Albums/artist)
// make a route for that Component
// add a navbar for both your app and the component

const rapperId = 2;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      artist: {},
      rapperId: 4,
      options: {
        method: "GET",
        url: `https://genius.p.rapidapi.com/artists/${rapperId}`,
        headers: {
          "X-RapidAPI-Key":
            "eb5ff670e3msh9a335fcca0d1aa6p15d152jsn280b1f8f15d8",
          "X-RapidAPI-Host": "genius.p.rapidapi.com",
        },
      },
    };
    // console.log(this);
    this.getgeniusapi = this.getgeniusapi.bind(this);
    this.handleRapperId = this.handleRapperId.bind(this);
    this.chooseRapper = this.chooseRapper.bind(this);
  }

  getgeniusapi() {
    axios
      .request(this.state.options)
      .then((response) => {
        // console.log(this);
        this.setState({
          artist: response.data.response.artist,
        });
        console.log(response.data.response.artist);
        // console.log(this);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  componentDidMount() {
    this.getgeniusapi();
  }
  chooseRapper() {
    this.setState({
      options: {
        method: "GET",
        url: `https://genius.p.rapidapi.com/artists/${this.state.rapperId}`,
        headers: {
          "X-RapidAPI-Key":
            "eb5ff670e3msh9a335fcca0d1aa6p15d152jsn280b1f8f15d8",
          "X-RapidAPI-Host": "genius.p.rapidapi.com",
        },
      },
    });
    console.log(this.state);
    event.preventDefault();
  }
  handleRapperId() {
    this.setState({
      rapperId: event.target.value,
    });
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="app background">
        <div className="text-content">
          <h1>Kier's List of Fav Artist & Songs</h1>
          <form onSubmit={this.chooseRapper}>
            <input
              type="number"
              placeholder="enter the rappers id"
              onChange={this.handleRapperId}
            />
            <button type="submit">Search Id</button>
          </form>
          <h1>{this.state.artist.name}</h1>
          <img src={this.state.artist.image_url} />
        </div>
      </div>
    );
  }
}
