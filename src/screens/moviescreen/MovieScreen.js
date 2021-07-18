import React, { useState } from 'react'
import MovieRow from './../../components/movierow/MovieRow';
import { API_KEY } from '../../request.js'
import MovieBanner from '../../components/moviebanner/MovieBanner';
import './MovieScreen.css'
import Footer from './../../components/footer/Footer';
import Navbar from './../../components/navbar/Navbar';

function MovieScreen({ mediaType, originalLanguage, changeScreen, selectedRow, muteState, selectedComponent, changeMuteState, changeSelectedComponent, changeSelectedRow }) {

  return (

    <div className="movie__screen" >

      <Navbar />

      <MovieBanner originalLanguage={originalLanguage} mediaType={mediaType} />

      <div className="movie__strips">
        <div className="movie__row__strip movie__row__strip1" onMouseOver={() => changeSelectedRow('trending')}>
          <MovieRow changeScreen={changeScreen} muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL={`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${API_KEY}&with_original_language=${originalLanguage}`} rowTitle='trending' selectedRow={selectedRow} />
        </div>

        <div className="movie__row__strip movie__row__strip2" onMouseOver={() => changeSelectedRow('popular')} >
          <MovieRow changeScreen={changeScreen} muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL={`https://api.themoviedb.org/3/${mediaType}/popular?api_key=${API_KEY}&with_original_language=${originalLanguage}&page=1`} rowTitle='popular' selectedRow={selectedRow} />
        </div>

        <div className="movie__row__strip movie__row__strip3" onMouseOver={() => changeSelectedRow('top rated')} >
          <MovieRow changeScreen={changeScreen} muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL={`https://api.themoviedb.org/3/${mediaType}/top_rated?api_key=${API_KEY}&with_original_language=${originalLanguage}&page=1`} rowTitle='top rated' selectedRow={selectedRow} />
        </div>

        <div className="movie__row__strip movie__row__strip4" style={{ position: 'relative', padding: '80px 0 10px' }}>
          <Footer />
        </div>




      </div>



    </div>
  )
}

export default MovieScreen
