import React, { Component } from "react";
import "./App.css";
import Homeheader from "./components/homeHeader";
import Bodybackground from "./components/Bodybackground";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };
  }

  async componentDidMount() {
    let response = await fetch("https://movie-crud13.herokuapp.com");
    let myJson = await response.json();
    this.setState({
      movies: myJson
    });
  }
  render() {
    return (
      <div className="App">
        <Homeheader />
        <Bodybackground movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
