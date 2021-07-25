import React, { useState, useEffect } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './MovieRow.css'
import MovieComponent from './../moviecomponent/MovieComponent';

import Axios from 'axios'


const scrollLeft = (elem) => {
    document.getElementById(elem).scrollLeft += 300;

}

const scrollRight = (elem) => {

    document.getElementById(elem).scrollLeft -= 300;

}


function MovieRow({ requestURL, rowTitle, selectedComponent, changeSelectedComponent, muteState, changeMuteState, selectedRow, changeScreen, updateScreen ,mediaType, userDetails}) {
    useEffect(() => {
        Axios.get(requestURL)
            .then(response => { setMoviesArray(response.data.results); })
            .catch(() => { })
    }, [updateScreen])



    const [moviesArray, setMoviesArray] = useState([
        {
            backdrop_path: null,
            id: 1,
            media_type: "movie",
            original_language: "",
            original_title: "Loading",
            overview: "",
            popularity: 0,
            release_date: "2021-07-07",
            title: "Loading...",
            vote_average: 0
        },
        {
            backdrop_path: null,
            id: 2,
            media_type: "movie",
            original_language: "",
            original_title: "Loading",
            overview: "",
            popularity: 0,
            release_date: "2021-07-07",
            title: "Loading...",
            vote_average: 0
        },
        {
            backdrop_path: null,
            id: 3,
            media_type: "movie",
            original_language: "",
            original_title: "Loading",
            overview: "",
            popularity: 0,
            release_date: "2021-07-07",
            title: "Loading...",
            vote_average: 0
        },
        {
            backdrop_path: null,
            id: 4,
            media_type: "movie",
            original_language: "",
            original_title: "Loading",
            overview: "",
            popularity: 0,
            release_date: "2021-07-07",
            title: "Loading...",
            vote_average: 0
        },
        {
            backdrop_path: null,
            id: 5,
            media_type: "movie",
            original_language: "",
            original_title: "Loading",
            overview: "",
            popularity: 0,
            release_date: "2021-07-07",
            title: "Loading...",
            vote_average: 0
        },
        {
            backdrop_path: null,
            id: 6,
            media_type: "movie",
            original_language: "",
            original_title: "Loading",
            overview: "",
            popularity: 0,
            release_date: "2021-07-07",
            title: "Loading...",
            vote_average: 0
        },
        {
            backdrop_path: null,
            id: 7,
            media_type: "movie",
            original_language: "",
            original_title: "Loading",
            overview: "",
            popularity: 0,
            release_date: "2021-07-07",
            title: "Loading...",
            vote_average: 0
        },

    ])

    return (

        <div className="movie__row__wrapper">
            <div className="movie__row__title">
                {rowTitle}
            </div>

            <div className='movie__row'>
                <div className="carousal__scroller movie__row__scroll__left" onMouseOver={() => changeSelectedComponent('left')} onClick={() => scrollRight(`movie_${rowTitle}`)}>
                    <ArrowBackIosIcon className="icn__arrow" />
                </div>
                <div className="carousal__scroller movie__row__scroll__right" onMouseOver={() => changeSelectedComponent('right')} onClick={() => scrollLeft(`movie_${rowTitle}`)}>
                    <ArrowForwardIosIcon className="icn__arrow" />
                </div>

                <div id={`movie_${rowTitle}`} className={`movie__row__container`}>
                    {moviesArray.map(movie => 
                         
                          <div key={movie.id} className="movie__component__wrapper" onMouseOver={() => changeSelectedComponent(movie.id)}>
                            <MovieComponent changeScreen={changeScreen} id={movie.id} selectedComponent={selectedComponent} image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} movieTitle={movie.title || movie.name} description={movie.overview} release={movie.release_date || false} rating={movie.vote_average} popularity={movie.popularity} muteState={muteState} changeMuteState={changeMuteState} rowTitle={rowTitle} selectedRow={selectedRow} originalLanguage={movie.original_language} mediaType={mediaType} userDetails={userDetails}/>
                          </div>
                    
                        
                    )
                    }
                </div>


            </div>

        </div>

    )
}

export default MovieRow

