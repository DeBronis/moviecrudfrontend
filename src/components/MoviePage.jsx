import React from "react";
import "../App.css";
import HomePageHeader from "./homeHeader";
import { Link } from "react-router-dom";

const MoviePage = props => {
  const movieSelected = props.movies.filter(
    movie => movie.id == props.match.params.id
  );
  console.log(movieSelected);
  console.log(props.movies);

  return (
    <div>
      <div className="singlePage">
        <h1>{movieSelected[0].title}</h1>
        <img
          className="moviePosterSingle"
          src={movieSelected[0].posterurl}
          alt="poster"
        />
        <h2>Title: {movieSelected[0].title}</h2>
        <h2>Director: {movieSelected[0].director}</h2>
        <h2>Year: {movieSelected[0].year}</h2>
        <h2>Rating: {movieSelected[0].rating}</h2>
      </div>
      <Link to={`/edit/${movieSelected[0].id}`}>
        <button onClick={props.updateState} id={movieSelected[0].id} type="button" className="btn btn-warning">
          Edit Movie
          </button>

      </Link>
      <Link to={`/`}>
        <button onClick={props.deleteMovie} id={movieSelected[0].id} type="button" className="btn btn-warning">
          Delete Movie
          </button>
      </Link>
    </div>

  );
};

export default MoviePage;
