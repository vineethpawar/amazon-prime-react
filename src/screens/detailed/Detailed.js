import React, { useState, useEffect } from 'react'
import { API_KEY } from '../../request'
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import AddIcon from '@material-ui/icons/Add';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import ShareIcon from '@material-ui/icons/Share';
import './Detailed.css'
import RecommendedScreen from './../recommendedscreen/RecommendedScreen';
import Axios from 'axios'




function Detailed({ mediaType = 'movie',
    changeScreen,
    selectedRow,
    muteState,
    selectedComponent,
    changeMuteState,
    changeSelectedComponent,
    changeSelectedRow,
    movieId }) {


    useEffect(() => {
        if (movieId > 10 && movieId !== 'left' && movieId !== 'right') {
            Axios.get(`https://api.themoviedb.org/3/${mediaType}/${movieId}?api_key=${API_KEY}`)
                .then((response) => {
                    if (mediaType === 'movie') setTitle(response.data.title); else setTitle(response.data.name);
                    setOverview(response.data.overview)
                    setDuration(response.data.runtime)
                    if (mediaType === 'movie') setRelease(response.data.release_date); else setRelease(response.data.first_air_date);
                    setTagline(response.data.tagline)
                    setProduction((response.data.production_companies.map(pc => pc.name)).join(','))
                    setCountry((response.data.production_countries.map(pc => pc.name)).join(','))
                    setGenres((response.data.genres.map(genre => genre.name)).join(','))
                    setLanguages((response.data.spoken_languages.map(language => language.english_name)).join(','))
                    setRating(response.data.vote_average)
                    if (response.data.budget !== 0) setBudget(response.data.budget)
                    setBackgroundImage(`https://image.tmdb.org/t/p/original${response.data.backdrop_path}`)
                }).then(() => { document.getElementById('detailedID').scrollTop = 0; })
                .catch(() => { })

        }




        tippy('.detailed__icn__span__watchlist', {
            duration: 50,
            delay: [0, 0],
            content: 'Watchlist',
        })

        tippy('.detailed__icn__span__share', {
            duration: 50,
            delay: [0, 0],
            content: 'Share',
        })
    }, [selectedComponent])


    const [title, setTitle] = useState('Loading...')
    const [backgroundImage, setBackgroundImage] = useState('Loading...')
    const [overview, setOverview] = useState('')
    const [duration, setDuration] = useState('--- min')
    const [release, setRelease] = useState('')
    const [tagline, setTagline] = useState('')
    const [production, setProduction] = useState('')
    const [country, setCountry] = useState('')
    const [genres, setGenres] = useState('')
    const [languages, setLanguages] = useState('')
    const [rating, setRating] = useState('')
    const [budget, setBudget] = useState('N/A')

    return (
        <div id="detailedID" className="detailed">
            <div className="background__overlay" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

            <div className="detailed__content">

                <h2>{title}</h2>
                <p className="text-muted lead"> <strong> {mediaType === 'movie' && <span>{duration} min  &nbsp;&nbsp; </span>}  {release}</strong></p>
                <div>
                    {overview}
                </div>

                {tagline.length > 0 &&
                    <div className="pt-3">
                        <i className="fa fa-quote-left"></i> &nbsp;
                        {tagline}
                        &nbsp;
                        <i className="fa fa-quote-right"></i>
                    </div>
                }

                <div className="detailed__icons">
                    <button className="detailed__btn btn__primary text-light py-2 px-5 lead rounded" >
                        <strong>
                            <PlayArrowIcon className="detailed__play__icn" />
                            Play
                        </strong>
                    </button>
                    <span className="detailed__icn__span detailed__icn__span__watchlist">
                        <AddIcon className="detailed__icn__watchlist" />
                    </span>

                    <span className="detailed__icn__span detailed__icn__span__share">
                        <ShareIcon className="detailed__icn__speaker" />
                    </span>

                </div>

                <div className="details__info mt-3">
                    <div className="details__info__item">Production: {production}</div>
                    <div className="details__info__item">Country: {country}</div>
                    <div className="details__info__item">Genres: {genres}</div>
                    <div className="details__info__item">Languages: {languages}</div>
                    <div className="details__info__item">Rating: {rating}</div>
                    {mediaType === 'movie' && <div className="details__info__item">Budget: {budget}</div>}
                </div>


            </div>

            <h3 className="detailed__recomendations__title my-4 ">
                Recommended
            </h3>

            <RecommendedScreen
                movieId={movieId}
                mediaType={mediaType}
                changeScreen={changeScreen}
                selectedRow={selectedRow}
                muteState={muteState}
                selectedComponent={selectedComponent}
                changeMuteState={changeMuteState}
                changeSelectedComponent={changeSelectedComponent}
                changeSelectedRow={changeSelectedRow}
            />
        </div>
    )
}

export default Detailed
