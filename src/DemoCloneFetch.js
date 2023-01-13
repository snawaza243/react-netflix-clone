
// write the code of netflix clone in react

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class NetflixClone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      tvShows: [],
      isLoading: true
    };
  }

  componentDidMount() {
    // Fetch movies and tv shows from the API
    fetch('https://api.themoviedb.org/3/trending/all/week?api_key=153a597108f4189d6591901fefd64aa5&language=en-US')
      .then(res => res.json())
      .then(movies => this.setState({ movies, isLoading: false }))
      .catch(err => console.log(err));

    fetch('https://api.themoviedb.org/3/trending/all/week?api_key=153a597108f4189d6591901fefd64aa5&language=en-US')
      .then(res => res.json())
      .then(tvShows => this.setState({ tvShows, isLoading: false }))
      .catch(err => console.log(err));
  }

  render() {
    const { movies, tvShows, isLoading } = this.state;

    return (
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h2>Movies</h2>
            {movies.map(movie => (
              <div key={movie.id}>
                <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
              </div>
            ))}
            <h2>TV Shows</h2>
            {tvShows.map(show => (
              <div key={show.id}>
                <NavLink to={`/tv-shows/${show.id}`}>{show.title}</NavLink>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default connect()(NetflixClone);