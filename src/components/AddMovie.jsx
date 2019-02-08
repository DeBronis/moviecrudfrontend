import React from "react";
import Homeheader from "./homeHeader";
import { Link } from "react-router-dom";
const Addmovie = props => {
  return (
    <div>
      <div className="form">
        <h1> Add Movie </h1>
        <form className="formIn">
          <label>
            Title{" "}
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={props.handleInput}
            />
          </label>
          <label>
            Director
            <input
              type="text"
              name="director"
              placeholder="Director"
              onChange={props.handleInput}
            />
          </label>
          <label>
            Year{" "}
            <input
              type="number"
              name="year"
              placeholder="Year"
              onChange={props.handleInput}
            />
          </label>
          <label>
            Rating
            <input
              type="number"
              name="rating"
              placeholder="Rating 1-5"
              onChange={props.handleInput}
            />
          </label>
          <label>
            Poster URL{" "}
            <input
              type="text"
              name="posterurl"
              placeholder="Url"
              onChange={props.handleInput}
            />
          </label>
          <Link to={`/`}>
            <button className="addMovieBtn" onClick={props.addMovie}>
              {" "}
              Add Movie{" "}
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Addmovie;
