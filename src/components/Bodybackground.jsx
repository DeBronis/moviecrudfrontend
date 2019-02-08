import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Bodybackground extends Component {
  render() {
    const movies = this.props.movies.map(movie => {
      return (
        <button>
          <Link to={`/movie/${movie.id}`}>
            {movie.title}
            <img className="bgi" src={movie.posterurl} />
          </Link>
        </button>
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
