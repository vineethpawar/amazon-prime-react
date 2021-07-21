import React, { useState, useEffect } from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import BlockIcon from '@material-ui/icons/Block';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import './MovieComponent.css'
import Axios from 'axios'
import { API_KEY } from '../../request.js'

function MovieComponent({ id, movieTitle, image, description, release, rating, type = "movie", popularity, selectedComponent, muteState, changeMuteState, rowTitle, selectedRow, changeScreen, originalLanguage }) {


    useEffect(() => {
        if (id > 10 && id !== 'left' && id !== 'right')
            Axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}&language=en-US`)
                .then((response) => {
                    if (response.data.results && response.data.results.length > 0) {


                        // setVideoTrailer(response.data.results[0].key)
                        response.data.results.forEach((video) => {
                            if (video.type === 'Trailer')
                                setVideoTrailer(video.key)
                        }
                        )


                    }
                })
                .catch(() => { })
        setImagePoster(image);
        setTitle(movieTitle);
        setOverview(description);
        setReleaseDate(release);
        setMovieRating(rating);
        setVideoType(type);
        setMoviePopularity(popularity);
        setOrglang(originalLanguage)


    }, [])

    const [orgLang, setOrglang] = useState('')
    const [videoTrailer, setVideoTrailer] = useState('H0sFA7I58E8')
    const [imagePoster, setImagePoster] = useState('https://th.bing.com/th/id/OIP.No8J9G1fdcptHtEtZ1qSYAHaEK?w=288&h=180&c=7&o=5&pid=1.7')
    const [title, setTitle] = useState("Loading..")
    const [overview, setOverview] = useState('Loading description')
    const [releaseDate, setReleaseDate] = useState('0000-00-00')
    const [movieRating, setMovieRating] = useState('N/A')
    const [videoType, setVideoType] = useState('')
    const [moviePopularity, setMoviePopularity] = useState('calculating..')
    const [expandedComponent, setExpandedComponent] = useState(false)
    const [imgToVideo, setImgToVideo] = useState(false)
    const [firstTimeDelay, setFirstTimeDelay] = useState(false)
    const [watchlist, setWatchlist] = useState(false)
    const changeToVideo = (status) => { setImgToVideo(status) }
    const cardGrow = (status) => { setExpandedComponent(status) }



    return (
        <div onMouseOver={() => cardGrow(true)} onMouseLeave={() => cardGrow(false)} >

            {id === selectedComponent && rowTitle === selectedRow ?
                <div className="movie__component" >
                    {
                        !expandedComponent ?

                            <div className="movie__wrapper__small" onClick={() => changeScreen('detail')}>
                                {image !== 'https://image.tmdb.org/t/p/originalnull' ? <img className="movie__img" src={imagePoster} alt="" /> : <img className="movie__img" src="https://th.bing.com/th/id/OIP.No8J9G1fdcptHtEtZ1qSYAHaEK?w=288&h=180&c=7&o=5&pid=1.7" alt="" />}
                            </div>

                            :

                            <div className="movie__wrapper__large" >
                                <div style={{ position: 'relative' }}
                                    onMouseOver={() => { changeToVideo(true); setTimeout(() => { setFirstTimeDelay(true); }, 100); }}
                                    onMouseLeave={() => { changeToVideo(false); setFirstTimeDelay(false); }}
                                >
                                    {imgToVideo && firstTimeDelay ?
                                        <span >
                                            <span className="audio__icn" onClick={() => { if (muteState === 0) changeMuteState(1); else if (muteState === 1) changeMuteState(0); }}>
                                                {muteState === 1 ?

                                                    <span className="icn__span speaker__icn">
                                                        <VolumeOffIcon className="plus__icn" />
                                                    </span>
                                                    :
                                                    <span className="icn__span speaker__icn">
                                                        <VolumeUpIcon className="plus__icn" />
                                                    </span>
                                                }
                                            </span>
                                            <div className="video__overlay" onClick={() => changeScreen('detail')}></div>
                                            {muteState === 0 &&
                                                <iframe className="movie__video" width="auto" src={`https://www.youtube.com/embed/${videoTrailer}?loop=1&playlist=${videoTrailer}&controls=0&autoplay=1&mute=0`} frameBorder="0" allow="autoplay;encrypted-media;" allowFullScreen></iframe>
                                            }
                                            {muteState === 1 &&

                                                <iframe className="movie__video" width="auto" src={`https://www.youtube.com/embed/${videoTrailer}?loop=1&playlist=${videoTrailer}&controls=0&autoplay=1&mute=1`} frameBorder="0" allow="autoplay;encrypted-media;" allowFullScreen></iframe>
                                            }
                                        </span>
                                        :
                                        image !== 'https://image.tmdb.org/t/p/originalnull' ? <img className="movie__img" src={imagePoster} alt="" /> : <img className="movie__img" src="https://th.bing.com/th/id/OIP.No8J9G1fdcptHtEtZ1qSYAHaEK?w=288&h=180&c=7&o=5&pid=1.7" alt="" />


                                    }
                                </div>
                                <div className="movie__content" style={{ position: 'relative' }}>
                                    <div className="movie__content__overlay" onClick={() => changeScreen('detail')}></div>
                                    <div className="icon__row" style={{ position: 'relative' }}>
                                        <div className="icon__row__content__overlay"></div>
                                        <span className="icons__left">
                                            <span className="play__span tippy__span__play" >
                                                <PlayArrowIcon className="play__icon" />
                                            </span>
                                        </span>

                                        <span className="icons__right">
                                            {!watchlist ?
                                                <span className="icn__span tippy__span__watchlist" onClick={() => setWatchlist(true)}>
                                                    <AddIcon className="plus__icn" />
                                                </span>
                                                :
                                                <span className="icn__span tippy__span__added" onClick={() => setWatchlist(false)} >
                                                    <SpeakerNotesIcon className="notes__icn" />
                                                </span>
                                            }
                                            <span className="icn__span tippy__span__block" >
                                                <BlockIcon className="block__icn " />
                                            </span>
                                        </span>
                                    </div>

                                    <div className="content__row">
                                        <h6 className="movie__title">{title}</h6>
                                        <p className="movie__description">{overview.length > 150 ? `${overview.slice(0, 150)}...` : overview}</p>
                                        <span className="movie__numericals">
                                            <span className="time">★ {movieRating}</span>

                                            {release !== false ? <span title="release" className="year">📅 {releaseDate}</span> : null}

                                            <span title="media type" className="media__type">{orgLang}</span>
                                            <span>{id}</span>
                                        </span>

                                    </div>
                                </div>
                            </div>
                    }
                </div >

                :


                <div className="movie__component" onClick={() => changeScreen('detail')} >
                    <div className="movie__wrapper__small">
                        {image !== 'https://image.tmdb.org/t/p/originalnull' ? <img className="movie__img" src={imagePoster} alt="" /> : <img className="movie__img" src="https://th.bing.com/th/id/OIP.No8J9G1fdcptHtEtZ1qSYAHaEK?w=288&h=180&c=7&o=5&pid=1.7" alt="" />}
                    </div>
                </div >
            }
        </div>
    )
}

export default MovieComponent
