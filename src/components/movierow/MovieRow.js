import React, { useState, useEffect } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './MovieRow.css'
import MovieComponent from './../moviecomponent/MovieComponent';

import Axios from 'axios'


const scrollLeft = (elem) => {
    document.getElementById(elem).scrollLeft+=300;

}

const scrollRight = (elem) => {

    document.getElementById(elem).scrollLeft-=300;

}


function MovieRow({ requestURL, rowTitle = "Default title", selectedComponent, changeSelectedComponent, muteState, changeMuteState, selectedRow }) {
    useEffect(() => {
        Axios.get(requestURL)
            .then(response => { setMoviesArray(response.data.results); console.log(response.data.results) })
    }, [])



    const [moviesArray, setMoviesArray] = useState([])

    return (

        <div className="movie__row__wrapper">
            <div className="movie__row__title">
                {rowTitle}
            </div>

            <div className='movie__row'>
                <div className="carousal__scroller movie__row__scroll__left" onClick={() => scrollRight(`movie_${rowTitle}`)}>
                    <ArrowBackIosIcon className="icn__arrow" />
                </div>
                <div className="carousal__scroller movie__row__scroll__right" onClick={() => scrollLeft(`movie_${rowTitle}`)}>
                    <ArrowForwardIosIcon className="icn__arrow" />
                </div>

                <div id={`movie_${rowTitle}`} className={`movie__row__container`}>
                    {moviesArray.map(movie =>
                        <div key={movie.id} className="movie__component__wrapper" onMouseOver={() => changeSelectedComponent(movie.id)}>
                            <MovieComponent id={movie.id} selectedComponent={selectedComponent} image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} movieTitle={movie.title || movie.name} description={movie.overview} release={movie.release_date || false} rating={movie.vote_average} type={movie.media_type} popularity={movie.popularity} muteState={muteState} changeMuteState={changeMuteState} rowTitle={rowTitle} selectedRow={selectedRow} />
                        </div>
                    )
                    }
                </div>


            </div>

        </div>

    )
}

export default MovieRow
