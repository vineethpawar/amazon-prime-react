import React from 'react'
import './MovieScreen.css'
import Navbar from './../../components/navbar/Navbar';
import MovieRow from './../../components/movierow/MovieRow';

function MovieScreen() {
    return (

      <div className="movie__screen">
          <Navbar/>
           <MovieRow/>
      </div>
    )
}

export default MovieScreen
