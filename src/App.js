import React, { Component } from "react";
import "./App.css";
import Homeheader from "./components/homeHeader";
import Bodybackground from "./components/Bodybackground";
import AddMovie from "./components/AddMovie";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import MoviePage from "./components/MoviePage";
import EditMovie from "./components/edit";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      title: "",
      director: "",
      year: 0,
      rating: 0,
      posterurl: "",

    };
  }

  Load = () => {
    fetch("https://movie-crud13.herokuapp.com/")
      .then(result => result.json())
      .then(data => {
        this.setState({
          movies: data
        });
      });
  };
  async componentDidMount() {
    this.Load();
  }
  handleInput = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  updateState = event => {
    let movieSelectedInfo = this.state.movies.filter(
      movie => movie.id == event.target.id
    );
    this.setState({
      title: movieSelectedInfo[0].title,
      director: movieSelectedInfo[0].director,
      rating: movieSelectedInfo[0].rating,
      year: movieSelectedInfo[0].year,
      posterurl: movieSelectedInfo[0].posterurl,
    })

  }
  deleteMovie = (event) => {
    fetch(`https://movie-crud13.herokuapp.com/${event.target.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json; charset=utf - 8"
      }
    }).then(() => this.Load());
  }

  addMovie = async () => {
    console.log("kgadCKH");
    var add = {
      title: this.state.title,
      director: this.state.director,
      year: this.state.year,
      rating: this.state.rating,
      posterurl: this.state.posterurl
    };
    await fetch("https://movie-crud13.herokuapp.com/", {
      method: "POST",
      body: JSON.stringify(add),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json; charset=utf - 8"
      }
    }).then(() => this.Load());
  };

  editReview = (movieID) => {
    var ratedMovie = {
      title: this.state.title,
      director: this.state.director,
      year: this.state.year,
      rating: this.state.rating,
      posterurl: this.state.posterurl
    }
    fetch(`https://movie-crud13.herokuapp.com/${movieID}`, {
      method: 'PUT',
      body: JSON.stringify(ratedMovie),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json; charset=utf - 8'
      }
    }).then(() => this.Load())
  }

  render() {
    return (
      <div className="App">
        <Homeheader />
        <Route
          path="/"
          exact
          render={() => <Bodybackground movies={this.state.movies} />}
        />
        <div className="Main-container">
          <Route
            path="/add"
            render={() => (
              <AddMovie
                handleInput={this.handleInput}
                addMovie={this.addMovie}
              />
            )}
          />
          <Route
            path="/movie/:id"
            render={(props) =>
              <MoviePage deleteMovie={this.deleteMovie} updateState={this.updateState} movies={this.state.movies} {...props} />
            }
          />
          <Route
            path="/edit/:id"
            render={(props) =>
              < EditMovie movies={this.state.movies} editReview={this.editReview} handleInput={this.handleInput} {...props} />
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
