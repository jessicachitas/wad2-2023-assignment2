import React, { createContext, useEffect, useReducer, useContext } from "react";
import { getMovies, getUpcomingMovies, getTrendingMovies } from "./api/movie-api";
import { AuthContext } from './authContext';

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.movies};
      case "upcomingLoad":
      return { upcomingMovies: action.payload.movies};
      case "trendingLoad":
      return { trendingMovies: action.payload.movies};
    default:
      return state;
  }
};

const MoviesContextProvider = props => {
  const context = useContext(AuthContext);

  const [state, dispatch] = useReducer(reducer, { movies: [], upcomingMovies: [], trendingMovies: []});

  useEffect(() => {
    getMovies().then(movies => {
      dispatch({ type: "load", payload: {movies}});
    });
  },[context.isAuthenticated]);

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      dispatch({ type: "upcomingLoad", payload: {movies}});
    });
  },[context.isAuthenticated]);

  useEffect(() => {
    getTrendingMovies().then(movies => {
      dispatch({ type: "trendingLoad", payload: {movies}});
    });
  },[context.isAuthenticated]);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcomingMovies: state.upcomingMovies,
        trendingMovies: state.trendingMovies
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider