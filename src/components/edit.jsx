import React from "react";
import "../App.css";
import HomePageHeader from "./homeHeader";
import { Link } from "react-router-dom";

const EditMovie = props => {
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
        <label>Title:</label><input defaultValue={movieSelected[0].title} onChange={props.handleInput} name="title" />
        <label>Director:</label><input defaultValue={movieSelected[0].director} onChange={props.handleInput} name="director" />
        <label>Year:</label><input defaultValue={movieSelected[0].year} onChange={props.handleInput} name="year" />
        <label>Rating:</label><input defaultValue={movieSelected[0].rating} onChange={props.handleInput} name="rating" />
        <label>Poster URL:</label><input defaultValue={movieSelected[0].posterurl} onChange={props.handleInput} name="posterurl" />
      </div>
      <Link to={`/`}>
        <button onClick={props.editReview(movieSelected[0].id)} type="button" className="btn btn-warning">
          Submit Edit
          </button>
      </Link>
    </div>

  );
};

export default EditMovie;
