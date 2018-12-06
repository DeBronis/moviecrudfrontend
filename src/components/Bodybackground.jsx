import React, { Component } from "react";
import "../App.css";

class Bodybackground extends Component {
  render() {
    const movies = this.props.movies.map(movie => {
      return (
        <li>
          {movie.title}
          {movie.posterurl}
        </li>
      );
    });
    return (
      <div className="Homebody">
        {/* <img
          className="bgi"
          src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
        /> */}
        <div className="movieList">{movies}</div>
      </div>
    );
  }
}

export default Bodybackground;
