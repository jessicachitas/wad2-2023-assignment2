import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import { PublicPage, Movies, UpcomingMovies, TrendingMovies, Profile, HomePage } from "./pages";

import LoginPage from "./loginPage";
import SignUpPage from "./signUpPage";
import AuthProvider from "./authContext";
import AuthHeader from "./authHeader";
import ProtectedRoutes from "./protectedRoutes";
import MovieProvider from "./moviesContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthHeader />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/public">Public</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/tmdb/upcoming">Upcoming Movies</Link>
          </li>
          <li>
            <Link to="/tmdb/trending">Trending Movies</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <MovieProvider>
          <Routes>
            <Route path="/public" element={ <PublicPage /> } />
            <Route path="/" element={ <HomePage /> } />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/signup" element={ <SignUpPage /> } />

            <Route element={<ProtectedRoutes />}>
              <Route path="/movies" element={<Movies />} />
              <Route path="/tmdb/upcoming" element={<UpcomingMovies />} />
              <Route path="/tmdb/trending" element={<TrendingMovies />} />
              <Route path="/profile" element={<Profile />} />
            </Route>

            <Route path="*" element={ <Navigate to="/" /> } />
          </Routes>
        </MovieProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));