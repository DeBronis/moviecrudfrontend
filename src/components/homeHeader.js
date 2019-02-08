import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Homeheader extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <a> Top 8 Movies of 2018 </a>
        <Link to={`/add`}>
          <button type="button" className="btn btn-warning">
            Add New Movies
          </button>
        </Link>
      </nav>
    );
  }
}
export default Homeheader;
