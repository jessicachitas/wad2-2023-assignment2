import React from 'react';
import { useContext } from 'react';
import { MoviesContext } from './moviesContext';

export const PublicPage = () => {
    return <h2>Public page</h2>
 }
 export const Movies = () => {
    const context = useContext(MoviesContext);
    let movies = "";
    if (context.movies){
        movies = (
            <div>
                {context.movies.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
            </div>
        )
    }
    else {
        movies = (
            <div>
                Movies are loading
            </div>
        )
    }
    return <>
        <h2>Movies Data</h2>
        {movies}
    </>
 }

 export const UpcomingMovies = () => {
    const context = useContext(MoviesContext);
    let upcomingMovies = "";
    if (context.upcomingMovies){
        upcomingMovies = (
            <div>
                {context.upcomingMovies.map(upcomingMovie => { return <>{upcomingMovie.id},{upcomingMovie.title}<br /></> })}
            </div>
        )
    }
    else {
        upcomingMovies = (
            <div>
                Upcoming Movies are loading
            </div>
        )
    }
    return <>
        <h2>Upcoming Movies Data</h2>
        {upcomingMovies}
    </>
 }

 export const TrendingMovies = () => {
    const context = useContext(MoviesContext);
    let trendingMovies = "";
    if (context.trendingMovies){
        trendingMovies = (
            <div>
                {context.trendingMovies.map(trendingMovie => { return <>{trendingMovie.id},{trendingMovie.title}<br /></> })}
            </div>
        )
    }
    else {
        trendingMovies = (
            <div>
                Trending Movies are loading
            </div>
        )
    }
    return <>
        <h2>Trending Movies Data</h2>
        {trendingMovies}
    </>
 }

 export const Profile = () => {
    return <h2>My Profile </h2>
}
 export const HomePage = () => {
     return  <h2>Home page</h2>
 }
 