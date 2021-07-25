import React, { useState, useEffect } from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import InfoIcon from '@material-ui/icons/Info';
import { API_KEY } from '../../request.js'
import Axios from 'axios'
import './MovieBanner.css'

function MovieBanner({ originalLanguage, mediaType, updateScreen, changeScreen, changeSelectedComponent, kidMode }) {
    const [screenWidth, setScreenWidth] = useState(0);
    const [bannerImage, setBannerImage] = useState();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [movieID, setMovieID] = useState();
    const updateAPI = (tries) => {
        let num = Math.floor((Math.random() * 20) + 1)

        if (kidMode === true) {
            Axios.get(`https://api.themoviedb.org/3/${mediaType}/popular?api_key=${API_KEY}&with_original_language=${originalLanguage}&with_genres=16&include_adult=false&page=1`)
                .then((response) => {
                   
                    if (response.data.results[num].backdrop_path === null && tries < 10) updateAPI(tries + 1)
                    if (mediaType === 'movie') setTitle(response.data.results[num].title); else setTitle(response.data.results[num].name);
                    setMovieID(response.data.results[num].id)
                    setDescription(response.data.results[num].overview)
                    setBannerImage(`https://image.tmdb.org/t/p/original${response.data.results[num].backdrop_path}`)
                }).catch(() => updateAPI())
        } else {
            Axios.get(`https://api.themoviedb.org/3/${mediaType}/popular?api_key=${API_KEY}&with_original_language=${originalLanguage}&include_adult=false&page=1`)
                .then((response) => {
                   
                    if (response.data.results[num].backdrop_path === null && tries < 10) updateAPI(tries + 1)
                    if (mediaType === 'movie') setTitle(response.data.results[num].title); else setTitle(response.data.results[num].name);
                    setMovieID(response.data.results[num].id)
                    setDescription(response.data.results[num].overview)
                    setBannerImage(`https://image.tmdb.org/t/p/original${response.data.results[num].backdrop_path}`)
                }).catch(() => updateAPI())
        }

    }
    useEffect(() => {
        setScreenWidth(document.body.clientWidth);
         window.addEventListener("resize", (event) => {
        setScreenWidth(document.body.clientWidth);
      })
        let tries = 0;
        updateAPI(tries)
    }, [updateScreen, kidMode])

    return (
        <div className="movie__banner ">
            {screenWidth>600 ?

                <div className="row row__comp row__wide " style={{ backgroundImage: `url(${bannerImage})` }}>
                    <div className=" col-md-7 d-md-none " >
                    </div>
                    <div className="col_text col-md-5">
                        <div className="d-flex mx-auto">
                            <div className="text__wrapper">
                                <h2>{title}</h2>
                                <p className="banner__info mb-5">
                                    {description.length > 250 ? `${description.slice(0, 250)}...` : description}
                                </p>
                                {title.length > 0 &&
                                    <>
                                        <button className="text-light mr-3 btn btn__primary banner__btn"><PlayCircleFilledIcon className="banner__btn__icn" /> Play</button>
                                        <button className="btn btn-primary-outline banner__btn" onClick={() => { changeSelectedComponent(movieID); changeScreen('detail') }}><InfoIcon className="banner__btn__icn" /> Info</button>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-7 d-none d-md-block" >
                    </div>
                </div>

                :

                <div className="row row__comp " >
                    <div className="col__banner__img col-md-7 d-md-none " style={{ backgroundImage: `url(${bannerImage})` }}>
                    </div>
                    <div className="col_text col-md-5 col__banner__dark">
                        <div className="d-flex mx-auto">
                            <div className="text__wrapper">
                                <h2>{title}</h2>
                                <p className="banner__info mb-5">
                                    {description.length > 100 ? `${description.slice(0, 100)}...` : description}
                                </p>
                                {title.length > 0 &&
                                    <>
                                        <button className="mr-3 btn btn-primary banner__btn"><PlayCircleFilledIcon className="banner__btn__icn" /> Play</button>
                                        <button className="btn btn-primary-outline banner__btn"><InfoIcon className="banner__btn__icn" /> Info</button>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col__banner__img col-md-7 d-none d-md-block" style={{ backgroundImage: `url(${bannerImage})` }} >
                    </div>
                </div>

            }

        </div>
    )
}

export default MovieBanner
