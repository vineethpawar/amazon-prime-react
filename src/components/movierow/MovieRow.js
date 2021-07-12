import React from 'react'
import './MovieRow.css'
import MovieComponent from './../moviecomponent/MovieComponent';

function MovieRow() {
    return (
        <div className='movie__row'>
            <div className="movie__component__wrapper">
                <MovieComponent />
            </div>
            <div className="movie__component__wrapper">
                <MovieComponent />
            </div>
            <div className="movie__component__wrapper">
                <MovieComponent />
            </div>
            <div className="movie__component__wrapper">
                <MovieComponent />
            </div>
            <div className="movie__component__wrapper">
                <MovieComponent />
            </div>
            <div className="movie__component__wrapper">
                <MovieComponent />
            </div>
            <div className="movie__component__wrapper">
                <MovieComponent />
            </div>
            <div className="movie__component__wrapper">
                <MovieComponent />
            </div>

        </div>
    )
}

export default MovieRow
